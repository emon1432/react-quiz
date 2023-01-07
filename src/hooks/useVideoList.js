import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useRef, useState } from "react";

export default function useVideoList(pages) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const effectRan = useRef(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(pages);

  useEffect(() => {
    setPage((prevPage) => {
      if (prevPage !== pages) {
        effectRan.current = false;
      }
      return pages;
    });

    if (effectRan.current === false) {
      async function fetchVideos() {
        //database call
        const db = getDatabase();
        const videosRef = ref(db, "videos");
        const videoQuery = query(
          videosRef,
          orderByKey(),
          startAt("" + page),
          limitToFirst(12)
        );

        try {
          setError(false);
          setLoading(true);
          const snapshot = await get(videoQuery);
          setLoading(false);
          if (snapshot.exists()) {
            setVideos((prevVideos) => {
              return [...prevVideos, ...Object.values(snapshot.val())];
            });
            // console.log(snapshot.val());
          } else {
            setHasMore(false);
            console.log("No data available");
          }
        } catch (error) {
          console.log(error);
          setLoading(false);
          setError(true);
        }
      }
      fetchVideos();
      return () => {
        effectRan.current = true;
      };
    }
  }, [page, pages]);

  return { loading, error, videos, hasMore };
}

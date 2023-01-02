import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      //database call
      const db = getDatabase();
      const videosRef = ref(db, "videos");
      const videoQuery = query(videosRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(videoQuery);
        if (snapshot.exists()) {
          //   setVideos((prevVideos) => {
          //     return [...prevVideos, ...Object.values(snapshot.val())];
          //   });
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }

    fetchVideos();
  }, []);

  return { loading, error, videos };
}

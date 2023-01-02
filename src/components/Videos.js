import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import classes from "../styles/Videos.module.css";
import Video from "./Video";

export default function Videos() {
  const { loading, error, videos } = useVideoList();
  return (
    <div className={classes.videos}>
      {videos.length > 0 &&
        videos.map((video) => (
          <Link to="/quiz" key={video.youtubeID}>
            <Video
              title={video.title}
              youtubeID={video.youtubeID}
              noq={video.noq}
            />
          </Link>
        ))}
    </div>
  );
}

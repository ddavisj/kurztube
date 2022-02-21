import './VideoItem.css';
import React from 'react';

// So the oVS method is passed down from App to VL to VI (this gives App access to
// .. the selected video,ie. passes the video back up to the top comp).
// Again, video and oVS are destructured from the props obj.

const VideoItem = ({ video, onVideoSelect, selectedVideo }) => {
   return (
      <div
         onClick={() => {
            onVideoSelect(video);
         }}
         className={`video-item item ${
            video === selectedVideo ? 'active' : ''
         }`}
      >
         <img
            alt={video.snippet.title}
            className="ui image"
            src={video.snippet.thumbnails.medium.url}
         />
         <div className="content">
            <div className="header">{video.snippet.title}</div>
         </div>
      </div>
   );
};

export default VideoItem;

import React from 'react';
import VideoItem from './VideoItem';

// Destructure videos arr & oVS out of the props obj and passes both as props to VI

// So renderedList is a mapped array of components. The whole list is returned to the
// .. "ui relaxed" div as an arr. React takes this "pure" arr of divs and renders it.
// .. Note: JS itself does not render arrays, this is a JSX feature.

const VideoList = ({ videos, onVideoSelect, selectedVideo }) => {
   const renderedList = videos.map(video => {
      return (
         <VideoItem
            key={video.id.videoId}
            onVideoSelect={onVideoSelect}
            video={video}
            selectedVideo={selectedVideo}
         />
      );
   });

   return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;

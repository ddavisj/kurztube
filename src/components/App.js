import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

// import the custom hook, allows us to set the videos arr (and derived selected video)
import useVideos from '../hooks/useVideos';

// This App was converted from a CBC to a func comp
const App = () => {
   const [selectedVideo, setSelectedVideo] = useState(null);

   // Use our custom hook like a primitive hook
   const [videos, search] = useVideos('Kurzgesagt');

   // My addition to this app, allows for comp resizing when width is above a breakpoint
   const [windowWidth, setWindowWidth] = useState(
      document.documentElement.clientWidth
   );

   // Add a manual listener for the resize event, sets windowWidth and rerenders
   useEffect(() => {
      window.addEventListener('resize', () => {
         setWindowWidth(document.documentElement.clientWidth);
      });
   }, []);

   // When videos changes - it's initialised as an empty arr in useVideos - set the selected video
   //.. This logic was extracted from the previous onTermSubmit function when the CH was created
   //.. ie. sSV was run asyn cafter the API req was made
   useEffect(() => {
      setSelectedVideo(videos[0]);
   }, [videos]);

   return (
      <div className="ui container" style={{ paddingTop: '15px' }}>
         <SearchBar onFormSubmit={search} />
         <div className="ui grid">
            <div className="ui row">
               <div className={windowWidth > 700 ? 'eleven wide column' : ''}>
                  <VideoDetail video={selectedVideo} />
               </div>
               <div className={windowWidth > 700 ? 'five wide column' : ''}>
                  <VideoList
                     onVideoSelect={setSelectedVideo}
                     videos={videos}
                     selectedVideo={selectedVideo}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default App;

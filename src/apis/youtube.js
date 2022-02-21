import axios from 'axios';

const KEY = 'AIzaSyBfsDes_nW7h3N8lQ2HvEOdT8KJKwtczZ8';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
      part: 'snippet',
      type: 'video',
      maxResults: 5,
      key: KEY,
   },
});

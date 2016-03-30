import axios from 'axios';

const API_KEY = 'YOUR_API_KEY';

export function youtubeSearch(term, callback) {
  const params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video'
  };

  axios
    .get('https://www.googleapis.com/youtube/v3/search', { params })
    .then(response => {
      if (callback) {
        callback(response.data.items)
      }
    });
}

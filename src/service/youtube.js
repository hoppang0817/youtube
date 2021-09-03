import axios from 'axios';
import { useCallback, useState } from 'react';

function Youtube() {
  const baseUrl = 'https://www.googleapis.com/youtube/v3/';
  const construter = (key) => {
    this.key = key;
  };

  const mostPopular = useCallback(async () => {
    try {
      const res = await axios.get(
        `${baseUrl}videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`
      );
      console.log(res.data.items);
    } catch (error) {
      console.log('e', error);
    }
  }, []);

  const handelSearch = useCallback(async (keyWord) => {
    try {
      const res = await axios.get(
        `${baseUrl}search?part=snippet&maxResults=25&q=${keyWord}&type=video&key=${this.key}`
      );
      const items = res.data.items.map((item) => ({
        ...item,
        id: item.id.videoId,
      }));
      console.log(2, items);
    } catch (error) {
      console.log('e', error);
    }
  }, []);
}
export default Youtube;

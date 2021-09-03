import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import Search from './components/search';
import './app.css';
import List from './components/list';
import Detail from './components/detail';
import styles from './app.module.css';

//AIzaSyA1UC4gPnO58lQWr7Z58kMUNjblmfs8Ruw

function App() {
  const [videoUrl, setVideoUrl] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const baseUrl = 'https://www.googleapis.com/youtube/v3/';
  const userKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  
  const mostPopular = useCallback(async () => {
    try {
      const res = await axios.get(`${baseUrl}videos?part=snippet&chart=mostPopular&maxResults=25&key=${userKey}`);
      console.log(res.data.items)
      setVideoUrl(res.data.items);
    } catch (error) {
      console.log("e", error);
    }
  }, [])

  const handelselected = (video) => {
    setSelectedVideo(video)
  }

  //인기리스트와 검색리스트의 형식이다름 map을사용해서 id를 변경해줌
  const handelSearch = useCallback(async (keyWord) => {
    try {
      const res = await axios.get(`${baseUrl}search?part=snippet&maxResults=25&q=${keyWord}&type=video&key=${userKey}`)
      const items = res.data.items.map(item => ({...item, id:item.id.videoId}))
      console.log(2, items);
      setVideoUrl(items);
      setSelectedVideo('');
    } catch (error) {
      console.log('e', error);
    }
  },[]);

  useEffect(() => {
    mostPopular();
  },[mostPopular])
  console.log(1, selectedVideo);

  return (
    <div className={styles.body}>
      <Search onSearch={handelSearch}/>
      <section className={styles.content}>
        {selectedVideo && <div className={styles.detail}>
          <Detail video={selectedVideo} />
        </div>
        }
        <div className={styles.list}>
          <List lodVideo={videoUrl} handelselected={handelselected} display={selectedVideo ? 'list' : 'grid'}/>
        </div>
      </section>
      </div>
  );
}

export default App;

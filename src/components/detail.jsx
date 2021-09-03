import React from 'react';
import styles from './detail.module.css';
const Detail = (props) => {
    const { video } = props;
    const videoId = video.id;
    console.log(videoId)
    const test = "https://www.youtube.com/embed/" + videoId;
    console.log(2, video)
    return (
        <section className={styles.content}>
            <iframe
                title="ytplayer"
                src={test}
                width="100%"
                height="360"
                allowFullScreen
            >    
            </iframe>
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description}</p>
        </section>
    );
}

export default Detail;
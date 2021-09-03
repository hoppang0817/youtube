//import { Card } from 'antd';
import React from 'react';
import styles from './list.module.css';
//import Detail from './detail';
//const { Meta } = Card;

const List = (props) => {
    const { lodVideo , handelselected, display } = props;
    const displayType = display === 'list' ? styles.list : styles.grid;
    return (
        <ul className={styles.videos}>
            {lodVideo.map(item => (
                <li className={`${styles.video} ${displayType}`}  key={item.id} onClick={()=>handelselected(item)}>
                    <img className={styles.thumbnail} alt='video thumbnail' src={item.snippet.thumbnails.medium.url} />
                    <div>
                        <p className={styles.title}>{item.snippet.title}</p>
                    </div>
                </li>
            )
            )}
            </ul>
            )
        }
        
        export default List;
        // //    <div onClick={() => {<Detail/>}}>
        //     <Card
        //       key={item.id}
        //       hoverable
        //       style={{ display: 'flex'}}
        //       cover={<img alt="example" src={item.snippet.thumbnails.default.url} />}
        //   >
        //         <Meta title={item.snippet.title} />
        //     </Card>
        //    // </div>
import { memo, useRef } from "react";
import styles from './search.module.css';
const Search = memo((props) => {
  const inputRef = useRef();
  
  const handelSearch = () => {
    const keyWord = inputRef.current.value;
    keyWord && props.onSearch(keyWord);
    inputRef.current.value = '';
  }
  const onSubmit = () => {
    handelSearch();
  }
  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handelSearch();
    }
  }

  return (
    <header className={styles.content}>
      <div className={styles.logo}>
        <img src='logo.png' alt='logo' />
        <h1 className={styles.title}>YouTube</h1>
      </div>
      <input className={styles.input} placeholder='search' ref={inputRef} onKeyPress={onKeyPress}></input>
      <button className={styles.button} onClick={onSubmit}>
        <img className={styles.buttonImg} src='search.png' alt='search' />
      </button>
    </header>
  );
});

export default Search;
import React from 'react';
import styles from './likes.module.scss';
import { ICatCard } from '../item-card/item-card';

const Likes = (props: Pick<ICatCard, 'likes'>) => {
  return (
    <div className={styles.likesContainer}>
      <div className={styles.likes}/>
      <span>{props.likes}</span>
    </div>
  )
}

export default Likes;
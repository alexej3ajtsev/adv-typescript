import React from 'react';
import styles from './tags.module.scss';
import { IBuildingCard } from '../item-card/item-card';

const Tags = (props: Pick<IBuildingCard, 'tags'>) => {
  const { tags } = props;

  return (
    <div className={styles.tags}>
      {tags.map((tag) => {
        return <span key={`${tag.type}-${tag.title}`}>{tag.title}</span>
      })}
    </div>
  )
}

export default Tags;
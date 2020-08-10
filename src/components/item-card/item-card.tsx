import React, { CSSProperties } from 'react';
import styles from './item-card.module.scss';
import { UnsplashTag } from '../../api';
import Tags from '../tags/tags';
import Likes from '../likes/likes';

interface IBadCardProps {
  title: string;
  imageUrl: string;
  link: string;
  type: string;
  color?: string;
  username?: string;
  instagram?: string;
  firsName?: string;
  lastName?: string;
  description?: string;
  tags?: UnsplashTag[];
  likes?: number;
}

export interface ICardCommon {
  title: string;
  imageUrl: string;
  link: string;
  type: 'cat' | 'human' | 'buildings';
  onClick(title: string): void;
}

export interface ICatCard extends ICardCommon {
  color: string;
  type: 'cat'
  likes: number;
}

export interface IHumanCard extends ICardCommon {
  username: string;
  instagram: string;
  firsName: string;
  lastName?: string;
  type: 'human'
}

export interface IBuildingCard extends ICardCommon {
  authorName: string;
  description: string;
  tags: UnsplashTag[];
  type: 'buildings'
}

type CardItemProps = ICatCard | IHumanCard | IBuildingCard;

const ItemCard = (props: CardItemProps) => {
  const isShowLikes = props.type === 'cat' && props.likes;
  const isShowDescription = props.type === 'buildings' && props.description;
  const isShowTags = props.type === 'buildings' && props.tags;
  const cssColor = props.type === 'cat' && props.color ? {
   '--card-gradient-color': props.color
  } : {};

  return (
    <div
      style={cssColor as CSSProperties}
      className={`${styles.card} ${styles[props.type]}`}
      onClick={() => props.onClick(props.title)}
    >
      <img src={props.imageUrl} alt={props.title}/>
      {isShowTags && (
        <Tags tags={isShowTags} />
      )}
      {isShowLikes && (
        <Likes likes={isShowLikes} />
      )}
      <h3>{props.title}</h3>
      {isShowDescription && (
        <p>{isShowDescription}</p>
      )}
    </div>
  )
}

export default ItemCard;
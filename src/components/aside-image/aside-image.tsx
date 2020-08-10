import React, { CSSProperties } from 'react';
import styles from './aside-image.module.scss';
import { ICardCommon, ICatCard, IBuildingCard } from '../item-card/item-card';
import { hexToRgbA } from '../../utils/index';
import Tags from '../tags/tags';
import Likes from '../likes/likes';

type AsideImageProps = Omit<ICardCommon, 'type' | 'onClick'> & Pick<ICatCard, 'likes' | 'color'> & Pick<IBuildingCard, 'tags'>;

const AsideImage = (props:AsideImageProps) => {
  const { tags, likes, link, title, imageUrl, color } = props;
  const css = { background: `linear-gradient(to bottom, ${hexToRgbA(color, .5)} 0%, rgba(16,16,16,1) 60%), url(${imageUrl}) no-repeat top left` };
  return (
    <div style={css as CSSProperties} className={styles.wrapper} onClick={() => {
      window.open(link)
    }}>
      <Likes likes={likes} />
      <h2>{title}</h2>
      <Tags tags={tags}/>
    </div>
  )

}

export default AsideImage;
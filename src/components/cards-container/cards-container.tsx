import React from 'react';
import styles from './cards-container.module.scss';

interface ICardContainerProps {
  title: string;
  children: React.ReactChild[];
  isInline?:boolean
}

const CardsContainer = (props:ICardContainerProps) => {
  return(
    <>
      <h2>{props.title}</h2>
      <div className={`${styles.container} ${props.isInline ? styles.containerInline : ''}`}>
        {props.children}
      </div>
    </>
  )
}

export default CardsContainer;
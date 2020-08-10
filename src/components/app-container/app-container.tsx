import React, { useEffect } from 'react';
import { getCats, UnsplashItem, getHumans, getBuildings } from '../../api';
import styles from './app-container.module.scss';
import ItemCard from '../item-card/item-card';
import CardsContainer from '../cards-container/cards-container';
import { getBy } from '../../utils/index';
import AsideImage from '../aside-image/aside-image';

const AppContainer = () => {
  const [cats, setCats] = React.useState<UnsplashItem[]>([]);
  const [humans, setHumans] = React.useState<UnsplashItem[]>([]);
  const [buildings, setBuildings] = React.useState<UnsplashItem[]>([]);
  const [chosenCard, setChosenCard] = React.useState<UnsplashItem | null>(null);

  const handleCardClick = (title:string) => {
    const data:Array<UnsplashItem> = [
      ...cats,
      ...humans,
      ...buildings
    ];
    const cardItem = getBy(data, 'alt_description', title);
    setChosenCard(cardItem || null);

  }
  useEffect(() => {
    const fetchData = async () => {
      const resultCats = await getCats();
      const resultHumans = await getHumans();
      const resultBuildings = await getBuildings();
      setCats(resultCats);
      setHumans(resultHumans);
      setBuildings(resultBuildings);
    };
    
    fetchData();
  }, [])

  return (
    <div className={chosenCard ? styles.containerWithChosenCard : ''}>
      <main>
        <CardsContainer title={'Buildings'} isInline>
          {buildings.map((item) => 
            <ItemCard
              key={item.id}
              type={'buildings'}
              imageUrl={item.urls.regular}
              title={item.alt_description}
              link={item.links.html}
              onClick={handleCardClick}
              tags={item.tags}
              authorName={`${item.user.first_name} ${item.user.last_name || ''}`}
              description={item.description || item.alt_description}
            />
          )}
        </CardsContainer>
        <CardsContainer title={'Cats'} isInline>
          {cats.map((item) => 
            <ItemCard
              key={item.id}
              type={'cat'}
              imageUrl={item.urls.thumb}
              color={item.color}
              title={item.alt_description}
              likes={item.likes}
              link={item.links.html}
              onClick={handleCardClick}
            />
          )}
        </CardsContainer>
        <CardsContainer title={'Human'} isInline>
          {humans.map((item) => 
            <ItemCard
              key={item.id}
              type={'human'}
              imageUrl={item.urls.regular}
              title={item.alt_description}
              link={item.links.html}
              onClick={handleCardClick}
              firsName={item.user.first_name}
              instagram={item.user.instagram_username || ''}
              username={item.user.username}
            />
          )}
        </CardsContainer>
      </main>
      {chosenCard && (
        <div className={styles.shosenCardContainer}>
          <AsideImage
            color={chosenCard.color}
            title={chosenCard.alt_description}
            imageUrl={chosenCard.urls.regular}
            link={chosenCard.links.html}
            likes={chosenCard.likes}
            tags={chosenCard.tags}
          />
        </div>
      )}
    </div>
  )
}

export default AppContainer
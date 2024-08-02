import React from 'react';
import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';
import Card from '../../components/Card';
import bannerMedia from '../../assets/images/shore.png';
import accomodations from '../../var/accomodations.json';

function Home() {
  return (
    <React.Fragment>
      <Banner
        title="Chez vous, partout et ailleurs"
        mediaUrl={ bannerMedia }
        mediaDescription="Photographie de falaises"
      />

      <Gallery
        items={accomodations.map(item =>
          <Card
            id={ item.id }
            title={ item.title }
            mediaUrl={ item.cover }
            mediaDescription={ item.title }
          />
        )}
      />
    </React.Fragment>
  )
}

export default Home;

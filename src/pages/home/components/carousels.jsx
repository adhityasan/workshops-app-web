import React, { memo } from 'react';
import styled from 'styled-components';
import { Button, Grid } from '@material-ui/core';
import { up } from 'styled-breakpoints';
import Carousel from 'react-material-ui-carousel';

import { CardContainer } from 'components/styled';

const items = [
  {
    id: '1',
    name: 'Create Your Own E-Commerce Website',
    description: 'Fastest way to create your own e-commerce with magento and opencart',
    image: 'https://www.webemporium.in/wp-content/uploads/2016/10/banner1.png',
  },
  {
    id: '2',
    name: 'Build Hero Level Website',
    description: 'Build your own website from zero to hero level',
    image: 'https://mrkwebllc.com/wp-content/uploads/2018/10/banner1.jpg',
  },
  {
    id: '3',
    name: 'Mastering All Firebase Feature',
    description: 'Mastering Deployment, Cloud Storage, Authentication in a single meet',
    image: 'https://d6vdma9166ldh.cloudfront.net/media/images/066a0a7b-fb31-4952-8711-90442ac47f6b.jpg',
  },
  {
    id: '4',
    name: 'Personal Branding',
    description: 'All You need to know about personal branding',
    image: 'https://www.ag5.com/wp-content/uploads/2019/07/Blog18_Header-1000x350.png',
  },
];

const ItemCarousel = memo(({ name, description, image }) => (
  <CardContainer>
    <CarouselImageWrapper>
      <CarouselImage src={image} alt={name} />
    </CarouselImageWrapper>
    <ItemDescriptionWrapper>
      <h2>{name}</h2>
      <p>{description}</p>
      <Button variant="contained" color="primary">
        Let&apos;s See !
      </Button>
    </ItemDescriptionWrapper>
  </CardContainer>
));

const Carousels = () => (
  <Grid item xs={12} sm={12} md={12} lg={12}>
    <Carousel
      // indicators={false}
      timeout={250}
      interval={5000}
    >
      {items.map(item => <ItemCarousel key={item.id} name={item.name} description={item.description} image={item.image} />)}
    </Carousel>
  </Grid>
);

const CarouselImageWrapper = styled.div`
  height: 8rem;
  ${up('sm')} {
    position: relative;
    width: 100%;
    height: 20rem;
    border-radius: 0.5rem;
  }
  ${up('md')} {
    height: 25rem;
  }
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 0.5rem;
`;

const ItemDescriptionWrapper = styled.div`
  padding: 0.5rem;

  h2 {
    margin-top: 0;
  }
`;

export default Carousels;

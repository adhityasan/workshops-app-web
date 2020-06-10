import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';
import {
  Card,
  Button,
  TextField,
} from '@material-ui/core';

import SearchPlaces from 'components/form/fields/SearchPlaces';


const items = [
  {
    id: '1',
    name: 'Create Your Own Startup',
    description: 'The most inspired workshop you will ever see!',
    carousel: true,
  },
  {
    id: '2',
    name: 'Build Hero Level Website',
    description: 'Build your own website from zero to hero level',
  },
  {
    id: '3',
    name: 'Scrum Master Mind',
    description: 'How to set the as a Scrum Master',
  },
  {
    id: '4',
    name: 'Personal Branding',
    description: 'All You need to know about personal branding',
  },
];

const ItemCarousel = ({ name, description }) => (
  <Card>
    <h2>{name}</h2>
    <p>{description}</p>
    <Button className="CheckButton">
      Check it out!
    </Button>
  </Card>
);

const Home = () => (
  <Wrapper>
    <Carousel indicators={false} interval={5000}>
      {items.map(item => <ItemCarousel key={item.id} name={item.name} description={item.description} />)}
    </Carousel>
    <SearchPlaces />
    <TextField
      margin="normal"
      variant="outlined"
      label="Search Place"
    />
  </Wrapper>
);

const Wrapper = styled.div`
`;

export default Home;

import React, { useEffect, memo, useState } from 'react';
import {
  Grid,
  Typography,
} from '@material-ui/core';

import EventCard from 'components/cards/event';

const PopularAround = memo(() => {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    setWorkshops([{
      _id: '1',
    }, {
      _id: '2',
    }, {
      _id: '3',
    }, {
      _id: '4',
    }, {
      _id: '5',
    }, {
      _id: '6',
    }, {
      _id: '7',
    }]);
  }, []);

  return (
    <Grid container item direction="column" spacing={1}>
      <Grid item>
        <Typography variant="h5">Popular Around</Typography>
      </Grid>
      <Grid container item spacing={3} direction="row" alignItems="flex-start" justify="flex-start">
        {workshops.map(ws => (
          <Grid key={ws._id} item xs={12} sm={6} md={4} lg={3}>
            <EventCard data={ws} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
});

export default PopularAround;

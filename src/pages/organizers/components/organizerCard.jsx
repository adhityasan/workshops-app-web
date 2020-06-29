import React from 'react';

import {
  Typography,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';

import Card from 'components/cards/simple';

const OrganizerCard = ({ organizer }) => (
  <Card>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        {organizer.name} Organizer
      </Typography>
      <Typography variant="h5" component="h2">
        {organizer.name}
      </Typography>
      <Typography variant="body2" component="p">
        {organizer.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button href={`/organizers/${organizer._id}`} component="a" hre variant="contained" color="secondary" size="small">Details</Button>
      <Button variant="contained" color="info" size="small">Create Event</Button>
    </CardActions>
  </Card>
);

export default OrganizerCard;

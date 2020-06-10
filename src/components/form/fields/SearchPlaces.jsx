/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import {
  CircularProgress,
  TextField,
  Typography,
  Box,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import PlacesAutocomplete, {
  getLatLng,
  geocodeByPlaceId,
} from 'react-places-autocomplete';
import { GoogleApiWrapper } from 'google-maps-react';

import { GOOGLE_API_KEY } from 'config';

const SearchPlaces = ({ initialValue, callback }) => {
  const [address, setAddress] = useState(initialValue || '');

  const handleChange = inputAddress => {
    setAddress(inputAddress);
  };

  const handleSelect = placeId => {
    console.log(placeId);
    if (placeId) {
      geocodeByPlaceId(placeId)
        .then(res => getLatLng(res))
        .then(latLng => callback(latLng))
        .catch(err => {
          console.error(err);
        });
    }
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
    >
      {({
        getInputProps,
        suggestions,
        getSuggestionItemProps,
        loading,
      }) => (
        <Autocomplete
          freeSolo
          disableClearable
          autoHighlight
          id="search-places"
          loading={loading}
          options={suggestions}
          getOptionSelected={(option, value) => option?.id === value?.id}
          getOptionLabel={option => option?.description}
          onChange={(_, val) => {
            handleSelect(val?.placeId);
          }}
          renderOption={option => (
            <Typography component="div" variant="body2" {...getSuggestionItemProps(option)}>
              <Box fontWeight="bold">
                {option?.formattedSuggestion?.mainText}
              </Box>
              <Box fontWeight="light" fontSize={12}>
                {option?.formattedSuggestion?.secondaryText}
              </Box>
            </Typography>
          )}
          renderInput={params => (
            <TextField
              fullWidth
              margin="normal"
              variant="outlined"
              label="Search Place"
              InputProps={{
                ...params?.InputProps,
                type: 'search',
                endAdornment: (
                  <>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params?.InputProps?.endAdornment}
                  </>
                ),
              }}
              {...getInputProps({
                placeholder: 'Search Places...',
                className: 'search-places-input',
              })}
              {...params}
            />
          )}
        />
      )}
    </PlacesAutocomplete>
  );
};

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY,
})(SearchPlaces);

/**
 * get current user position by nvigator geolocation from the browser
 * @param {Function} successHandler callback for handle the position result
 * @param {Function} errorHandler callback for handle the error result
 */
const getLocation = (successHandler, errorHandler) => {
  if (!navigator.geolocation) {
    window.alert('Geolocation is not supported by this browser.');
  } else {
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }
};

export default getLocation;

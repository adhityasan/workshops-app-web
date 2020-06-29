export const API_URL = process.env.REACT_APP_API_URL;
export const FULL_URL = process.env.REACT_APP_FULL_URL;
export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export default {
  APP_NAME: 'workshapp',
  API: {
    ME: `${API_URL}/me`,
    SIGNIN: `${API_URL}/authentication`,
    SIGNUP: `${API_URL}/signup`,
    PROFILE: `${API_URL}/profiles`,
    ORGANIZERS: `${API_URL}/organizers`,
    GOOGLE_SIGNIN: `${API_URL}/oauth/google`,
  },
};

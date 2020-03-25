export const PUBLIC_NAVIGATIONS = [
  {
    name: 'organizers',
    label: 'Organizer ?',
    path: '/isorganizer',
  },
  {
    name: 'about',
    label: 'About Us',
    path: '/about',
  },
  {
    name: 'signup',
    label: 'Sign Up',
    path: '/signup',
  },
  {
    name: 'signin',
    label: 'Sign In',
    path: '/signin',
  },
];

export const PRIVATE_NAVIGATIONS = [];

export default [
  ...PUBLIC_NAVIGATIONS,
  ...PRIVATE_NAVIGATIONS,
];

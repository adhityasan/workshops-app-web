export const STRICT_NAVIGATIONS_CONDITION = {
  authenticated: 'AUTHENTICATED',
  unauthenticated: 'UNAUTHENTICATED',
  hasOrganizer: 'HAS_ORGANIZER',
  noOrganizer: 'NOT_ORGANIZER',
};

export const PUBLIC_NAVIGATIONS = [
  {
    name: 'isorganizers',
    label: 'Event Organizer ?',
    path: '/isorganizer',
    strict: [
      STRICT_NAVIGATIONS_CONDITION.noOrganizer,
    ],
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
    strict: [
      STRICT_NAVIGATIONS_CONDITION.unauthenticated,
    ],
  },
  {
    name: 'signin',
    label: 'Sign In',
    path: '/signin',
    strict: [
      STRICT_NAVIGATIONS_CONDITION.unauthenticated,
    ],
  },
];

export const PRIVATE_NAVIGATIONS = [
  {
    name: 'organizers',
    label: 'MY ORGANIZERS',
    path: '/organizers',
    strict: [
      STRICT_NAVIGATIONS_CONDITION.authenticated,
      STRICT_NAVIGATIONS_CONDITION.hasOrganizer,
    ],
  },
  {
    name: 'me',
    label: 'MY PROFILE',
    path: '/me',
    strict: [
      STRICT_NAVIGATIONS_CONDITION.authenticated,
    ],
  },
  {
    name: 'signout',
    label: 'SIGNOUT',
    path: '/signout',
    strict: [
      STRICT_NAVIGATIONS_CONDITION.authenticated,
    ],
  },
];

export default [
  ...PUBLIC_NAVIGATIONS,
  ...PRIVATE_NAVIGATIONS,
];

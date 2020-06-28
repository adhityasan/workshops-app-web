export const STRICT_NAVIGATIONS_CONDITION = {
  authenticated: 'AUTHENTICATED',
  unauthenticated: 'UNAUTHENTICATED',
  hasOrganizer: 'HAS_ORGANIZER',
  noOrganizer: 'NOT_ORGANIZER',
};

export const PUBLIC_NAVIGATIONS = [
  {
    name: 'isorganizers',
    label: 'Organize',
    path: '/isorganizer',
    strict: [
      STRICT_NAVIGATIONS_CONDITION.unauthenticated,
      STRICT_NAVIGATIONS_CONDITION.noOrganizer,
    ],
  },
  {
    name: 'helpfaq',
    label: 'HELP & FAQ',
    path: '/helpfaq',
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
    name: 'peoples',
    label: 'PEOPLE',
    path: '/peoples',
    strict: [
      STRICT_NAVIGATIONS_CONDITION.authenticated,
      STRICT_NAVIGATIONS_CONDITION.hasOrganizer,
    ],
  },
  {
    name: 'organize',
    label: 'ORGANIZE',
    path: '/organize',
    strict: [
      STRICT_NAVIGATIONS_CONDITION.authenticated,
    ],
  },
  {
    name: 'participated',
    label: 'PARTICIPATED',
    path: '/participated',
    strict: [
      STRICT_NAVIGATIONS_CONDITION.authenticated,
    ],
  },
  {
    name: 'profile',
    label: 'PROFILE',
    path: '/profile',
    strict: [
      STRICT_NAVIGATIONS_CONDITION.authenticated,
    ],
  },
];

export default [
  ...PUBLIC_NAVIGATIONS,
  ...PRIVATE_NAVIGATIONS,
];

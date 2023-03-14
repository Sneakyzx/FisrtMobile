const AUTHENTICATE_ROUTE = {
  LOGIN: '@AUTHENTICATE_ROUTE/LOGIN',
  REGISTER: '@AUTHENTICATE_ROUTE/REGISTER',
};

const APP_ROUTE = {
  MAIN_TAB: '@APP_ROUTE/MAIN_TAB',
};

const HOME_ROUTE = {
  ROOT: '@HOME_ROUTE/ROOT',
  HOME_SCREEN: '@HOME_ROUTE/HOME_SCREEN',
};

const SETTING_ROUTE = {
  ROOT: '@SETTING_ROUTE/ROOT',
};

const THREE_ROUTE = {
  ROOT: '@THREE_ROUTE/ROOT',
};

const FOUR_ROUTE = {
  ROOT: '@FOUR_ROUTE/ROOT',
};

const TAB_NAVIGATION_ROOT = {
  HOME_ROUTE,
  SETTING_ROUTE,
  THREE_ROUTE,
  FOUR_ROUTE,
  AUTHENTICATE_ROUTE
};

export {APP_ROUTE, TAB_NAVIGATION_ROOT, AUTHENTICATE_ROUTE};

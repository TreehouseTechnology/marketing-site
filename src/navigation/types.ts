export type AppParamList = {
  Home: undefined;
  About: undefined;
  Contact: undefined;
  Products: undefined;
  Services: undefined;

  NotFound: undefined;
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends AppParamList {}
  }
}

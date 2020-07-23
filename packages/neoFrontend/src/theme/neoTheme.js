import { theme as defaultTheme } from './defaulTheme';

export const theme = {
  ...defaultTheme,
  bannerBackground: '#000000',
  bannerHeight: 80,
  bannerMarginBottom: 28,
  navbarLogoColor: '#ffffff',
  navbarHeight: 32,
  avatarHeight: 45,
};

export const darkNavbarTheme = {
  ...theme,
  bannerHeight: theme.bannerHeight / 2,
  bannerHeightMobile: 40,
  bannerPadding: 20,
  bannerMarginBottom: 0,
  navbarHeight: 20,
  avatarHeight: 20,
};

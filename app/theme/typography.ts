const fonts = {
  poppins: {
    medium: 'Poppins-Medium',
    semiBold: 'Poppins-SemiBold',
  },
  GothicA1: {
    medium: 'GothicA1-Medium',
    regular: 'GothicA1-Regular',
    semiBold: 'GothicA1-SemiBold',
  },
  Roboto: {
    medium: 'Roboto-Medium',
    regular: 'Roboto-Regular',
  },
  Comfortaa: {
    regular: 'Comfortaa-Regular',
  },
  SFProText: {
    semiBold: 'SF-Pro-Text-Semibold',
  },
};

export const textSize = {
  xxxl: {fontSize: 62, lineHeight: 12},
  xxl: {fontSize: 26, lineHeight: 32},
  lg: {fontSize: 20, lineHeight: 32},
  sm: {fontSize: 16, lineHeight: 24},
  xs: {fontSize: 14, lineHeight: 21},
  xxs: {fontSize: 12, lineHeight: 18},
};

export const typography = {
  fonts,
  primary: fonts.Roboto,
  secondary: fonts.GothicA1,
};

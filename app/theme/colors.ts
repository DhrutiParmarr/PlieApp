const palette = {
  primary: '#21d393',
  greenLight: '#34a853',
  secondary: '#828282',
  black: '#000000',
  grayLight: 'rgba(255, 255, 255, 0.4)',
  error: '#F44336',
  success: '#43A048',
  warning: '#FB8A00',
  info: '#B8B8B8',
  grayDark: '#333333',
  grayMedium: '#4f4f4f',
  grayLightBackground: '#f2f2f2',
  white: '#ffffff',
  Zircon: '#f5f7fc',
  grayLightV3: '#ccc',
  blackRussian: '#181a1f',
  cod_Gray: '#1A1A1A',
  cod_Gray_v2: '#0F0F0F',
  Malibu: '#88A6FF',
  Silver: '#C4C4C4',
  Alto: '#DADADA',
  Link_Water: '#F4F6FC',
  Woodsmoke: '#181A1F',
} as const;

export const colors = {
  palette,

  transparent: 'rgba(0, 0, 0, 0)',

  text: palette.black,

  textDim: palette.secondary,

  background: palette.grayLightBackground,

  error: palette.error,

  primary: palette.primary,

  secondary: palette.secondary,

  disable: palette.Zircon,

  defaultBackGround: palette.white,

  transparent40: 'rgba(0, 0, 0, 0.4)',

  textV2: palette.blackRussian,
};

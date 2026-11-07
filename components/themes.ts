import { DarkTheme, DefaultTheme, useTheme as useThemeBase } from '@react-navigation/native';

export const BlueDefaultTheme = {
  ...DefaultTheme,
  closeImage: require('../img/close.png'),
  barStyle: 'dark-content',
  scanImage: require('../img/scan.png'),
  colors: {
    ...DefaultTheme.colors,
    borderWidth: 0.5,
    brandingColor: '#F4EEF8',
    customHeader: '#F4EEF8',
    foregroundColor: '#2D0B3A',
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
    buttonBackgroundColor: '#E8D5F0',
    buttonTextColor: '#68217A',
    secondButtonTextColor: '#50555C',
    buttonAlternativeTextColor: '#9B4F96',
    buttonDisabledBackgroundColor: '#EADFF2',
    buttonDisabledTextColor: '#9aa0aa',
    inputBorderColor: '#d2d2d2',
    inputBackgroundColor: '#EFE6F5',
    alternativeTextColor: '#9aa0aa',
    alternativeTextColor2: '#9B4F96',
    buttonBlueBackgroundColor: '#E8D5F0',
    buttonGrayBackgroundColor: '#EEEEEE',
    incomingBackgroundColor: '#d2f8d6',
    incomingForegroundColor: '#37c0a1',
    outgoingBackgroundColor: '#f8d2d2',
    outgoingForegroundColor: '#d0021b',
    successColor: '#37c0a1',
    failedColor: '#ff0000',
    placeholderTextColor: '#81868e',
    shadowColor: '#000000',
    inverseForegroundColor: '#ffffff',
    hdborderColor: '#68BBE1',
    hdbackgroundColor: '#ECF9FF',
    lnborderColor: '#FFB600',
    lnbackgroundColor: '#FFFAEF',
    background: '#F4EEF8',
    lightButton: '#EADFF2',
    ballReceive: '#d2f8d6',
    ballOutgoing: '#f8d2d2',
    lightBorder: '#E3D6EC',
    ballOutgoingExpired: '#EEF0F4',
    modal: '#FAF6FC',
    formBorder: '#d2d2d2',
    modalButton: '#E8D5F0',
    darkGray: '#9AA0AA',
    scanLabel: '#9AA0AA',
    feeText: '#81868e',
    feeLabel: '#d2f8d6',
    feeValue: '#37c0a1',
    feeActive: '#d2f8d6',
    labelText: '#81868e',
    cta2: '#68217A',
    outputValue: '#2D0B3A',
    elevated: '#FAF6FC',
    mainColor: '#E8D5F0',
    success: '#E8D5F0',
    successCheck: '#68217A',
    msSuccessBG: '#37c0a1',
    msSuccessCheck: '#ffffff',
    newBlue: '#007AFF',
    redBG: '#F8D2D2',
    redText: '#D0021B',
    changeBackground: '#FDF2DA',
    changeText: '#F38C47',
    receiveBackground: '#D1F9D6',
    receiveText: '#37C0A1',
    navigationBarColor: '#F4EEF8',
    androidRippleColor: '#CCCCCC',
  },
};

export type Theme = typeof BlueDefaultTheme;

export const BlueDarkTheme: Theme = {
  ...DarkTheme,
  closeImage: require('../img/close-white.png'),
  scanImage: require('../img/scan-white.png'),
  barStyle: 'light-content',
  colors: {
    ...BlueDefaultTheme.colors,
    ...DarkTheme.colors,
    customHeader: '#191919',
    brandingColor: '#191919',
    borderTopColor: '#9aa0aa',
    background: '#191919',
    foregroundColor: '#ffffff',
    buttonDisabledBackgroundColor: '#3A3A3C',
    buttonBackgroundColor: '#C9A7F5',
    buttonTextColor: '#191919',
    lightButton: 'rgba(255,255,255,.1)',
    buttonAlternativeTextColor: '#ffffff',
    alternativeTextColor: '#9aa0aa',
    alternativeTextColor2: '#C9A7F5',
    ballReceive: '#202020',
    ballOutgoing: '#202020',
    lightBorder: '#313030',
    ballOutgoingExpired: '#202020',
    modal: '#202020',
    formBorder: '#202020',
    inputBackgroundColor: '#262626',
    modalButton: '#000000',
    darkGray: '#3A3A3C',
    feeText: '#81868e',
    feeLabel: '#8EFFE5',
    feeValue: '#FF1493',
    feeActive: 'rgba(210,248,214,.2)',
    cta2: '#ffffff',
    outputValue: '#ffffff',
    elevated: '#191919',
    mainColor: '#FF6B6B',
    success: '#51CF66',
    successCheck: '#C9A7F5',
    buttonBlueBackgroundColor: '#202020',
    scanLabel: 'rgba(255,255,255,.2)',
    labelText: '#ffffff',
    msSuccessBG: '#FFD93D',
    msSuccessCheck: '#191919',
    newBlue: '#007AFF',
    redBG: '#5A4E4E',
    redText: '#FC6D6D',
    changeBackground: '#5A4E4E',
    changeText: '#F38C47',
    receiveBackground: 'rgba(210,248,214,.2)',
    receiveText: '#37C0A1',
    navigationBarColor: '#191919',
    androidRippleColor: '#444444',
  },
};

// Casting theme value to get autocompletion
export const useTheme = (): Theme => useThemeBase() as Theme;

export class BlueCurrentTheme {
  static colors: Theme['colors'];
  static closeImage: Theme['closeImage'];
  static scanImage: Theme['scanImage'];

  static updateColorScheme(): void {
    // App always uses the dark palette (#191919 background), regardless of system appearance.
    const isColorSchemeDark = true;
    BlueCurrentTheme.colors = isColorSchemeDark ? BlueDarkTheme.colors : BlueDefaultTheme.colors;
    BlueCurrentTheme.closeImage = isColorSchemeDark ? BlueDarkTheme.closeImage : BlueDefaultTheme.closeImage;
    BlueCurrentTheme.scanImage = isColorSchemeDark ? BlueDarkTheme.scanImage : BlueDefaultTheme.scanImage;
  }
}

BlueCurrentTheme.updateColorScheme();

import { css } from 'styled-components';
import {SourceSansProWoffLatinItalic} from'./fonts/source-sans-pro-v14-latin-italic.woff';
import {SourceSansProWoffLatinRegular} from'./fonts/source-sans-pro-v14-latin-regular.woff';
import {SourceSansProWoff200} from './fonts/source-sans-pro-v14-latin-200.woff';
import {SourceSansProWoff200Italic} from './fonts/source-sans-pro-v14-latin-200italic.woff';
import {SourceSansProWoff300} from './fonts/source-sans-pro-v14-latin-200.woff';
import {SourceSansProWoff300Italic} from './fonts/source-sans-pro-v14-latin-200italic.woff';
import {SourceSansProWoff600} from './fonts/source-sans-pro-v14-latin-200.woff';
import {SourceSansProWoff600Italic} from './fonts/source-sans-pro-v14-latin-200italic.woff';
import {SourceSansProWoff700} from './fonts/source-sans-pro-v14-latin-200.woff';
import {SourceSansProWoff700Italic} from './fonts/source-sans-pro-v14-latin-200italic.woff';
import {SourceSansProWoff900} from './fonts/source-sans-pro-v14-latin-200.woff';
import {SourceSansProWoff900Italic} from './fonts/source-sans-pro-v14-latin-200italic.woff';
import {SourceSansProWoff2LatinItalic} from'./fonts/source-sans-pro-v14-latin-italic.woff2';
import {SourceSansProWoff2LatinRegular} from'./fonts/source-sans-pro-v14-latin-regular.woff2';
import {SourceSansProWoff2200} from './fonts/source-sans-pro-v14-latin-200.woff2';
import {SourceSansProWoff2200Italic} from './fonts/source-sans-pro-v14-latin-200italic.woff2';
import {SourceSansProWoff2300} from './fonts/source-sans-pro-v14-latin-200.woff';
import {SourceSansProWoff2300Italic} from './fonts/source-sans-pro-v14-latin-200italic.woff2';
import {SourceSansProWoff2600} from './fonts/source-sans-pro-v14-latin-200.woff';
import {SourceSansProWoff2600Italic} from './fonts/source-sans-pro-v14-latin-200italic.woff2';
import {SourceSansProWoff2700} from './fonts/source-sans-pro-v14-latin-200.woff';
import {SourceSansProWoff2700Italic} from './fonts/source-sans-pro-v14-latin-200italic.woff2';
import {SourceSansProWoff2900} from './fonts/source-sans-pro-v14-latin-200.woff';
import {SourceSansProWoff2900Italic} from './fonts/source-sans-pro-v14-latin-200italic.woff2';
// Global style variables
export const background = {
  app: '#F6F9FC',
  appInverse: '#7A8997',
  positive: '#E1FFD4',
  negative: '#FEDED2',
  warning: '#FFF5CF',
};

// Cybercom Specific Colors
// Use these colors when you start to build our own component
export const colors = {
  primary: {
    CCPurple: "#713188",
    CCBlue:"#015599"
  },
  secondary: {
    CCDarkPurple:"#3f194d",
    CCLightPurple: "#eee6f1",
    CCDarkBlue:"#0a3355",
    CCLightBlue:"#e1ebf3"
  },
  neutral: {
    Gray1:"#333333",
    Gray2:"#4f4f4f",
    Gray3:"#828282",
    Gray4:"#bdbdbd",
    Gray5:"#e0e0e0",
    Gray6:"#f2f2f2",
    Gray7:"#f3f7f9",
    CCWhite:"#FFFFFF"
  },
  semantic: {
    CCRed: "#cc142f",
    CCRedLight: "#feebee"
  }

}

// These are colors which are used in example component,
// So, when you start creating component, use the colors above
// Will delete these colors in the future
export const color = {
  // Palette
  primary: '#FF4785', // coral
  secondary: '#1EA7FD', // ocean
  tertiary: '#DDDDDD',

  orange: '#FC521F',
  gold: '#FFAE00',
  green: '#66BF3C',
  seafoam: '#37D5D3',
  purple: '#6F2CAC',
  ultraviolet: '#2A0481',

  // Monochrome
  lightest: '#FFFFFF',
  lighter: '#F8F8F8',
  light: '#F3F3F3',
  mediumlight: '#EEEEEE',
  medium: '#DDDDDD',
  mediumdark: '#999999',
  dark: '#666666',
  darker: '#444444',
  darkest: '#333333',

  border: 'rgba(0,0,0,.1)',

  // Status
  positive: '#66BF3C',
  negative: '#FF4400',
  warning: '#E69D00',
};

export const spacing = {
  padding: {
    small: 10,
    medium: 20,
    large: 30,
  },
  borderRadius: {
    small: 5,
    default: 10,
  },
};

export const font = css`
/* source-sans-pro-200 - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 200;
  src: local(''),
       url(${SourceSansProWoff2200}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${SourceSansProWoff200}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* source-sans-pro-200italic - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: italic;
  font-weight: 200;
  src: local(''),
       url(${SourceSansProWoff2200Italic}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${SourceSansProWoff200Italic}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* source-sans-pro-300 - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 300;
  src: local(''),
       url(${SourceSansProWoff2300}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${SourceSansProWoff300})) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* source-sans-pro-regular - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url(${SourceSansProWoff2LatinRegular}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${SourceSansProWoffLatinRegular}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* source-sans-pro-300italic - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: italic;
  font-weight: 300;
  src: local(''),
       url(${SourceSansProWoff2300Italic}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${SourceSansProWoff300Italic}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* source-sans-pro-italic - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: italic;
  font-weight: 400;
  src: local(''),
       url(${SourceSansProWoff2LatinItalic}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${SourceSansProWoffLatinItalic}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* source-sans-pro-600 - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  src: local(''),
       url(${SourceSansProWoff2600}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${SourceSansProWoff600}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* source-sans-pro-600italic - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: italic;
  font-weight: 600;
  src: local(''),
       url(${SourceSansProWoff2600Italic}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${SourceSansProWoff600Italic}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* source-sans-pro-700 - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  src: local(''),
       url(${SourceSansProWoff2700}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${SourceSansProWoff700}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* source-sans-pro-700italic - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: italic;
  font-weight: 700;
  src: local(''),
       url(${SourceSansProWoff2700Italic}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${SourceSansProWoff700Italic}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* source-sans-pro-900 - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 900;
  src: local(''),
       url(${SourceSansProWoff2900}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${SourceSansProWoff900}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* source-sans-pro-900italic - latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: italic;
  font-weight: 900;
  src: local(''),
       url(${SourceSansProWoff2900Italic}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${SourceSansProWoff900Italic}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
`;

export const typography = {
  type: {
    primary: 'Source Sans Pro',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    regular: '400',
    semibold: '600',
    bold: '700',
    black: '900',
  },

  size: {
    s1: '12px',
    s2: '14px',
    s3: '16px',
    m1: '20px',
    m2: '24px',
    m3: '28px',
    l1: '36px',
    l2: '40px',
    l3: '48px',
    code: '90',
  },
};

export const breakpoint = 600;
export const pageMargin = '5.55555';

export const pageMargins = css`
  padding: 0 ${spacing.padding.medium}px;
  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 2}%;
  }
  @media (min-width: ${breakpoint * 3}px) {
    margin: 0 ${pageMargin * 3}%;
  }
  @media (min-width: ${breakpoint * 4}px) {
    margin: 0 ${pageMargin * 4}%;
  }
`;

const size= {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
}

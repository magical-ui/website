import {createGlobalStyle} from "styled-components";

export const GlobalStyling = createGlobalStyle`
  @font-face {
    font-family: 'Gilroy';
    src: url('font/Gilroy-Extrabold.eot');
    src: local('Gilroy Extrabold'), local('Gilroy-Extrabold'),
    url('font/Gilroy-Extrabold.eot?#iefix') format('embedded-opentype'),
    url('font/Gilroy-Extrabold.woff') format('woff'),
    url('font/Gilroy-Extrabold.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('font/Gilroy-UltraLightItalic.eot');
    src: local('Gilroy UltraLight Italic'), local('Gilroy-UltraLightItalic'),
    url('font/Gilroy-UltraLightItalic.eot?#iefix') format('embedded-opentype'),
    url('font/Gilroy-UltraLightItalic.woff') format('woff'),
    url('font/Gilroy-UltraLightItalic.ttf') format('truetype');
    font-weight: 200;
    font-style: italic;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('font/Gilroy-BoldItalic.eot');
    src: local('Gilroy Bold Italic'), local('Gilroy-BoldItalic'),
    url('font/Gilroy-BoldItalic.eot?#iefix') format('embedded-opentype'),
    url('font/Gilroy-BoldItalic.woff') format('woff'),
    url('font/Gilroy-BoldItalic.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('font/Gilroy-Semibold.eot');
    src: local('Gilroy Semibold'), local('Gilroy-Semibold'),
    url('font/Gilroy-Semibold.eot?#iefix') format('embedded-opentype'),
    url('font/Gilroy-Semibold.woff') format('woff'),
    url('font/Gilroy-Semibold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('font/Gilroy-BlackItalic.eot');
    src: local('Gilroy Black Italic'), local('Gilroy-BlackItalic'),
    url('font/Gilroy-BlackItalic.eot?#iefix') format('embedded-opentype'),
    url('font/Gilroy-BlackItalic.woff') format('woff'),
    url('font/Gilroy-BlackItalic.ttf') format('truetype');
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('font/Gilroy-ThinItalic.eot');
    src: local('Gilroy Thin Italic'), local('Gilroy-ThinItalic'),
    url('font/Gilroy-ThinItalic.eot?#iefix') format('embedded-opentype'),
    url('font/Gilroy-ThinItalic.woff') format('woff'),
    url('font/Gilroy-ThinItalic.ttf') format('truetype');
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('font/Gilroy-ExtraboldItalic.eot');
    src: local('Gilroy Extrabold Italic'), local('Gilroy-ExtraboldItalic'),
    url('font/Gilroy-ExtraboldItalic.eot?#iefix') format('embedded-opentype'),
    url('font/Gilroy-ExtraboldItalic.woff') format('woff'),
    url('font/Gilroy-ExtraboldItalic.ttf') format('truetype');
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('font/Gilroy-Black.eot');
    src: local('Gilroy Black'), local('Gilroy-Black'),
    url('font/Gilroy-Black.eot?#iefix') format('embedded-opentype'),
    url('font/Gilroy-Black.woff') format('woff'),
    url('font/Gilroy-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('font/Gilroy-HeavyItalic.eot');
    src: local('Gilroy Heavy Italic'), local('Gilroy-HeavyItalic'),
    url('font/Gilroy-HeavyItalic.eot?#iefix') format('embedded-opentype'),
    url('font/Gilroy-HeavyItalic.woff') format('woff'),
    url('font/Gilroy-HeavyItalic.ttf') format('truetype');
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('font/Gilroy-Regular.eot');
    src: local('Gilroy Regular'), local('Gilroy-Regular'),
    url('font/Gilroy-Regular.eot?#iefix') format('embedded-opentype'),
    url('font/Gilroy-Regular.woff') format('woff'),
    url('font/Gilroy-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('font/Gilroy-SemiboldItalic.eot');
    src: local('Gilroy Semibold Italic'), local('Gilroy-SemiboldItalic'),
    url('font/Gilroy-SemiboldItalic.eot?#iefix') format('embedded-opentype'),
    url('font/Gilroy-SemiboldItalic.woff') format('woff'),
    url('font/Gilroy-SemiboldItalic.ttf') format('truetype');
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('font/Gilroy-Medium.eot');
    src: local('Gilroy Medium'), local('Gilroy-Medium'),
    url('font/Gilroy-Medium.eot?#iefix') format('embedded-opentype'),
    url('font/Gilroy-Medium.woff') format('woff'),
    url('font/Gilroy-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('font/Gilroy-Bold.eot');
    src: local('Gilroy Bold'), local('Gilroy-Bold'),
    url('font/Gilroy-Bold.eot?#iefix') format('embedded-opentype'),
    url('font/Gilroy-Bold.woff') format('woff'),
    url('font/Gilroy-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('font/Gilroy-RegularItalic.eot');
    src: local('Gilroy Regular Italic'), local('Gilroy-RegularItalic'),
    url('font/Gilroy-RegularItalic.eot?#iefix') format('embedded-opentype'),
    url('font/Gilroy-RegularItalic.woff') format('woff'),
    url('font/Gilroy-RegularItalic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('font/Gilroy-Light.eot');
    src: local('Gilroy Light'), local('Gilroy-Light'),
    url('font/Gilroy-Light.eot?#iefix') format('embedded-opentype'),
    url('font/Gilroy-Light.woff') format('woff'),
    url('font/Gilroy-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('font/Gilroy-LightItalic.eot');
    src: local('Gilroy Light Italic'), local('Gilroy-LightItalic'),
    url('font/Gilroy-LightItalic.eot?#iefix') format('embedded-opentype'),
    url('font/Gilroy-LightItalic.woff') format('woff'),
    url('font/Gilroy-LightItalic.ttf') format('truetype');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('font/Gilroy-Heavy.eot');
    src: local('Gilroy Heavy'), local('Gilroy-Heavy'),
    url('font/Gilroy-Heavy.eot?#iefix') format('embedded-opentype'),
    url('font/Gilroy-Heavy.woff') format('woff'),
    url('font/Gilroy-Heavy.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('font/Gilroy-MediumItalic.eot');
    src: local('Gilroy Medium Italic'), local('Gilroy-MediumItalic'),
    url('font/Gilroy-MediumItalic.eot?#iefix') format('embedded-opentype'),
    url('font/Gilroy-MediumItalic.woff') format('woff'),
    url('font/Gilroy-MediumItalic.ttf') format('truetype');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('font/Gilroy-Thin.eot');
    src: local('Gilroy Thin'), local('Gilroy-Thin'),
    url('font/Gilroy-Thin.eot?#iefix') format('embedded-opentype'),
    url('font/Gilroy-Thin.woff') format('woff'),
    url('font/Gilroy-Thin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
  }
  
  *{
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-weight: 900;
  }
  body {
    background-color: #fff;
    user-select: none;
    line-height: 1;
    font-family: "Gilroy", sans-serif;
    color: #7b5367;
  }
  a {
    color: inherit;
    text-decoration: none;
    margin-bottom: 0;
  }
  li {
    list-style: none;
    margin-bottom: 0;
  }
  p {
    font-size: 1rem;
    margin-bottom: 0;
  }
  button{
    background-color: inherit;
    cursor: pointer;
  }

h1,h2,h3 {
  line-height: 2;
}

  @media (max-width : 600px){
  p {
    font-size: 0.8rem;
  }
  } 
`;

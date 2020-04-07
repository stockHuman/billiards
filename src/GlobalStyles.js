import styled, { createGlobalStyle } from 'styled-components';
import { Canvas as c } from 'react-three-fiber';

export default createGlobalStyle`
  body {
    margin: 0;
    background: black;
    font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif";
  }
`;

export const Canvas = styled(c)`
  position: absolute !important;
  top: 0;
  left: 0;
`;

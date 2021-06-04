import React from 'react';
import { Global, css } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        html,
        body,
        #root {
          height: 100%;
        }

        body {
          font-family: 'Ubuntu', sans-serif;
        }

        *,
        *:after,
        *:before {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }

        svg {
          width: 1.5rem;
          height: 1.5rem;
        }
      `}
    />
  );
};

export default GlobalStyles;

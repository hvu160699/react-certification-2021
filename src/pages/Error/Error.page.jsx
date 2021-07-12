import React from 'react';

import Styled from './Error.styled';
import Link from '../../components/Common/Link';

const ErrorPage = () => {
  return (
    <Styled.ErrorContainer>
      <h1>404</h1>
      <h3>
        Sorry, this page isn&apos;t available.
        <span>
          {' '}
          Return to the <Link to="/">Home</Link> page.
        </span>
      </h3>
    </Styled.ErrorContainer>
  );
};

export default ErrorPage;

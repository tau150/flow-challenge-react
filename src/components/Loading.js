import React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  background: #2ECCFA;
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  p{
    color: #fff;
    font-size: 2rem;
  }
`

const Loading = () => {

  return (
    <LoadingContainer>
      <p>Loading...</p>
    </LoadingContainer>
  )
}
export default Loading
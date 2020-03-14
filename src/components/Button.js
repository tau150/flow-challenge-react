import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 5px;
  background: ${({ disabled }) => (disabled ? '#777' : '#2ECCFA')};
  margin-top: 30px;
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
`

const Button = ({title, disabled, handleOnClick}) => {
  return <StyledButton disabled={disabled} type="button" onClick={handleOnClick} >{title}</StyledButton>
}

export default Button;
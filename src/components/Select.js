import styled from 'styled-components';

export default styled.select`
  width: 100%;
  border: 2px solid #FFF;
  border-radius: 4px;
  background: #FFF;
  box-shadow: 8px 4px 10px rgba(0, 0, 0, 0.84);
  height: 52px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;
  appearance: none;

  &:focus {
    border-color: ${ ( { theme } ) => theme.colors.primary.main };

  }

`;

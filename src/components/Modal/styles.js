import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const Container = styled.div`
  background: #FFF;
  border-radius: 4px;
  padding: 24px;
  max-width: 450px;
  width: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.84);

  h1 {
    font-size: 22px;

  }

  p {
    margin-top: 8px;

  }

`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background: transparent;
    border: none;
    margin-right: 8px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray[200]};

  }

`;

import styled from 'styled-components';

export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: .5;
`;

export const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  @media screen and (max-width: 700px){
    padding: 0 20px;
  }

`;

export const StyledModal = styled.div`
  z-index: 10060;
  position: fixed;
  top: 150px;
  left: 50%;
  margin-left: -350px;
  border-radius: 30px;
  min-width: 700px;
  min-height: 500px;
  @media screen and (max-width: 700px){
    min-width: 100%;
    margin: auto;
    left: 0;
    top: 90px;
  }
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledModalCloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
`;

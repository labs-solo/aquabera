import styled from 'styled-components';

export const StyledFormSection = styled.div`
  background-image: '..images/form background.png';
  padding: 0;
  border: none;
  margin: 0;

  .form{
  }
  form {
    width: 500px;
  }
  @media only screen and (max-width: 700px) {
    .form{
      width: 100%;
      border-radius: 0;
      padding: 40px 30px;
    }
    background-image: none;
    form {
      width: 100%;
    }
  }

  input[type="text"], input[type="email"], textarea {
    display: block;
    width: 100%;
    padding: 12px 15px;
    border-radius: 6px;
    margin: 16px auto 0px auto;
    font-size: 20px;
    font-weight: 300;

  }

  textarea {
    height: 180px;
    border-radius: 10px;
  }


  .primary-button{
    width: 100% !important;
    margin-top: 40px;
  }
  .disabled-button {
    background-color: #47516a;
    border-radius: 10px;
    margin-top: 40px;
    width: 100% !important;
    color: #787E91;
  }

  .field{
    position: relative;
  }
  .label{
    position: absolute;
    left: 15px;
    top: -8px;
    font-size: 14px; 
    line-height: 14px;  
    padding: 0 3px;
    border-radius: 3px; 
  }
  .label-hidden{
    display: none;
  }

`;

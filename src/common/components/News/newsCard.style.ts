import styled from 'styled-components';

export const StyledNewsCard = styled.section`
  width: 350px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #f1f1f1; 
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  font-family: Montserrat;
  background-color: #ffffff;
  color: #333333;

  @media only screen and (max-width: 1200px) {
    width: 46%;

  }

  @media only screen and (max-width: 760px) {
    width: 100%;

  }

  .news-date {
    font-size: 16px;
    letter-spacing: 0;
    line-height: 19px;
    text-align: ;
  }

}
`;

export const StyledNewsCardHeader = styled.section`
  height: 120px;
  width: 100%;
  display: flex;
  padding: 20px 0;
  justify-content: center;
  border-bottom: 1px solid #f1f1f1;

  img{
    height: 100%;
    max-height: 80px;
  }
}
`;

export const StyledNewsCardBody = styled.section`
  height: 221px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 25px 30px 25px;
  box-sizing: border-box;

}
`;

export const StyledNewsTitle = styled.section`
  height: 72px;
  width: 100%;
  display: flex;
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
}
`;

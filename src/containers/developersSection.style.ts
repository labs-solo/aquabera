import styled from 'styled-components';

export const StyledDevelopersSection = styled.section`
@media screen and (max-width: 700px) {
    .bug_bounty {
        flex-direction: column;
    }
}
.ichi-protocol {
    position: absolute;
    bottom: 40px; 
    left: 40px; 
    max-width: 400px;

    @media screen and (max-width: 700px) {
        position: relative;
        bottom: 0px;
        left: 0;
        margin-top: 20px;
        margin-bottom: 40px;
    }
}
.right_column {
    width: 49%;
    padding-left: 40px;
    
    @media screen and (max-width: 700px) {
        width: 100%;
        padding-left: 0;
    }
}
`;

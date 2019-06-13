import styled from 'styled-components';

const LogoStyle = styled.div`

    .logoNUNC{
        width:100%;
        margin-top: 3rem;
        margin-bottom:5rem;    
    }

    @media only screen and (min-width:769px) and (max-width:1024px){

        .logoNUNC{
            width: 70%;
        }
 
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){

        .logoNUNC{
            width: 60%;
        }

    }
    @media only screen and (min-width:1441px){
 
        .logoNUNC{
            width: 60%;
        }
    }
   
`;

export {LogoStyle};

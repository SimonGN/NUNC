import styled from 'styled-components';

const FuncionaStyle = styled.div`
margin-bottom:20%;
    .text{
        padding-bottom:10%;
    }
   
    @media only screen and (min-width:415px) and (max-width:768px){
        .text{
            padding-bottom:5%;
        }
        
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        .text{
            padding-bottom:5%;
        }
        
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        margin-bottom:10%;
        .text{
            padding-bottom:12%;
        }
       
    }
    @media only screen and (min-width:1441px){
        margin-bottom:10%;
        .text{
            padding-bottom:12%;
        }
   }
   


`;

export {FuncionaStyle};

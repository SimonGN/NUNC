import styled from 'styled-components';

const PorqueStyle = styled.div`
    background-color:#56cc7e;
    .porque{
        width:90vw;
        margin: 0 auto;
    }
    .title{
        padding-top: 3rem;
        margin-bottom:2rem;
    }
    .numbers{
        padding-bottom: 5rem;
    }
    @media only screen and (min-width:415px) and (max-width:768px){
        display:flex;
        flex-flow:column;
        justify-content:center;
        height:40vh;

        h2{
            text-align:center;
        }
         .number{
            padding-bottom: 0;
        }
   }
   @media only screen and (min-width:769px) and (max-width:1024px){
        display:flex;
        flex-flow:column;
        justify-content:center;
        height:40vh;
        

        h2{
            text-align:center;
        }
        .porque{

        }
        .number{
            padding-bottom: 0;
        }
   }
   @media only screen and (min-width:1025px) and (max-width:1440px){
        height:65vh;
        display:flex;
        align-items:center; 
        .porque{
            width:auto;
        }
        h1{
            text-align:center;
        }
   }  
   @media only screen and (min-width:1441px) {
        height:65vh;
        display:flex;
        align-items:center;
        .porque{
            width:auto;
        }
        h1{
            text-align:center;
        }
    }
`;

export {PorqueStyle};

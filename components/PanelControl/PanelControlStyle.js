import styled from 'styled-components';

const PanleControlStyle = styled.div`
    .panelcontrol{
        width:90%;
        margin:0 auto;
    }
    .ipadSpace{
        display: flex;
        justify-content: center;
    }
    .ipad{
        width: 100%;
        height: 100%;
        margin-top: 5rem;
        margin-bottom: 3rem;
    }
    .parraf{
        margin-bottom:1rem;
    }
    .text{
        margin-bottom:5rem;
    }
    @media only screen and (min-width:415px) and (max-width:768px){
        .ipad{
            width: 60%;
            height: 60%;
       }
   }
   @media only screen and (min-width:769px) and (max-width:1024px){
       .ipad{
            width: 60%;
            height: 60%;
       }
   }
   @media only screen and (min-width:1025px) and (max-width:1440px){
   }
   @media only screen and (min-width:1441px){
   }

`;

export {PanleControlStyle};

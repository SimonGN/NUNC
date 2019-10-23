import styled from 'styled-components';

const FuncionesStyle = styled.div`
    width:94%;
    margin: 0 auto;
    .global1{
        margin-top:20%;
        margin-bottom:25%;
    }
    .funciones1, .funciones2, .funciones3, .funciones4{
        margin: 0 auto;
        width:75%;
    }
    
    @media only screen and (min-width:415px) and (max-width:768px){
        
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        width:75%;
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        width:70%;
    }
    @media only screen and (min-width:1441px){
        width:70%; 
    }
`;

export {FuncionesStyle};

import styled from 'styled-components';


const Fonth1 = styled.h1`
    font-family: "KareliaWeb-Regular";
    color: ${props => (props.color === 'white' ? 'white' : 'black')};
    font-size:  24px;
    line-height: 27px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-align: ${props => (props.align === 'center' ? 'center' : 'left')};
    
    @media only screen and (min-width:769px) and (max-width:1024px){
        font-size:  24px;
        line-height: 27px;
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        font-size:  24px;
        line-height: 27px;
    }

`;

export default Fonth1;

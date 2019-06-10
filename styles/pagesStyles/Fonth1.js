import styled from 'styled-components';


const Fonth1 = styled.h1`
    font-family: "KareliaWeb";
    color: ${props => (props.color === 'white' ? 'white' : 'black')};
    font-size: 2rem;
    line-height: 2.2rem;
    
    letter-spacing: 0.07rem;
    text-align: ${props => (props.align === 'center' ? 'center' : 'left')};
    
    @media only screen and (min-width:769px) and (max-width:1024px){
        font-size: 3rem;
        line-height: 3.4rem;
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        font-size: 2.5rem;
        line-height: 3.1rem;
    }

`;

export default Fonth1;

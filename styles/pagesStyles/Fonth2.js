import styled from 'styled-components';


const Fonth2 = styled.h2`
    font-family: "KareliaWeb";
    color: ${props => (props.color === 'white' ? 'white' : 'black')};
    font-size: 1.9rem;
    line-height: 2.1rem;
    letter-spacing: 0.07rem;
    text-align: ${props => (props.align === 'center' ? 'center' : 'left')};

    @media only screen and (min-width:769px) and (max-width:1024px){
        font-size: 2.8rem;
        line-height: 3.2rem;
  
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        font-size: 3rem;
        line-height: 3.6rem;
    }

`;

export default Fonth2;

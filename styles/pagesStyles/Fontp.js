import styled from 'styled-components';


const FontP = styled.p`
    font-family: "Texgyreheroscn";
    color: ${props => (props.color === 'white' ? 'white' : 'black')};
    font-size: 1.5rem;
    line-height: 1.9rem;
    letter-spacing: 0.04rem;
    text-align: ${props => (props.align === 'center' ? 'center' : 'left')};
    @media only screen and (min-width:769px) and (max-width:1024px){
        font-size: 2.2rem;
        line-height: 2.4rem;
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        font-size: 1.7rem;
        line-height: 2.3rem;
    }
    @media only screen and (min-width:1441px){
        font-size: 1.7rem;
        line-height: 2.3rem;
    }


`;

export default FontP;

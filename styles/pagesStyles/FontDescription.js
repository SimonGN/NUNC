import styled from 'styled-components';


const FontDescription = styled.p`
    font-family: "Texgyreheroscn";
    font-size: ${props => props.copyright ? '9px' : '18px'};
    line-height:  ${props => props.copyright ? '12px' : '21px'};
    letter-spacing: 0.07rem;
    color: ${props => (props.color === 'white' ? 'white' : 'black')};

    text-align: ${props => (props.align === 'center' ? 'center' : 'left')};

    @media only screen and (min-width:769px) and (max-width:1024px){

  
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){

    }

`;

export default FontDescription;

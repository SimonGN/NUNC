import styled from 'styled-components';


const FontP = styled.p`
    font-family: "Texgyreheroscn";
    color: ${props => (props.color === 'white' ? 'white' : 'black')};
    font-size: 1.5rem;
    letter-spacing: 0.07rem;
    text-align: ${props => (props.align === 'center' ? 'center' : 'left')};


`;

export default FontP;

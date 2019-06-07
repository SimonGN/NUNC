import styled from 'styled-components';


const FontP2 = styled.p`
    font-family: "Texgyreheroscn";
    color: ${props => (props.color === 'white' ? 'white' : 'black')};
    font-size: 1rem;
    letter-spacing: 0.03rem;
    text-align: ${props => (props.align === 'center' ? 'center' : 'left')};


`;

export default FontP2;

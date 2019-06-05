import styled from 'styled-components';


const h2 = styled.h2`
    font-family: "Karelia";
    color: ${props => (props.color === 'white' ? 'white' : 'black')};
    font-size: 2rem;
    letter-spacing: 0.07rem;
    text-align: ${props => (props.align === 'center' ? 'center' : 'left')};


`;

export default h2;

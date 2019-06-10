import styled from 'styled-components';


const Fonth3 = styled.h3`
    font-family: "KareliaWeb";
    color: ${props => (props.color === 'white' ? 'white' : 'black')};
    font-size: 1.6rem;
    letter-spacing: 0.07rem;
    text-align: ${props => (props.align === 'center' ? 'center' : 'left')};


`;

export default Fonth3;

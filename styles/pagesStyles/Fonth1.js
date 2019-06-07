import styled from 'styled-components';


const Fonth1 = styled.h1`
    font-family: "KareliaWeb";
    color: ${props => (props.color === 'white' ? 'white' : 'black')};
    font-size: 2rem;
    letter-spacing: 0.07rem;
    text-align: ${props => (props.align === 'center' ? 'center' : 'left')};
`;

export default Fonth1;

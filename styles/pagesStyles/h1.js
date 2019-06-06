import styled from 'styled-components';


const PageTitle = styled.h1`
    font-family: "Karelia";
    color: ${props => (props.color === 'white' ? 'white' : 'black')};
    font-size: 2rem;
    letter-spacing: 0.07rem;
    text-align: ${props => (props.align === 'center' ? 'center' : 'left')};
`;

export default PageTitle;

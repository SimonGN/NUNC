import styled from 'styled-components';


const FontP = styled.p`
    font-family: "Texgyreheroscn";
    color: ${props => (props.color === 'white' ? 'white' : 'black')};
    font-size: 24px;
    line-height: 26px;
    letter-spacing: 0.04rem;
    text-align: ${props => (props.align === 'center' ? 'center' : 'left')};

`;

export default FontP;

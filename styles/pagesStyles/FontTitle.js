import styled from 'styled-components';


const FontTitle = styled.p`
    font-family: "KareliaWeb-Regular";
    text-transform: uppercase;
    color: ${props => (props.color === '#56CC7E' ? '#56CC7E' : 'black')};
    font-size: 24px;
    line-height: 1.9rem;
    letter-spacing: 0.04rem;
    text-align: ${props => (props.align === 'center' ? 'center' : 'left')};
    


`;

export default FontTitle;

import styled from 'styled-components';

const NumberStyle = styled.div`
    .number{
        display: flex;
        justify-content: center;
        align-items: center;
        border-width: 2px;
        border-style: solid;
        border-radius: 40px;
        width: 3rem;
        height: 3rem;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        border-color: white;
        margin-bottom:0.5rem;

        font-family: "KareliaWeb";
        color: white;
        letter-spacing: 0.07rem;
        text-align: ${props => (props.align === 'center' ? 'center' : 'left')};
    };
    .textNumber{
        margin-top: 2rem;
        margin-bottom: 2rem;
        width:80%;
    }


`;

export {NumberStyle};



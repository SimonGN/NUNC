import styled from 'styled-components';



const BotonStyle = styled.div`
    a{
        text-decoration:none;
        font-family: "Texgyreheroscn";
        font-size: 1.5rem;
        letter-spacing: 0.07rem;
        color: ${props => (props.color === '#56cc7e' ? '#56cc7e' : 'white')};
        padding-top:15px;
        padding-bottom:15px;
        padding-left:40px;
        padding-right:40px;
        background-color:#56cc7e;
        border-color: #56cc7e;
        border-width: 3px;
        border-style: solid;
        border-radius:8px;
        height: 60px;
        width: 200px;
    }

`;

export {BotonStyle};

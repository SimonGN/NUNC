import styled from 'styled-components';

import Fondo from "../../static/svg/Fondo.svg"

const IntroStyle = styled.div`
    background-image: url(${Fondo});
    background-color:red;
    .intro{
        width:90%;
        margin:0 auto;
    }
    .logoNUNC{
        width:100%;
        margin-top: 3rem;
        margin-bottom:5rem;
    }
    .stores{
        display:flex;
        justify-content: center;
        width:100%;
        margin-top: 4rem;
        margin-bottom: 5rem;
    }
    .appStore, .googleplay{
        width: 50%;
    }
    .appStore{
        margin-right:10px;
    }
    .iphone{
        display: flex;
        justify-content: center;
        
    }
    .movil{
        height: 500px;
        width: 250px;
        margin-bottom: 4rem;
    }
`;

export {IntroStyle};

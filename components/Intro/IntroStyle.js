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
        width: 80%;
        height: 80%;
        margin-bottom: 5rem;
    }
    @media only screen and (min-width:415px) and (max-width:768px){
        .movil{
            width: 50%;
            height: 50%;
            margin-bottom: 5rem;
        }
        .appStore, .googleplay{
            width: 28%;
            height: 0%;
        }
        .appStore{
            margin-right:50px;
        }
        
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        .movil{
            width: 50%;
            height: 50%;
        }
        .appStore, .googleplay{
            width: 28%;
            height: 0%;
        }
        .appStore{
            margin-right:40px;
        }
        
    }
    @media only screen and (min-width: 1025px) and (width:1440px){
        .intro{
            display: flex;
        }
        .home{
            width: 70%;
        }
        .logoNUNC{
            width:75%;
        }
        .text{
            width:88%;
        }
        .iphone{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .movil{
            width: 80%;
            height: 78%;
            margin-bottom: 0rem;
        }
        .stores{
            width:80%;
        }
    }
   
`;

export {IntroStyle};
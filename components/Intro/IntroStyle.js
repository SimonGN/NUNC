import styled from 'styled-components';

const IntroStyle = styled.div`
    background-image: url("../../static/img/Fondo.jpg");
    background-size:cover;

    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 1s;
    @keyframes fadeInOpacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    
    .intro{
        width:90vw;
        margin:0 auto;

    }
    .logoNUNC{
        width:100%;
        margin-top: 3rem;
        margin-bottom:5rem;
        mix-blend-mode: difference;
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
       .intro{
            display: flex;
            height:90vh;
        }
        .home{
            width: 70%;
        }
        .logoNUNC{
            width: 70%;
        }
        .movil{
            width: 80%;
            height: 80%;
            margin-bottom: 0;
        }
        .iphone{
            display:flex;
            justify-content:center;
            align-items: center;
        }
        .appStore, .googleplay{
            width: 28%;
            height: 0%;
        }
        .appStore{
            margin-right:40px;
        }
        
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        .intro{
            display: flex;
            height:90vh;
            width:70vw;
        }
        .home{
            width: 60%;
        }
        .logoNUNC{
            width: 60%;
        }
        .text{
            height: 30%;
            display: flex;
            align-items: center;
        }
        .movil{
            width: 80%;
            height: 80%;
            margin-bottom: 0;
            object-fit: contain;
            margin-left: 10%;
        }
        .iphone{
            display:flex;
            justify-content:center;
            align-items: center;
            width: 40%;
        }
        .appStore, .googleplay{
            width: 25%;
            height: 0%;
        }
        .appStore{
            margin-right:40px;
        }
    }
    @media only screen and (min-width:1441px){
        .intro{
            display: flex;
            height:90vh;
            width:70vw;
        }
        .home{
            width: 50%;
        }
        .text{
            height: 30%;
            display: flex;
            align-items: center;
        }
        .logoNUNC{
            width: 60%;
        }
        .movil{
            width: 80%;
            height: 80%;
            margin-bottom: 0;
            object-fit: contain;
            margin-left: 40%;
        }
        .iphone{
            display:flex;
            justify-content:center;
            align-items: center;
            width: 40%;
        }
        .appStore, .googleplay{
            width: 25%;
            height: 0%;
        }
        .appStore{
            margin-right:40px;
        }
    }
   
`;

export {IntroStyle};

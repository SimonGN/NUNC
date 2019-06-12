import styled from 'styled-components';



const InfoStyle = styled.div`
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
        width: 90%;
        margin: 0 auto;
    }
    .text{
        margin-top:5rem;
    }
    h2{
        margin-bottom: 2rem;
    }
    p{
        margin-bottom: 2rem;
    }
    .iphone{
        display: flex;
        justify-content: center;
        
    }
    .movil{
        width: 80%;
        height: 80%;
        margin-top: 5rem;
        margin-bottom: 5rem;
    }
    @media only screen and (min-width:415px) and (max-width:768px){
        .text{
            margin-top:8rem;
        }
        .movil{
            width: 50%;
            height: 50%;
            margin-top: 5rem;
            margin-bottom: 8rem;
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        .intro{
        width: 90%;
        margin: 0 auto;
        }
        .movil{
            width: 40%;
            height: 40%;
            margin-top: 5rem;
            margin-bottom: 5rem;
        }
        p{
            margin-bottom: 3rem;
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        .text{
            margin-top: 8rem;
        }
        .intro{
            width: 60%;
            margin: 0 auto;
        }
        .movil{
            width: 35%;
            height: 35%;
            margin-top: 6rem;
            margin-bottom: 8rem;
        }
    }
    @media only screen and (min-width:1441px){
        .text{
            margin-top: 13rem;
        }
        .intro{
            width: 60%;
            margin: 0 auto;
        }
        .movil{
            width: 35%;
            height: 35%;
            margin-top: 8rem;
            margin-bottom: 14rem;
        }
    }
`;

export {InfoStyle};

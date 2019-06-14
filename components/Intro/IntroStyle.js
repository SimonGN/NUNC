import styled from 'styled-components';

const IntroStyle = styled.div`
  /*background-image: url("../../static/svg/fondo.svg");
    background-size:cover;*/
  background: linear-gradient(105deg, #56cc7e, #a3c5f5, #56cc7e);
  background-size: 800% 800%;

  -webkit-animation: background-animation 36s ease infinite;
  -moz-animation: background-animation 36s ease infinite;
  -o-animation: background-animation 36s ease infinite;
  animation: background-animation 36s ease infinite;

  @-webkit-keyframes background-animation {
    0% {
      background-position: 0% 62%;
    }
    50% {
      background-position: 100% 39%;
    }
    100% {
      background-position: 0% 62%;
    }
  }
  @-moz-keyframes background-animation {
    0% {
      background-position: 0% 62%;
    }
    50% {
      background-position: 100% 39%;
    }
    100% {
      background-position: 0% 62%;
    }
  }
  @-o-keyframes background-animation {
    0% {
      background-position: 0% 62%;
    }
    50% {
      background-position: 20% 39%;
    }
    100% {
      background-position: 0% 62%;
    }
  }
  @keyframes background-animation {
    0% {
      background-position: 0% 62%;
    }
    50% {
      background-position: 49% 39%;
    }
    100% {
      background-position: 0% 62%;
    }
  }

  @-webkit-keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      fill-opacity:1;
    }
  }
  @-moz-keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      fill-opacity:1;
    }
  }
  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      fill-opacity:1;
    }
  }

  .intro {
    width: 90vw;
    margin: 0 auto;
    
    -webkit-animation: fadeInOpacity 2s ease-in;
    -moz-animation: fadeInOpacity 2s ease-in;
    -o-animation: fadeInOpacity 2s ease-in;
    animation: fadeInOpacity 2s ease-in;
  }
  .logoNUNC {
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 5rem;
    fill-opacity: 1;
  }

  .stores {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-top: 4rem;
    margin-bottom: 5rem;
  }
  .appStore,
  .googleplay {
    width: 50%;
  }
  .appStore {
    margin-right: 10px;
  }
  .iphone {
    display: flex;
    justify-content: center;
  }
  .movil {
    width: 80%;
    height: 80%;
    margin-bottom: 5rem;
  }
  @media only screen and (min-width: 415px) and (max-width: 768px) {
    .movil {
      width: 50%;
      height: 50%;
      margin-bottom: 5rem;
    }
    .appStore,
    .googleplay {
      width: 28%;
      height: 0%;
    }
    .appStore {
      margin-right: 50px;
    }

    .stores {
      justify-content: center;
    }
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    .intro {
      display: flex;
      height: 90vh;
    }
    .home {
      width: 70%;
    }
    .logoNUNC {
      width: 70%;
    }
    .movil {
      width: 80%;
      height: 80%;
      margin-bottom: 0;
    }
    .iphone {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .appStore,
    .googleplay {
      width: 28%;
      height: 0%;
    }
    .appStore {
      margin-right: 40px;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    .intro {
      display: flex;
      height: 90vh;
      width: 70vw;
    }
    .home {
      width: 60%;
    }
    .logoNUNC {
      width: 60%;
    }
    .text {
      height: 30%;
      display: flex;
      align-items: center;
    }
    .movil {
      width: 80%;
      height: 80%;
      margin-bottom: 0;
      object-fit: contain;
      margin-left: 10%;
    }
    .iphone {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40%;
    }
    .appStore,
    .googleplay {
      width: 25%;
      height: 0%;
    }
    .appStore {
      margin-right: 40px;
    }
  }
  @media only screen and (min-width: 1441px) {
    .intro {
      display: flex;
      height: 90vh;
      width: 70vw;
    }
    .home {
      width: 50%;
    }
    .text {
      height: 30%;
      display: flex;
      align-items: center;
    }
    .logoNUNC {
      width: 60%;
    }
    .movil {
      width: 80%;
      height: 80%;
      margin-bottom: 0;
      object-fit: contain;
      margin-left: 40%;
    }
    .iphone {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40%;
    }
    .appStore,
    .googleplay {
      width: 25%;
      height: 0%;
    }
    .appStore {
      margin-right: 40px;
    }
  }
`;

export { IntroStyle };

import styled from 'styled-components';

const IntroStyle = styled.div`
  background-color: black;
  .global{
    background-image: url("../static/img/homeNunc.gif");
    background-repeat: no-repeat;
    width:100%;
    background-position-x: 75%;
    background-position-y: 10%;
    background-size: cover;
  }
  .local{
    width:94%;
    margin: 0 auto;
    mix-blend-mode: difference;
  }
  .text{
    img{
      width: 50%;
      padding-top:70%;
      padding-bottom:15%;
    }
    .h1{
      margin-bottom:5%;
    }
    mix-blend-mode: difference;
    padding-bottom:20%;
  }

  @media only screen and (min-width: 415px) and (max-width: 768px) {
    .global{
      background-position-x: 70%;
    }
    .text{
      img{
        width: 30%;
        padding-top:50%;
        padding-bottom:10%;
      }
      div{
        width:65%;
      }
      padding-bottom:10%
    }
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    .global{
      background-position-x: 70%;
    }
    .local{
      width:75%;
    }
    .text{
      img{
        width: 25%;
        padding-top:30%;
        padding-bottom:10%;
      }
      div{
        width:55%;
      }
      padding-bottom:10%;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    .global{
      background-position-x: 70%;
      background-position-y: 100%;
    }
    .local{
      width:70%;
    }
    .text{
      img{
        width: 25%;
        padding-top:45%;
        padding-bottom:10%;
      }
      div{
        width:55%;
      }
      padding-bottom:10%;
    }
  }
  @media only screen and (min-width: 1441px) {
    .global{
      background-position-x: 75%;
      background-position-y: 50%;
    }
    .local{
      width:70%;
    }
    .text{
      img{
        width: 20%;
        padding-top:33%;
        padding-bottom:5%;
      }
      div{
        width:45%;
      }
      padding-bottom:10%;
    }
  }
`;

export { IntroStyle };

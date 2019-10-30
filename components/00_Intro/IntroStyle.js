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
  .logo{
    padding-top: 10%;
    padding-bottom: 90%;

  }
  .local{
    width:94%;
    margin: 0 auto;
    mix-blend-mode: difference;
  }
  .text{
    width:94%;
    margin:0 auto;
    .h1{
      margin-bottom:5%;
    }
    mix-blend-mode: difference;
    padding-bottom:10%;
  }
  .stores{
    display:flex;
    width:100%;
    padding-top:10%;
    img{
      width:70%;
    }
  }

  @media only screen and (min-width: 415px) and (max-width: 768px) {
    .global{
      background-position-x: 70%;
    }
    .text{
      
      div{
        width:65%;
      }
      padding-bottom:10%
    }
    .logo{
      width:60%;
      padding-top:5%;
      padding-bottom:30%;
    }
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    .global{
      background-position-x: 40%;
    }
    .text{
      width:80%;
      div{
        width:50%;
      }
      padding-bottom:5%
    }
    .logo{
      width:60%;
      padding-top:4%;
      padding-bottom:25%;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    .global{
      background-position-x: 40%;
      background-position-y: 50%;
    }
    .text{
      width:70%;
      div{
        width:50%;
      }
      padding-bottom:5%
    }
    .logo{
      width:60%;
      padding-top:4%;
      padding-bottom:30%;
    }
  }
  @media only screen and (min-width: 1441px) {
    .global{
      background-position-x: 40%;
      background-position-y: 50%;
    }
    .text{
      width:67%;
      div{
        width:50%;
      }
      padding-bottom:5%
    }
    .logo{
      width:60%;
      padding-top:4%;
      padding-bottom:25%;
    }
  }
`;

export { IntroStyle };

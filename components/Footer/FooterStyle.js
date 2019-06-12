import styled from 'styled-components';



const FooterStyle = styled.div`
    background-color: #56cc7e;
    padding-top: 3rem;
    padding-bottom: 5rem;
    .footer{
        width:90%;
        margin:0 auto;
    }
    .intro{
        display:flex;
    }
    .logo{
        margin-left:10px;
    }
    .store{
        margin-top:1rem;
        display:flex;
        justify-content:center;
    }
    .google{
        margin-right:10px;
    }
    .google, .apple{
        width:50%;
    }
    @media only screen and (min-width:415px) and (max-width:768px){
        .intro{
            align-items: flex-start;
            width:60%;
        }
        .footer{
            display:flex;
            justify-content:space-between;
            align-items:center;
        }
        .google, .apple{
            width:45%;
        }
        .store{
            display: flex;
            justify-content: space-between;
            margin-top:0;
            width:40%;
        }   


    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        .intro{
            align-items: center;
            width:60%;
        }
        .footer{
            display:flex;
            justify-content:space-between;
            align-items:center;
        }
        .google, .apple{
            width:45%;
        }
        .store{
            display: flex;
            justify-content: space-between;
            margin-top:0;
            width:30%;
        }   
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        .intro{
            align-items: center;
            width:60%;
        }
        .footer{
            display:flex;
            justify-content:space-between;
            align-items:center;
        }
        .google, .apple{
            width:45%;
        }
        .store{
            display: flex;
            justify-content: space-between;
            margin-top:0;
            width:20%;
        }   
    }
    @media only screen and (min-width:1441px){
        .intro{
            align-items: center;
            width:60%;
        }
        .footer{
            display:flex;
            justify-content:space-between;
            align-items:center;
        }
        .google, .apple{
            width:45%;
        }
        .store{
            display: flex;
            justify-content: space-between;
            margin-top:0;
            width:20%;
        }   
    }

`;

export {FooterStyle};

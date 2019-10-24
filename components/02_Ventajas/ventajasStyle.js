import styled from 'styled-components';

const VentajasStyle = styled.div`
    .text{
        margin-bottom: 8%;
    }
    .ipad{
        width:100%;
        margin:0 auto;
        overflow-x:hidden;
        img{
            object-fit: cover;
            width: 125%;
            max-height: 345px;
            margin-left: -3.5%;
        }
    }
    .info{
        width:94%;
        margin:0 auto;
        margin-bottom:20%;
        display: flex;
        flex-flow:column;
    }
    .info1,.info2,.info3,.info4{
        display:flex;
        margin-bottom:10%;
        img{
            margin-right: 5%;
        }
        p{
            margin-bottom:5%;
        }
    }
    

    @media only screen and (min-width:415px) and (max-width:768px){
        .text{
            margin-bottom: 6%;
        }
        .ipad{
            width:100%;
            margin:0 auto;
            overflow-x:hidden;
            img{
                object-fit: cover;
                width: 85%;
                max-height: 465px;
                margin-left: 103px;
            }
        }
        .info{
            width:94%;
            margin: 0 auto;
            flex-flow:wrap;
            justify-content: space-between;
            margin-bottom:12%;
            div {
                width: 50%;
                text-align: left;
            }
            p{
                width:140%; 
            }
        }


   }
   @media only screen and (min-width:769px) and (max-width:1024px){
        margin-bottom:12%;
        .text{
            margin-bottom: 8%;
        }
        .global{
            display:flex;
            align-items: center;
        }
        .ipad{
            width: 60%;
            img{
                width: 146%;
                max-height: 645px;
                margin-left: -42.5%;
                margin-top: 5%;

            }
        }
        .info{
            width:50%;
            margin-bottom: 0;
        }
        .info1,.info2,.info3,.info4{
            display:flex;
            margin-bottom:10%;
            flex-flow:row;

            img{
                margin-right: 5%;
            }
            p{
                width: 75%;
                margin-bottom:2%;
            }
        }
        .info4{
            margin-bottom:0;
        }
    }
   
   @media only screen and (min-width:1025px) and (max-width:1440px){
    margin-bottom:12%;
        .text{
            margin-bottom: 2%;
        }
        .global{
            display:flex;
            align-items: center;
        }
        .ipad{
            width: 60%;
            img{
                width: 146%;
                max-height: 800px;
                margin-left: -40%;
                margin-top: 10%;
            }
        }
        .info{
            width:50%;
            margin-bottom: 0;
        }
        .info1,.info2,.info3,.info4{
            display:flex;
            margin-bottom:10%;
            flex-flow:row;
            margin-left: -5%;
            img{
                margin-right: 5%;
            }
            p{
                width: 70%;
                margin-bottom:2%;
            }
        }
        .info4{
            margin-bottom:0;
        }
    }
   @media only screen and (min-width:1441px){ 
    margin-bottom:12%;
        .text{
            margin-bottom: 2%;
        }
        .global{
            display:flex;
            align-items: center;
        }
        .ipad{
            width: 60%;
            img{
                width: 146%;
                max-height: 830px;
                margin-left: -38%;
                margin-top: 10%;
            }
        }
        .info{
            width:50%;
            margin-bottom: 0;
        }
        .info1,.info2,.info3,.info4{
            display:flex;
            margin-bottom:10%;
            flex-flow:row;
            margin-left: -10%;
            img{
                margin-right: 5%;
            }
            p{
                width: 70%;
                margin-bottom:5%;
            }
        }
        .info4{
            margin-bottom:0;
        }
    }
`;

export {VentajasStyle};

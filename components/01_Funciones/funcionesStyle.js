import styled from 'styled-components';

const FuncionesStyle = styled.div`
    .global1, .global2{
        width:94%;
        margin: 0 auto;
    }
    .global1{
        margin-top:20%;
        margin-bottom:25%;
    }
    .text{
        margin-bottom:10%;
    }
    .ilustracion{
        display:flex;
        flex-flow:column;
        margin-bottom:20%;
    }
    .funciones1, .funciones2, .funciones3, .funciones4{
        margin: 0 auto;
        width:75%;
        display:flex;
        flex-flow:column;
        justify-content:center;
        margin-bottom:20%;
        img{
            margin-bottom:5%;
        }
        p{
            margin-bottom:5%;
        }
    }
    .funciones4{
        margin-bottom:0%;

    }
    
    @media only screen and (min-width:415px) and (max-width:768px){   
        .global1{
            width:75%;
            margin-top:15%;
            margin-bottom:18%;
        }
        .ilustracion{
            width:94%;
            margin: 0 auto;
            flex-flow:wrap;
            justify-content: space-between;
            margin-bottom:20%;
            div {
                width: 40%;
            
            }
        }
        .text{
            margin-bottom:8%;
        }
        .funciones1, .funciones2, .funciones3, .funciones4{
            width:30%;
        }
        .funciones3, .funciones4{
            margin-bottom:0%;
        }
        .funciones4{
            img{
                padding-bottom: 8%;
                padding-top: 8%;
            }
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        .global1{
            width:75%;
            margin-top:10%;
            margin-bottom:12%;
        }

        .ilustracion{
            width:94%;
            margin: 0 auto;
            flex-flow:wrap;
            justify-content: space-between;
            margin-bottom:12%;
            div {
                width: 35%;
                text-align: left;
            }
        }
        .text{
            margin-bottom:8%;
        }
        .funciones1, .funciones2, .funciones3, .funciones4{
            width:45%;
            margin-bottom:10%;
        }
        .funciones3, .funciones4{
            margin-bottom:0%;
        }
        .funciones4{
            img{
                padding-bottom: 7%;
                padding-top: 7%;
            }
        }
    }
    
    @media only screen and (min-width:1025px) and (max-width:1440px){
        .global1{
            width:50%;
            margin-top:10%;
            margin-bottom:12%;
        }
        .ilustracion{
            width:80%;
            margin: 0 auto;
            flex-flow:wrap;
            justify-content: space-between;
            margin-bottom:12%;
            div {
                width: 35%;
                text-align: left;
            }
        }
        .text{
            margin-bottom:5%;
        }
        .funciones1, .funciones2, .funciones3, .funciones4{
            width:45%;
            margin-bottom:10%;
            img{
                margin-bottom:2%;
            }
            p{
                margin-bottom:2%;
            }
        }
        .funciones3, .funciones4{
            margin-bottom:0%;
        }
        .funciones4{
            img{
                padding-bottom: 7%;
                padding-top: 7%;
            }
        }
    }
    @media only screen and (min-width:1441px){
        .global1{
            width:40%;
            margin-top:10%;
            margin-bottom:10%;
        }
        .ilustracion{
            width:80%;
            margin: 0 auto;
            flex-flow:wrap;
            justify-content: space-between;
            margin-bottom:10%;
            div {
                width: 35%;
                text-align: left;
                padding-left:6.5%;
                padding-right:6.5%;
            }
        }
        .text{
            margin-bottom:4%;
        }
        .funciones1, .funciones2, .funciones3, .funciones4{
            width:45%;
            margin-bottom:10%;
            img{
                margin-bottom:2%;
            }
            p{
                margin-bottom:2%;
            }
        }
        .funciones3, .funciones4{
            margin-bottom:0%;
        }
        .funciones4{
            img{
                padding-bottom: 7%;
                padding-top: 7%;
            }
        }
    }
`;

export {FuncionesStyle};

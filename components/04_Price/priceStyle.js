import styled from 'styled-components';

const PriceStyle = styled.div`
    background-color:#56CC7E;
    width:100%;
    .global{
        width:94%;
        margin: 0 auto;
        padding-top:20%;
        padding-bottom:5%;
    }

    .price{
        margin-top:10%;
        margin-bottom:20%;
        display:flex;
        flex-flow:wrap;
        justify-content: space-between;
        div{
            width:45%;
            margin-bottom: 10%;
            p{
                margin-top:5%;
                margin-bottom:5%;
            }
        }
    }
    .price1, .price3{
        border-right: 1px solid black;
    }
    .contact{
        margin-bottom: 20%;
        p{
            margin-bottom: 7%;
        }
    }
    .boton{
        text-decoration:none;
        font-family: "KareliaWeb-Regular";
        cursor:pointer;
        color: black;
        background-color:#FFFFFF;
        padding:15px 40px;
        border-color: black;
        border-width: 1px;
        border-style: solid;
        border-radius:1px;
        height: 60px;
        width: 200px;
    }
    .tailor, .stores{
        display:flex;
    }
    .tailor{
        margin-top:5%;
        img{
            width: 20%;
        }
        p{
            margin-right: 4%;
        }
    }
    .stores{
        justify-content: space-between;

        img{
            width:40%;
        }
    }

    @media only screen and (min-width:415px) and (max-width:768px){
        .global{
            padding-top:10%;
            padding-bottom: 2%;
        }
        .price1,.price2, .price3{
            border-right: 1px solid black;
        }
        .price1, .price4{
            margin-bottom:20%
        }
        .price{
            margin-top:10%;
            margin-bottom:12%;
            display:flex;
            flex-flow:wrap;
            justify-content: space-between;
            div{
                width:20%;
                margin-bottom: 0%;
                padding-right:3%;
                p{
                    margin-top:5%;
                    margin-bottom:5%;
                }
            }
        }
        .contact{
            display:flex;
            align-items:center;
            margin-bottom: 20%;
            p{
                margin-bottom: 0%;
                margin-right:2%;
            }
        }
        .footer{
            display:flex;
            align-items:center;
            justify-content: space-between;
        }
        .tailor{
            order:1;
            margin-top:0;
            img{
                width: 40%;
            }
            p{
                margin-right: 4%;
            }
        }
        .stores{
            order:2;
            justify-content: space-between;
            width:35%;
            img{
                width:45%;
            }
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        .global{
            width:80%;
            padding-top:10%;
            padding-bottom: 2%;
        }
        .price1,.price2, .price3{
            border-right: 1px solid black;
        }
        .price1, .price4{
            margin-bottom:20%
        }
        .price{
            margin-top:10%;
            margin-bottom:12%;
            display:flex;
            flex-flow:wrap;
            justify-content: space-between;
            div{
                width:20%;
                margin-bottom: 0%;
                padding-right:3%;
                p{
                    margin-top:5%;
                    margin-bottom:5%;
                }
            }
        }
        .contact{
            display:flex;
            align-items:center;
            margin-bottom: 20%;
            p{
                margin-bottom: 0%;
                margin-right:2%;
            }
        }
        .footer{
            display:flex;
            align-items:center;
            justify-content: space-between;
        }
        .tailor{
            order:1;
            margin-top:0;
            img{
                width: 40%;
            }
            p{
                margin-right: 4%;
            }
        }
        .stores{
            order:2;
            justify-content: space-between;
            width:30%;
            img{
                width:40%;
            }
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        .global{
            width:70%;
            padding-top:10%;
            padding-bottom: 2%;
        }
        .price1,.price2, .price3{
            border-right: 1px solid black;
        }
        .price1, .price4{
            margin-bottom:20%
        }
        .price{
            margin-top:8%;
            margin-bottom:12%;
            display:flex;
            flex-flow:wrap;
            justify-content: space-between;
            div{
                width:20%;
                margin-bottom: 0%;
                padding-right:3%;
                p{
                    margin-top:5%;
                    margin-bottom:5%;
                }
            }
        }
        .contact{
            display:flex;
            align-items:center;
            margin-bottom: 20%;
            p{
                margin-bottom: 0%;
                margin-right:2%;
            }
        }
        .footer{
            display:flex;
            align-items:center;
            justify-content: space-between;
        }
        .tailor{
            order:1;
            margin-top:0;
            img{
                width: 40%;
            }
            p{
                margin-right: 4%;
            }
        }
        .stores{
            order:2;
            justify-content: space-between;
            width:30%;
            img{
                width:40%;
            }
        }
    }
    @media only screen and (min-width:1441px) {
        .global{
            width:65%;
            padding-top:10%;
            padding-bottom: 2%;
        }
        .price1,.price2, .price3{
            border-right: 1px solid black;
        }
        .price1, .price4{
            margin-bottom:20%
        }
        .price{
            margin-top:8%;
            margin-bottom:12%;
            display:flex;
            flex-flow:wrap;
            justify-content: space-between;
            div{
                width:20%;
                margin-bottom: 0%;
                padding-right:3%;
                p{
                    margin-top:5%;
                    margin-bottom:5%;
                }
            }
        }
        .contact{
            display:flex;
            align-items:center;
            margin-bottom: 20%;
            p{
                margin-bottom: 0%;
                margin-right:2%;
            }
        }
        .footer{
            display:flex;
            align-items:center;
            justify-content: space-between;
        }
        .tailor{
            order:1;
            margin-top:0;
            img{
                width: 40%;
            }
            p{
                margin-right: 4%;
            }
        }
        .stores{
            order:2;
            justify-content: space-between;
            width:30%;
            img{
                width:40%;
            }
        }
    }


`;

export {PriceStyle};



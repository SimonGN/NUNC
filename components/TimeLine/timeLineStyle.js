import styled from 'styled-components';

const TimeLineSyle = styled.div`
    margin-bottom:30%;
    .box {
        width:90%;
        margin: 0 auto;
        display:flex;
        margin-bottom: 10%;
        vertical-align: baseline;
        justify-content: space-between;
        align-items: center;
    }
    .imgs1, .imgs2, .imgs3, .imgs4{
        width:22%;
        margin-right:5%;
    }

    .text1, .text2, .text3, .text4{
        width:80%;
        margin-bottom:5%;
        h3{
            margin-bottom:3%;
        }
    }
    .text1,.text3{
        order:2;
    }
    .imgs1, .imgs3{
        order:1;
    } 

    
    @media only screen and (min-width:415px) and (max-width:768px){
        width:90%;
        margin:0 auto;
        margin-bottom: 12%;
        .text1, .text2, .text3, .text4{
            width:40%;
        }
        .text1, .text3{
            order:3;
        }
        .text2, .text4{
            order:1;
        }

        .circle{
            order:2;
        }

        .imgs1, .imgs3{
            order:1;
            margin-right:13%;
        } 
        .imgs2, .imgs4{
            margin-left: 10%;
            order:3;
        }

        .box{
            width:84%;
            margin: 0 auto;
            margin-bottom:10%;
            position: relative;
            h3{
                width:100%;
            }
            p{
                width:100%;
            }
        }


    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        
    }
    @media only screen and (min-width:1441px){
    }
   


`;

const Line = styled.div`
    @media only screen and (min-width:415px) and (max-width:768px){
        display:block;
        position:absolute;
        left: 50%;
        height:150%;
        width:2px;
        color: black;
        border-right: 2px solid #A3C5F5;
      }
    @media only screen and (min-width:769px) and (max-width:1024px){
        display:block;
        position:absolute;
        left: 50%;
        height:150%;
        width:2px;
        color: black;
        border-right: 2px solid #A3C5F5;
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        
    }
    @media only screen and (min-width:1441px){
    }



`;

const Circle = styled.div`
    @media only screen and (min-width:415px) and (max-width:768px){
        display:block;
        width: 20px;
        height: 20px;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        background: white;
        border: 2px solid #A3C5F5;
    }

    @media only screen and (min-width:769px) and (max-width:1024px){
        display:block;
        width: 20px;
        height: 20px;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        background: white;
        border: 2px solid #A3C5F5;
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        width: 20px;
        height: 20px;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        background: white;
        border: 2px solid #A3C5F5;
    }
    @media only screen and (min-width:1441px){
        width: 20px;
        height: 20px;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        background: white;
        border: 2px solid #A3C5F5;
    }

`;



export { TimeLineSyle, Line, Circle };

import styled from 'styled-components';

const FuncionaStyle = styled.div`
margin-bottom:20%;
    .text{
        margin-bottom:10%;
    }
    .imgs{
        width:20%;
        margin-bottom:2%;
    }
   .vertical-timeline-element--work{
    box-shadow: none;
   }
   .vertical-timeline-element-content{
       padding: 0;
       box-shadow:0 0px 0;
       p{
        font-size: 18px;
        line-height: 21px;
        margin-top:0;
       }
   }
   
   .vertical-timeline-element-content-arrow{
     position: absolute; 
     top:0; 
     right: 0; 
     height: 0; 
     width: 0; 
     border: 0; 
     border-right:0;
   }
   .vertical-timeline-element-icon{
        background:white !important;
        color:#A3C5F5 !important;
        width:10px;
        height:10px;
        left: 11%;
        margin-top:8px;
        margin-left: -28px;
        box-shadow: 0 0 0 2px #A3C5F5;
    }
    .vertical-timeline::before{
        width: 2px;
        background: #A3C5F5;
        margin-left: -1px;
        border-bottom-style: dashed; 
        border-bottom-width: 4px;
        height: 95%;
    }
    .vertical-timeline-element-content {
        margin-left: 40px;
        width:88%;
    }
    @media only screen and (min-width:415px) and (max-width:768px){
        width:90%;
        margin:0 auto;
        margin-bottom:10%;

        .text{
        margin-bottom:5%;
        }
        
        .vertical-timeline-element-icon{
            left: 3%;
            margin-left: -6px;
        }
        .vertical-timeline-element-content{
            width: 100%;
            p{
                width:80%;
            }
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        width:80%;
        margin:0 auto;
        margin-bottom:10%;

        .text{
        margin-bottom:5%;
        }
        
        .vertical-timeline-element-icon{
            left: 3%;
            margin-left: -10px;
        }
        .vertical-timeline-element-content{
            width: 100%;
            p{
                width:80%;
            }
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        margin-bottom:10%;
        .text{
        margin-bottom:5%;
        }
        .imgs{
        width:30%;
        margin-bottom:2%;
    }
        
        .vertical-timeline-element-icon{
            left: 51%;
            margin-left: -16px;
        }
        .vertical-timeline-element-content{
            width: 45%;
            p{
                width:80%;
            }
        }
    }
    @media only screen and (min-width:1441px){
        margin-bottom:10%;
        .text{
        margin-bottom:5%;
        }
        .imgs{
        width:30%;
        margin-bottom:2%;
    }
        
        .vertical-timeline-element-icon{
            left: 51%;
            margin-left: -16px;
        }
        .vertical-timeline-element-content{
            width: 45%;
            p{
                width:80%;
            }
        }
   }
   


`;

export {FuncionaStyle};

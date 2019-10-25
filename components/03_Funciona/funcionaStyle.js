import styled from 'styled-components';

const FuncionaStyle = styled.div`
margin-bottom:20%;
    .text{
        margin-bottom:10%;
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

   }
   


`;

export {FuncionaStyle};

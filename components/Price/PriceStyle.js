import styled from 'styled-components';


const PriceStyle = styled.div`
    background-color: #a3c5f5;
    .price{
        width:90%;
        margin: 0 auto;
    }
    .title{
        padding-top: 3rem;
        margin-bottom: 2rem;
    }
    .contact{
        margin-top: 2rem;
        padding-bottom: 5rem;
    }
    .contacText{
        margin-bottom:2rem;
    }
    @media only screen and (min-width:415px) and (max-width:768px){
     .title{
        text-align: center;
     }   
     h2{
            text-align:center;
        }
    .contact{
        display:flex;
        text-align: center;
        align-items: center;
    }
   }
   @media only screen and (min-width:769px) and (max-width:1024px){
        .title{
            text-align: center;
        } 
        h2{
                text-align:center;
            } 
        .contact{
            display:flex;
            text-align: center;
            align-items: center;
        }
   }
   @media only screen and (min-width:1025px) and (max-width:1440px){
        .title{
            text-align: center;
        } 
        h1{
            text-align:center;
        } 
        .contact{
            display:flex;
            align-items:center;
            .contacText{
            margin-bottom:0 !important
        }
        }
   }
   @media only screen and (min-width:1441px){
        height:100vh;
        display:flex;
        align-items:center;
        
        .price{
            width:auto;
        }
        .title{
            text-align: center;
        } 
        h1{
            text-align:center;
            } 
        .contact{
            display:flex;
            align-items:center;
            .contacText{
            margin-bottom:0 !important
        }
        }
   }
`;

export {PriceStyle};

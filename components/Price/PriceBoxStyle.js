import styled from 'styled-components';


const PriceBoxStyle = styled.div`
    background-color: white;
    border-radius:8px;
    .priceBox{
        width: 90%;
        margin: 0 auto;
        padding-top: 3rem;
        padding-bottom: 5rem;
    }

    .number{
        display: flex;
        justify-content: center;
        align-items: center;
        border-width: 2px;
        border-style: solid;
        border-radius: 40px;
        width: 3rem;
        height: 3rem;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        border-color: #56cc7e;

        font-family: "KareliaWeb";
        color: #56cc7e;
        letter-spacing: 0.07rem;
    }
    .textNumber{
        margin-top: 2rem;
        margin-bottom: 2rem;
        width:90%;
    }

    .enlace{
        font-family: "KareliaWeb";
        font-size: 1.5rem;
        letter-spacing: 0.07rem;
        color: black;
    }
    @media only screen and (min-width:415px) and (max-width:768px){
        .priceBox{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-top: 0rem;
            margin-bottom: 0rem;
        }
        .textNumber{
            margin-top:0;
            width: 25%;
        }
        .priceBox{
            padding-bottom: 3rem;
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        .priceBox{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-top: 0rem;
            margin-bottom: 0rem;
        }
        .textNumber{
            margin-top:0;
            width: 19%;
        }
        .priceBox{
            padding-bottom: 3rem;
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        .priceBox{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-top: 0rem;
            margin-bottom: 0rem;
            width: 100vh;
            
            margin-left: 3rem;
            margin-right: 3rem;
        }
        .textNumber{
            margin-top:0;
            width: 11%;
        }
        .priceBox{
            padding-bottom: 3rem;
        }
      
    }
    @media only screen and (min-width:1441px){
        
        .priceBox{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-top: 0rem;
            margin-bottom: 0rem;
            width: 100vh;
            
            margin-left: 4rem;
            margin-right: 4rem;
        }       
        .textNumber{
            margin-top:0;
            width: 11%;
        }
        .priceBox{
            padding-bottom: 3rem;
        }

        
    }
`;

export {PriceBoxStyle};

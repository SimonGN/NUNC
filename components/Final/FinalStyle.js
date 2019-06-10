import styled from 'styled-components';

const FinalStyle = styled.div`
    .final{
        width:90%;
        margin:0 auto;
    }
    .text{
        margin-top: 3rem;
    }
    .parraf{
        margin-bottom:1rem;
    }
    .logo{
        margin-top:10rem;
        margin-bottom: 10rem;
        display: flex;
        justify-content: center;
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        height: 80vh;
        display: flex;
        justify-content:space-between;
        .final{
            display: flex;
        }
    }
    @media only screen and (min-width:1441px){
        height: 80vh;
        display: flex;
        justify-content:space-between;
        .final{
            display: flex;
            justify-content:space-between;

        }
        .text{
            margin-top:0;
            width:55%;
            display:flex;
            flex-flow:column;
            justify-content:center;
        }
        .logo{
            margin-top:0;
            margin-bottom: 0;
            display:flex;
            justify-content:center;
            width:45%;
            img{
                object-fit:contain;
                width:50%;
            }
        }
    }

`;

export {FinalStyle};

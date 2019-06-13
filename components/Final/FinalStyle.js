import styled from 'styled-components';

const FinalStyle = styled.div`
    .final{
        width:90vw;
        margin:0 auto;
    }
    .text{
        margin-top: 5rem;
    }
    .parraf{
        margin-bottom:1rem;
    }
    .logo{
        margin-top:8rem;
        margin-bottom: 8rem;
        display: flex;
        justify-content: center;
        img{
            width: 39vh;
            object-fit: contain;
        }
    }

    @media only screen and (min-width:1025px) and (max-width:1440px){
        height: 80vh;
        display: flex;
        justify-content:space-between;
        .final{
            width:60vw;
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
    @media only screen and (min-width:1441px){
        
        height: 80vh;
        display: flex;
        justify-content:space-between;
        .final{
            width:60vw;
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

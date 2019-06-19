import styled from 'styled-components';



const BotonLlamarStyle = styled.div`
    width:97vw;
    position: fixed;
    bottom:0;
    
    a{
    display: flex;
    justify-content: flex-end;
    }
    .llamarIcon{
        width: 25vw;
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        a{
            font-size: 2rem;
            cursor:pointer;
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        opacity: 1;
        animation-name: fadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: 6s;
        @keyframes fadeInOpacity {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }

        display:flex;
        justify-content:flex-end;
        margin-top: 1rem;
        padding-right: 2rem;
        
        height:60px;
        position: fixed;
        top:0;
        a{
            width:15vw;
            cursor:pointer;
            background: white;
            border-radius:8px;
        }

  
    }
    @media only screen and (min-width:1441px) {
        opacity: 1;
        animation-name: fadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: 6s;
        @keyframes fadeInOpacity {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }

        display:flex;
        justify-content:flex-end;
        margin-top: 1rem;
        padding-right: 2rem;
        
        height:60px;
        position: fixed;
        top:0;
        a{
            width:15vw;
            cursor:pointer;
            background: white;
            border-radius:8px;
        }
    };

`;

export {BotonLlamarStyle};

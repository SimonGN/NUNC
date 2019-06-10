import styled from 'styled-components';



const InfoStyle = styled.div`
    .intro{
        width: 90%;
        margin: 0 auto;
    }
    .text{
        margin-top:5rem;
    }
    h2{
        margin-bottom: 2rem;
    }
    p{
        margin-bottom: 2rem;
    }
    .iphone{
        display: flex;
        justify-content: center;
        
    }
    .movil{
        width: 80%;
        height: 80%;
        margin-top: 5rem;
        margin-bottom: 5rem;
    }
    @media only screen and (min-width:415px) and (max-width:768px){
        .movil{
        width: 50%;
        height: 50%;
        margin-top: 5rem;
        margin-bottom: 5rem;
    }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
                .movil{
        width: 50%;
        height: 50%;
        margin-top: 5rem;
        margin-bottom: 5rem;
    }
        p{
            margin-bottom: 3rem;
        }
    }
`;

export {InfoStyle};

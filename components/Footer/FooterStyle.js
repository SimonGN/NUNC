import styled from 'styled-components';



const FooterStyle = styled.div`
    background-color: #56cc7e;
    padding-top: 3rem;
    padding-bottom: 5rem;
    .footer{
        width:90%;
        margin:0 auto;
    }
    .intro{
        display:flex;
    }
    .logo{
        margin-left:10px;
    }
    .store{
        margin-top:1rem;
        display:flex;
        justify-content:center;
    }
    .google{
        margin-right:10px;
    }
    .google, .apple{
        width:50%;
    }

`;

export {FooterStyle};

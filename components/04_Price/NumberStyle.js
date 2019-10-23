import styled from 'styled-components';

const NumberStyle = styled.div`
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
        border-color: white;
        margin-bottom:0.5rem;

        font-family: "KareliaWeb-Regular";
        color: white;
        letter-spacing: 0.07rem;
        text-align: ${props => (props.align === 'center' ? 'center' : 'left')};
    };
    .textNumber{
        margin-top: 2rem;
        margin-bottom: 2rem;
        width:80%;
    }
    @media only screen and (min-width:415px) and (max-width:768px){
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .textNumber{
            width:20%;
            margin-top: 0rem;
            margin-bottom: 0rem;
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .textNumber{
            width:20%;
            margin-top: 0rem;
            margin-bottom: 0rem;
        }
    }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width:70vw;
        .textNumber{
            width:20%;
            margin-top: 0rem;
            margin-bottom: 0rem;
        }
    }
    @media only screen and (min-width:1441px) {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width:70vw;

        .textNumber{
            width:20%;
            margin-top: 0rem;
            margin-bottom: 0rem;
        }
    }


`;

export {NumberStyle};



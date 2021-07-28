import styled from "styled-components";

export const Container = styled.div`
    background: #222f3e;
`
export const ContentContainer = styled.main`
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 2rem;
    height: calc(100vh - 5rem);

    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        width: 50%;
        height: 50%;
    }   


`
export const Section = styled.section`
    max-width: 600px;

    > span {
        font-size: 1.5rem;
        font-weight: bold;
        color: #fff;
    }
    h1 {
        font-size: 4.5rem;
        line-height: 4.5rem;
        font-weight: 900;
        margin-top: 2.5rem;
        color: #fff;
        span {
            color: #61dafb;
        }
    }
    p {
        font-size: 1.5rem;
        line-height: 2.25rem;
        margin-top: 1.5rem;
        color: #fff;
        span{
            color:  #61dafb;
            font-weight: bold;
        }
    }

    button{
        margin-top: 2.5rem;
    }
     
`
export const SignUp = styled.a`
    width: 260px;
    height: 4rem;
    border: 0;
    border-radius: 2rem;
    background:#34485F;
    color: white;
    font-size: 1.25rem;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.8);
    }

`
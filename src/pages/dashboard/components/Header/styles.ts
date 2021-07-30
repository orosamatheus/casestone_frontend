import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 5rem;
    border-bottom: 1px solid #E0E0E0;
    
`

export const HeaderContent = styled.div`
    max-width: 1120px;
    height: 5rem;
    margin: 0 auto;
    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        margin-left: auto;
    }

`
export const HeaderLink = styled.a`
    height: 3rem;
    border-radius: 3rem;
    background:#34485F;
    border: 0;
    padding: 0 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #61dafb;
    font-weight: bold;
    transition: 0.3s all ease;
    :hover{
        filter: brightness(0.8);
    }

`
import styled from "styled-components"

export const Container = styled.div`
    background: #222f3e;
    height: 100vh;

    h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        color:  #61dafb;
        margin-top: 3rem;
        margin-bottom: 2rem;
    }
`

export const FormContainer = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
  
    


    label {
        font-size: 1.3rem;
        color: white;
        margin-bottom: 5px;
    }
    input {
        margin-bottom: 5px;
        width: 500px;
        height: 40px;
        border-radius: 5px;
        background: rgba(239, 239, 239, 0.3);
        outline: none;
        padding: 15px;
        font-size: 1.2rem;
        font-weight: bold;
    }

    button {
        width: 500px;
        height: 40px;
        outline: none;
        border: 1px solid #34485F;
        background: #34485F;
        border-radius: 15px;
        margin-top: 50px;
        cursor: pointer;
        transition: 0.3s all ease;
        font-size: 1rem;
        color: white;

        :hover {
            filter: brightness(0.5);
        }
    }
   

`
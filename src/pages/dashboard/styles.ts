import styled from "styled-components"

export const Container = styled.div`
    background: #222f3e;
    height:150vh;
`
export const ContentContainer = styled.div`

`
export const SearchBarContainer = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;

    input{
        width: 50%;
        height: 3rem;
        outline: none;
        border: 1px solid #E0E0E0;
        background: rgba(239, 239, 239, 0.8);
        border-radius: 5px;
        padding: 15px;
        font-size: 16px;
        font-weight: bold;

        ::placeholder {
            text-align: center;
            color: #222f3e;         
        }
    }

    select{
        height: 3rem;
        margin-left: 3px;
        font-family: 'Roboto';
        outline: none;
        font-weight: 500;
        background: rgba(239, 239, 239, 0.8);
        border-radius: 5px;
        font-size: 16px;
        font-weight: bold;
    }

    button{
        height: 3rem;
        width: 10rem;
        margin-left: 3rem;
        border-radius: 15px;
        outline: none;
        border: none;
        background: #34485F;
        color: #61dafb;
        cursor: pointer;
        font-weight: bold;
        transition: 0.3s all ease;
        :hover{
            filter: brightness(0.8);
        }
    }

`
export const SearchFavorites = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 6rem;

    h1{
        position: relative;
        right: 35%;
        font-size: 3rem;
        font-weight: bold;
        color: #61dafb;
    }

`
export const Body = styled.ul`
    display: flex;
    max-width: 100vw;
    align-items: center;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;

    li{
        width: 200px;
        margin-top: 15px;
        
        img{
            cursor: pointer;
        }
        
        h1{
            font-size: 12px;
            color: white;
            font-family: 'Roboto';
            font-weight: 500;
        }

    }
`
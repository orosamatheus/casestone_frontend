import styled from "styled-components";


export const Container = styled.div`
    background: #222f3e;
    height: 100vh;

`

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Roboto';
    color: white;
    display: flex;
    align-items: center;
    margin: 1.5rem 0 0 1rem;


`

export const FavoritesContainer = styled.ul`

    display: flex;
    padding: 2rem;
    flex-wrap: wrap;
  

    li {
        width: 150px;
        align-items: center;
        padding: 1rem;
        

        h3 {
            font-size: 12px;
            word-break: break-word;
        }

    }

`


import styled from "styled-components"


export const ContentContainer = styled.div`
background: #222f3e;
height: 100vh;
`


export const DetailContainer = styled.ul`

div{
    &.detailContainer{
        display: flex;
        padding: 4rem;
    }
    &.textContainer{


        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0 3rem 3rem 3rem;

        
        h1{
            color: white;
            font-family:'Roboto';
            font-style: normal;
            font-weight: 600;
            font-size: 2rem;
            line-height: 42px;
            letter-spacing: 0.125em;
        }
        p{
            font-family:'Roboto';
            font-style: normal;
            font-weight: 500;
            color: white;
            font-size: 1rem;
            letter-spacing: 0.125em;
        }

        button{
           cursor: pointer;
            width: 10rem;
            height: 2rem;
            outline: none;
            border: none;
            border-radius: 15px;
            color: white;
            background: #CE1212;
            transition: 0.3s all ease;
        :hover{
            filter: brightness(0.8);
        }
        }
    }


}
`


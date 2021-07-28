import styled from 'styled-components'

import spidermanIco from '../../assets/spiderman.png'

interface IProps {
    active?: boolean;
}

export const AppContainer = styled.div`
    display: flex;
`
export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10rem;

    transition: 1s ease-in-out;

    h2{
        font-size: 1.5rem;
        color: black;
        font-weight: 900;
        margin-bottom: 2rem;
    }

    form{
        display: flex;
        flex-direction: column;
    }
    label{
        font-size: 1rem;
        font-weight: bold;
        color: #212121;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
    input{
        height: 2.2rem;
        border: 1px solid #E0E0E0;
        background: rgba(239, 239, 239, 0.3);
        outline: none;
        border-radius: 5px;
        padding: 15px;
        font-size: 1rem;
        font-weight: 500;
    }

    button{
            width: 400px;
            height: 3rem;
            border-radius: 5px;
            outline: none;
            border: none;
            font-size: 1rem;
            font-weight: bold;
            display: flex;
            align-items: center;
            transition: 0.3s all ease;
            cursor: pointer;
            &.submitBtn{
                justify-content: center;
                background: #34485F;
                margin-top: 2rem;
                color: white;
            }
            :hover{
                filter: brightness(0.7);
            }
    }

    &.SignIn{
        button{
            &.signInGg{
                background: #ffffff;
                box-shadow: 0px 2px 6px rgba(0,0,0,0.1);
                color: black;
                img{
                    margin-left: 0.5rem;
                    margin-right: 6rem;
                }
            }

        }
        h4{
            margin-top: 5px;
            text-align: center;
            color: #E0E0E0;
            font-size: 1rem;
            font-weight: 400;
        }
    }
`
export const ColorContainer = styled.div`
    width: 30rem;
    background: #222f3e;
    height: 100vh;
    display: flex;
    align-items: center;

    background-image:url(${spidermanIco});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;


`
export const ButtonsContainer = styled.div`
    display: flex; 
    width: 10rem;
    flex-direction: column;
    justify-content: center;
`
export const Button = styled.button<IProps>`
    height: 8rem;
    background: none;
    border-left: ${props => props.active ? '4px solid #222f3e': '4px solid #D8D8D8'} ;
    outline: none;
    border-top: none;
    border-bottom: none;
    border-right: none;
    font-size: 1.2rem;
    color: ${props => props.active ? '#222f3e': '#D8D8D8'};
    font-weight: bold;
    
    
    a{
        color: ${props => props.active ? '#037AC0': '#D8D8D8'};
        cursor: pointer;
    }
    :first-child{
        margin-bottom: 0.5em;
    }

`



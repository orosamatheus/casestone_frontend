import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../../Context/auth';
import { useHistory } from 'react-router-dom'
import api from "../../../services/api"


import {AppContainer,
    ContentContainer, 
    ColorContainer,
    ButtonsContainer,
    Button
} from '../styles'

function Cadastro(){

    const {activeButton, handleClick, register, handleSubmit} = useContext(Context);

    const history = useHistory()

    async function onSubmit(data: {name: string, email: string, password: string}, event: Event): Promise<void> {
        try{
            await api.post("users/signup", data)
            alert("Sua conta foi criada com sucesso!")
            setTimeout(() => {
                history.push('/login')
            }, 4000)

           
        } catch(error) {
            if(error.response) {
                alert(error.response.data.message)
                return error.response.data
            }
        }
        
    }

    return(
        <AppContainer>
            <ButtonsContainer>
                <Button
                onClick = {() => handleClick("SignIn")}  
                active = {activeButton === "SignIn"}>
                <Link to='/login'>Sign in </Link>
                </Button>
                <Button
                onClick = {() => handleClick("SignUp")}  
                active = {activeButton === "SignUp"}>
                    Sign up 
                </Button>
            </ButtonsContainer>
            <ColorContainer/>
            <ContentContainer className= "SignUp">
                <h2>Sign up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor= "name">Name</label>
                    <input id= "name" type='text' {...register("name")}/> 
                    <label htmlFor= "email">E-mail</label>
                    <input id= "email" type='email'{...register("email")}/>
                    <label htmlFor= "password">Password</label>
                    <input id ="password"type ='password'  autoComplete="off" {...register("password")}/>
                    <button className ="submitBtn" type="submit">Sign up</button>
                </form>
            </ContentContainer>
        </AppContainer>
    )
}
export default Cadastro
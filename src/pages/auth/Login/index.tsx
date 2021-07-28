import { useContext } from "react";
import { Link } from 'react-router-dom';
import { Context } from '../../../Context/auth';
import api from "../../../services/api";

import {
    AppContainer,
    ContentContainer,
    ColorContainer,
    ButtonsContainer,
    Button
} from '../styles'


function Login() {

    const { activeButton, handleClick, register, handleSubmit, handleLogin } = useContext(Context);
    

    async function onSubmit(data: {email: string, password: string}): Promise<void> {
        try{
            const response = await api.post("/users/signin", data)
            const user = {
                name: response.data.user.name,
                email: response.data.user.email,
                token: response.data.token
            }
            handleLogin(user)
        } catch(error){
            if(error.response){
                alert(error.message)
            }
        }
    }

    return (
        <AppContainer>
            <ButtonsContainer>
                <Button
                    onClick={() => handleClick("SignIn")}
                    active={activeButton === "SignIn"}>
                    Sign in
                </Button>

                <Button
                    onClick={() => handleClick("SignUp")}
                    active={activeButton === "SignUp"}>
                    <Link to='/cadastro'>Sign up </Link>
                </Button>
            </ButtonsContainer>
            <ColorContainer />
            <ContentContainer className="SignIn">
                <h2>Sign in</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email">E-mail</label>
                    <input id="email" {...register("email")} />
                    <label htmlFor="password">Password</label>
                    <input id="password"type='password' autoComplete="off" {...register("password") } />
                    <button className='submitBtn' type="submit">Sign In</button>
                </form>
            </ContentContainer>
        </AppContainer>
    )
}

export default Login
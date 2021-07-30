import {  useContext } from "react";
import { Context } from "../../Context/auth";


import { Container, FormContainer } from "./styles";
import { HeaderContainer, HeaderContent, HeaderLink } from "../dashboard/components/Header/styles";
import api from "../../services/api";


export default function Profile() {
    const { user, register, handleSubmit, handleLogin } = useContext(Context)

    async function onSubmit(data: { name?: string, email: string, password: string, passwordConfirm: string }): Promise<void> {

        const token  = localStorage.getItem('token')

        try {
           await api.put("/users/update", data, { headers : {
                Authorization: `Bearer ${token}`
            }})

            alert("Atualizado com sucesso!")

            const newUser = {
                name: data.name || user.name,
                email: data.email || user.email,
                token: user.token
            }
            handleLogin(newUser)

        } catch(error) {
            if (error.response) {
                alert("Erro ao atualizar!")
            }
        }
    }

    return (
        <Container>
            <HeaderContainer>
                <HeaderContent>
                    <HeaderLink> This is your area, {user.name}</HeaderLink>
                    <HeaderLink href="/dashboard">Voltar</HeaderLink>
                </HeaderContent>
            </HeaderContainer>
            <h1>Change your user informations</h1>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" {...register("name")} />
                <label htmlFor="email">E-mail</label>
                <input id="email" {...register("email")} />
                <label htmlFor="password">Password</label>
                <input id="password" type='password' autoComplete="off" {...register("password")} />
                <label htmlFor="passwordConf">Password Confirmation</label>
                <input id="passwordConf" type='password' autoComplete="off" {...register("passwordConfirm")} />
                <button className='submitBtn' type="submit">Update!</button>
            </FormContainer>


        </Container>
    )
}
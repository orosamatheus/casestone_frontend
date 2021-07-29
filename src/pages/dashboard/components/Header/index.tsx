import { useContext } from "react"
import { Context } from "../../../../Context/auth"

import { HeaderContainer, HeaderContent, SignOut } from './styles'


export default function Header() {

    const { handleLogout, user } = useContext(Context);


    return (
        <HeaderContainer>
            <HeaderContent>
                <SignOut href='/profile'>Welcome, {user.name}</SignOut>
                <SignOut href='/favorites'>Favorites</SignOut>
                <SignOut onClick={() => handleLogout()} href='/home'>Sign out</SignOut>

            </HeaderContent>
        </HeaderContainer>
    )
}
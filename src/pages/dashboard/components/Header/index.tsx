import { useContext } from "react"
import { Context } from "../../../../Context/auth"

import { HeaderContainer, HeaderContent, HeaderLink } from './styles'


export default function Header() {

    const { handleLogout, user } = useContext(Context);


    return (
        <HeaderContainer>
            <HeaderContent>
                <HeaderLink href='/profile'>Welcome, {user.name}</HeaderLink>
                <HeaderLink href='/favorites'>Favorites</HeaderLink>
                <HeaderLink onClick={() => handleLogout()} href='/home'>Sign out</HeaderLink>

            </HeaderContent>
        </HeaderContainer>
    )
}
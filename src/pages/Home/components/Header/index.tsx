
import { HeaderContainer, HeaderContent, SignIn } from './styles'


export default function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <nav>
                    <a href='/'>Home</a>
                </nav>
                <SignIn href='/login'>Sign In</SignIn>
                
            </HeaderContent>
        </HeaderContainer>
    )
}
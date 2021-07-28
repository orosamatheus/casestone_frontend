
import Header from './components/Header'
import { Container, ContentContainer, Section, SignUp } from './styles'
import homeAvatar from '../../assets/homeAvatar.png'
import { useContext } from "react";
import { Context } from '../../Context/auth';

export default function Home() {

    const { handleClick } = useContext(Context);
    return (
        <Container>
            <Header />
            <ContentContainer>
                <Section>
                    <span>Welcome,</span>
                    <h1>Find your <span>favorites</span><br />comics and characters.</h1>
                    <p>
                        Get access to the plataform <br />
                        <span>here</span>
                    </p>
                    <SignUp onClick = {() => handleClick("SignUp")} href='/cadastro'>Sign Up Here</SignUp>

                </Section>

                <img src={homeAvatar} alt="MarvelIco" />
            </ContentContainer>
        </Container>
    )
}
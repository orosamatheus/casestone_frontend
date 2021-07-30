import { useEffect, useState, useContext } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import { Context } from "../../Context/auth";

import { Context as DashboardContext } from "../../Context/dashboard"

import { HeaderContainer, HeaderContent, HeaderLink } from "../dashboard/components/Header/styles";

import { Container, Title, FavoritesContainer } from "./styles"

export default function Favorites() {
    const { handleLogout, user } = useContext(Context);
    const { setOption } = useContext(DashboardContext);
    const [favoritesComics, setFavoritesComics] = useState([]);
    const [favoritesCharacters, setFavoritesCharacters] = useState([]);


    useEffect(() => {

        async function getFavoritesComics() {

            const token = localStorage.getItem('token')

            const response = await api.get("/comics", { headers: { Authorization: `Bearer ${token}` } })
            setFavoritesComics(response.data)

        }
        getFavoritesComics()

        async function getFavoritesCharacters() {
            const token = localStorage.getItem('token')

            const response = await api.get("/characters", { headers: { Authorization: `Bearer ${token}` } })
            setFavoritesCharacters(response.data)

        }
        getFavoritesCharacters()

    }, [])

    return (
        <Container>
            <HeaderContainer>
                <HeaderContent>
                    <HeaderLink href="/profile"> Here is your favorites, {user.name}</HeaderLink>
                    <HeaderLink href="/dashboard">Voltar</HeaderLink>
                    <HeaderLink onClick={() => handleLogout()} href='/home'> Sign out</HeaderLink>
                </HeaderContent>
            </HeaderContainer>
            <Title>Favorite Comics</Title>
            <FavoritesContainer>
                {favoritesComics.map((favoriteComic: any) => (
                    <li key = {favoriteComic.comic.id}>
                        <Link onClick = {() => setOption("comics")}to ={`dashboard/details/${favoriteComic.comic.id}`}>
                            <img src={`${favoriteComic.comic.thumbnail.path}/portrait_medium.jpg`} alt='ico' />
                        </Link>
                        <div>
                            <h3>{favoriteComic.comic.title}</h3>
                            <p>{favoriteComic.comic.description}</p>
                        </div>
                    </li>
                ))}
            </FavoritesContainer>
            <Title>Favorites Characters</Title>
            <FavoritesContainer>
                {favoritesCharacters.map((favoriteCharacter: any) => (
                    <li key= {favoriteCharacter.character.id}>
                        <Link onClick={() => setOption("characters")} to={`dashboard/details/${favoriteCharacter.character.id}`}>
                            <img src={`${favoriteCharacter.character.thumbnail.path}/portrait_medium.jpg`} alt='ico' />
                        </Link>
                        <h3>{favoriteCharacter.character.name}</h3>
                        
                    </li>
                ))}
            </FavoritesContainer>
        </Container>
    )
}
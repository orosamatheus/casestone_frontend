import { useEffect, useState, useContext } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import { Context } from "../.../../../Context/auth";

import { HeaderContainer, HeaderContent, SignOut } from "../dashboard/components/Header/styles";

import { Container, Title, FavoritesContainer } from "./styles"

export default function Favorites() {
    const { handleLogout, user } = useContext(Context);
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
                    <SignOut href="/profile"> Here is your favorites, {user.name}</SignOut>
                    <SignOut href="/dashboard">Voltar</SignOut>
                    <SignOut onClick={() => handleLogout()} href='/home'> Sign out</SignOut>
                </HeaderContent>
            </HeaderContainer>
            <Title>Favorite Comics</Title>
            <FavoritesContainer>
                {favoritesComics.map((favoriteComic: any) => (
                    <li>
                        <Link to ={`dashboard/details/${favoriteComic.comic.id}`}>
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
                {favoritesCharacters.map((favoritesCharacter: any) => (
                    <li>
                        <Link to={`dashboard/details/${favoritesCharacter.character.id}`}>
                            <img src={`${favoritesCharacter.character.thumbnail.path}/portrait_medium.jpg`} alt='ico' />
                        </Link>
                        <div>
                            <h3>{favoritesCharacter.character.name}</h3>
                            <p>{favoritesCharacter.character.description}</p>
                        </div>
                    </li>
                ))}
            </FavoritesContainer>
        </Container>
    )
}
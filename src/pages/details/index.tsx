import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { Context as DashboardContext } from "../../Context/dashboard"
import api from "../../services/api";

import { ContentContainer, DetailContainer } from "./styles"

import Header from "../dashboard/components/Header"

interface ParamsProps {
    id: string;
}

export default function Details() {

    const {
        option,
        handleFavoriteCharacter,
        handleFavoriteComic,
        handleUnfavoriteCharacter,
        handleUnfavoriteComic }
        = useContext(DashboardContext)

    let { id }: ParamsProps = useParams();
    const [results, setResults] = useState([]);

    useEffect(() => {

        async function getResults() {
            const response = await api.get(`/marvel/${option}Id/${id}`)
            setResults(response.data)
        }
        getResults()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentContainer>
            <Header />
            {results === undefined ? <div></div> :
                <DetailContainer>
                    {results.map((result: any) => (
                        <li key={result.id}>
                            <div className="detailContainer">
                                <div className="imgContainer">
                                    <img src={`${result.thumbnail.path}/portrait_incredible.jpg`} alt='ico' />
                                </div>
                                <div className="textContainer">
                                    <h1 className='nome'>Nome do {option === "characters" ? "personagem" : "quadrinho"}: {option === "characters" ? result.name : result.title}</h1>
                                    <div className="description">
                                        <h1>Descrição:</h1>
                                        <p>{result.description}</p>
                                    </div>
                                    {option === "characters"
                                        ?
                                        <div>
                                            <button onClick={() => handleFavoriteCharacter(result.id)}>
                                                Like
                                            </button>
                                            <button onClick = {() => handleUnfavoriteCharacter(result.id)}>
                                                Unlike
                                            </button>
                                        </div>
                                        :
                                        <div>
                                            <button onClick={() => handleFavoriteComic(result.id)}>
                                                Like
                                            </button>
                                            <button onClick = {() => handleUnfavoriteComic(result.id)}>
                                                Unlike
                                            </button>
                                        </div>
                                    }

                                </div>
                            </div>
                        </li>
                    ))}
                </DetailContainer>
            }
        </ContentContainer>
    )
}
import { useState, useContext } from "react"
import { Link } from 'react-router-dom'
import { Context as DashboardContext } from "../../Context/dashboard"
import Header from "./components/Header"



import { Container, ContentContainer, SearchBarContainer, SearchFavorites, Body } from "./styles"
import  detailAvatar  from "../../assets/detailAvatar.png"

export default function DashBoard() {

    
    const [search, setSearch] = useState("");

    const { option, setOption, results, handleOption } = useContext(DashboardContext)

    function handleSubmit(e: any){
        e.preventDefault();
        handleOption({ option: option, search: search })
    }

    return (
        <Container>
            <Header />
            <ContentContainer>
                <SearchBarContainer onSubmit ={handleSubmit}>
                    <input placeholder ="Search for your favorites here!" type="text" onChange={(e) => setSearch(e.target.value)} />
                    <select onChange={(e) => setOption(e.target.value)}>
                        <option value="characters">Characters</option>
                        <option value="comics">Comics</option>
                    </select>
                    <button type='submit'>Go!</button>
                </SearchBarContainer>
                    {results === undefined ? 
                    <SearchFavorites>
                        <img src={detailAvatar} alt='ico'/>
                    </SearchFavorites> :
                        <Body>
                            {results.map((result: any) => (
                                <li key={result.id}>
                                    <Link to={`/dashboard/details/${result.id}`}>
                                        <img src={`${result.thumbnail.path}/portrait_medium.jpg`} alt='ico' />
                                    </Link>
                
                                    <h1>{option === "characters" ? result.name : result.title}</h1>
                                </li>
                            ))}
                        </Body>
                    }
            </ContentContainer>
        </Container>
    )
}
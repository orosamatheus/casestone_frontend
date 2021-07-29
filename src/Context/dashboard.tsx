import { createContext, useState} from 'react';
import api from '../services/api';
import { DashboardProviderProps, DashboardContextProps  } from './types'

const Context = createContext({} as DashboardContextProps);

interface RequestMarvelProps{
    option: string;
    search: string;
}

function DashboardProvider({children}: DashboardProviderProps){

    const [option, setOption] = useState("characters");
    const [results, setResults] = useState()

    async function handleOption({option, search}: RequestMarvelProps){
        const response = await api.get(`/marvel/${option}/${search}`)
        console.log(response.data)
        setResults(response.data)
    }

    async function handleFavoriteCharacter(id : string){

        const token = localStorage.getItem('token')
        console.log(token)

        try {
            await api.post(`/characters`, {
                character_id : id
            }, { headers : 
                { Authorization: `Bearer ${token}`
            }})
            alert("Character favoritado!")
        } catch(err) { 
            if(err.response) {
                alert(err.message)
            }
        }
    }
    async function handleFavoriteComic(id : string){

        const token = localStorage.getItem('token')
        console.log(token)

        try {
            await api.post(`/comics`, {
                comic_id : id
            }, { headers : 
                { Authorization: `Bearer ${token}`
            }})
            alert("Comic favoritado!")
        } catch(err) { 
            if(err.response) {
                alert(err.message)
            }
        }
    }



    return(
        <Context.Provider value ={{
            results,
            handleOption,
            setResults,
            option,
            setOption,
            handleFavoriteCharacter,
            handleFavoriteComic

            
        }}
        >
            {children}
        </Context.Provider>
    )

}

export { Context, DashboardProvider}
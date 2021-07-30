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
        setResults(response.data)
    }

    async function handleFavoriteCharacter(id : string){
        const token = localStorage.getItem('token')

        try {
            await api.post(`/characters`, {
                character_id : id
            }, { headers : 
                { Authorization: `Bearer ${token}`
            }})
            alert("Character favoritado!")
        } catch(err) { 
            if(err.response) {
                alert("Esse character já foi favoritado!")
            }
        }
    }
    async function handleFavoriteComic(id : string){
        const token = localStorage.getItem('token')

        try {
            await api.post(`/comics`, {
                comic_id : id
            }, { headers : 
                { Authorization: `Bearer ${token}`
            }})
            alert("Comic favoritado!")
        } catch(err) { 
            if(err.response) {
                alert("Esse comic já foi favoritado!")
            }
        }
    }

    async function handleUnfavoriteCharacter(id : string){
        const token = localStorage.getItem('token')

        try {
            await api.delete(`/characters`, {
                headers : { 
                    Authorization: `Bearer ${token}`
                },
                data : {
                    character_id : id
                }
            })
            alert("Character desfavoritado!")
        } catch(err) { 
            if(err.response) {
                alert("Esse character já foi desfavoritado!")
            }
        }
    }

    async function handleUnfavoriteComic(id : string){
        const token = localStorage.getItem('token')

        try {
            await api.delete(`/comics`, {
                headers : { 
                    Authorization: `Bearer ${token}`
                },
                data : {
                    comic_id : id
                }
            })
            alert("Comic desfavoritado!")
        } catch(err) { 
            if(err.response) {
                alert("Esse character já foi desfavoritado!")
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
            handleFavoriteComic,
            handleUnfavoriteCharacter,
            handleUnfavoriteComic
        }}
        >
            {children}
        </Context.Provider>
    )

}

export { Context, DashboardProvider}
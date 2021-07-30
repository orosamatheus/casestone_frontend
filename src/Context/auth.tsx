import {useState, createContext, useEffect} from 'react';
import { AuthProviderProps, AuthContextProps, FormProps } from './types'
import { useForm } from 'react-hook-form'
import history from "../history"

const Context = createContext({} as AuthContextProps);

function AuthProvider({children}: AuthProviderProps){
   
    const { register, handleSubmit} = useForm<FormProps>();
    const [activeButton, setActiveButton] = useState('');
    const [user, setUser] = useState()
    const [isLogged, setIsLogged] = useState(false);

    function handleClick(nome: string) {
        setActiveButton(nome)       
    }

    useEffect(() => {
        function handleStorage () {
          const token = localStorage.getItem('token')
          const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '') : null
    
          if (token) {
            setIsLogged(true)
            setUser(user)
          }
        }
    
        handleStorage()
      }, [])

      function handleLogin (user: any) {
        localStorage.setItem('token', user.token)
        localStorage.setItem('user', JSON.stringify(user))
    
        setUser(user)
        setIsLogged(true)
        history.push('/dashboard')
      }

      function handleLogout () {
        setIsLogged(false)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        history.push('/login')
      }
    


    return(
        <Context.Provider value= {{
            activeButton,
            setActiveButton,
            handleClick,
            register,
            handleSubmit,
            handleLogin,
            isLogged,
            handleLogout,
            user
    
        }}
        >
        {children}
        </Context.Provider>
    )
}

export {Context, AuthProvider} 
export interface ProvidersProps {
    children: React.ReactElement
}

export interface ContextsProviderProps extends ProvidersProps { }

export interface AuthProviderProps extends ProvidersProps { }

export interface DashboardProviderProps extends ProvidersProps { }

export interface AuthContextProps{
    activeButton: string;
    setActiveButton: any;
    handleClick: any;
    handleSubmit: any;
    register: any;
    handleLogin: any;
    handleLogout: any;
    isLogged: boolean;
    user: any;
}

export interface DashboardContextProps {
    results: any;
    handleOption: any;
    setResults: any;
    option: string;
    setOption: any;
    handleFavoriteCharacter: any;
    handleFavoriteComic: any;
    handleUnfavoriteCharacter: any;
    handleUnfavoriteComic: any;

}

export interface FormProps{
    name?: string;
    email: string;
    password: string;
    token?: string;
}

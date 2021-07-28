export interface ProviderProps {
    children: React.ReactElement
}

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

export interface FormProps{
    name?: string;
    email: string;
    password: string;
    token?: string;
}

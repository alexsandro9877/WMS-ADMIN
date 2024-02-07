import { createBrowserRouter } from 'react-router-dom';
export interface IRoot {
    path: string,
    element: React.ReactNode,
    children: [{
        path: string,
        element: React.ReactNode,
    }],
}
export interface IRole {
    userType: string,
    roleProp: [{
        role: string,
        nivel: number
    }]
}

export interface IRolePage {
    roleProp: {
        role: string,
        nivel: number
    }
}

export function Rotas(elementos: IRoot) {

    // administra permisão 

    const router = createBrowserRouter([elementos,]);
    return router
}







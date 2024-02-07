import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { IRoot, Rotas } from './routes';
import App from './App';
import Layot from './Layout';

const roleProp = { role: "Admin", nivel: 1 };/// tela 

const ListaDeRotas: IRoot = {
  path: "/",
  element: <App />,
  children: [{ path: "/1", element: <Layot roleProp={roleProp} /> }]
}

const router = Rotas(ListaDeRotas);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
        <Header/>
        <Main/>
    </StrictMode>,
)

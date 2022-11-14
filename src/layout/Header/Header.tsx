import './Header.css'
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";

function Header() {
    return (
        <>
        <header className="container">
            <img width="200" height="50" src="https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/e5/e0/bd/e5e0bd61-9814-9e4b-ee32-a017746363f6/source/256x256bb.jpg" className="App-logo"></img>
            <div>
                <ul className="navbar">
                    <li>
                        <Link className='links' to="home">Inicio</Link>
                    </li>
                    <li>
                        <Link className='links' to="movies">Películas</Link>
                    </li>
                    <li>
                        <Link className='links' to="series">Series</Link>
                    </li>
                    <li>
                        <Link className='links' to="genres">Géneros</Link>
                    </li>
                    <li>
                        <Link className='links' to="list">Lista</Link>
                    </li>
                    <li>
                        <Link className='links' to="privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link className='links' to="contact">Contact US</Link>
                    </li>
                </ul>
            </div>
        </header>
        <Outlet/>
        </>
    )
}

export default Header
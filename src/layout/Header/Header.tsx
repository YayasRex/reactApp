import './Header.css'

function Header() {
    return (
        <header className="container">
            <img width="200" height="50" src="https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/e5/e0/bd/e5e0bd61-9814-9e4b-ee32-a017746363f6/source/256x256bb.jpg" className="App-logo"></img>
            <div>
                <ul className="navbar">
                    <li>
                        <a href="https://cuevana3.com.mx/inicio/">Inicio</a>
                    </li>
                    <li>
                        <a href="https://cuevana3.com.mx/peliculas/">Películas</a>
                    </li>
                    <li>
                        <a href="https://cuevana3.com.mx/series/">Series</a>
                    </li>
                    <li>
                        <a href="https://cuevana3.com.mx/genero/">Géneros</a>
                    </li>
                    <li>
                        <a href="https://cuevana3.com.mx/blog/">Lista</a>
                    </li>
                    <li>
                        <a href="https://cuevana3.com.mx/privacy-policy/">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="https://cuevana3.com.mx/contact-us/">Contact US</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
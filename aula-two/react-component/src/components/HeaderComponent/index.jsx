import neyImg from "../../assets/images/neyTomandoJoelhada.jpeg";
import "./index.css"

export default function Header(){
    return(
        <header>
            <img src={neyImg} alt="logo do header" />
            <nav>
                <ul>
                    <li>
                        <a href="">Link 1</a>
                        <a href="">Link 2</a>
                    </li>
                </ul>
            </nav>
            <div className="buttonWrapper">
                <button>Log in</button>
                <button> Sign up</button>
            </div>
        </header>
    )
}
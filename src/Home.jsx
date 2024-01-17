import { Link } from "react-router-dom"

export default function Home() {


    return (
        <>
            <div className="home">

                <div className="logo">
                    <i className="fa-solid fa-dice"></i>
                    <p>DiceGame</p>
                </div>

                <Link to={'/game'}>Oyuna Başla</Link>

                <p>coded by <a href="https://www.yasiralakus.com.tr">yasiralakus <i className="fa-solid fa-link"></i></a> </p>

            </div>
        </>
    )
}
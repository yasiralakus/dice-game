import { useState } from "react";

export default function Game() {

    const [pcNum1, setPcNum1] = useState(0);
    const [pcNum2, setPcNum2] = useState(0);

    const [userNum1, setUserNum1] = useState(0);
    const [userNum2, setUserNum2] = useState(0);

    const [isGameStart, setGameIsStart] = useState(null);

    const [scoreControl, setScoreControl] = useState('');

    const [coins, setCoins] = useState(500);

    const [whoIsWin, setWhoIsWin] = useState(null)

    const data = [
        {
            sayi: 1,
            icon: 'one'
        },

        {
            sayi: 2,
            icon: 'two'
        },

        {
            sayi: 3,
            icon: 'three'
        },

        {
            sayi: 4,
            icon: 'four'
        },

        {
            sayi: 5,
            icon: 'five'
        },

        {
            sayi: 6,
            icon: 'six'
        }
    ]

    coins === 0 ? alert('oyun bitti') : '';


    function pcPlay(e) {
        e.preventDefault();
        setGameIsStart(true);
        const randomPc1 = Math.floor(Math.random() * (6 - 1 + 1));
        const randomPc2 = Math.floor(Math.random() * (6 - 1 + 1));
        setPcNum1(randomPc1);
        setPcNum2(randomPc2);
    }

    function userPlay(e) {
        e.preventDefault();
        const randomUser1 = Math.floor(Math.random() * (6 - 1 + 1));
        const randomUser2 = Math.floor(Math.random() * (6 - 1 + 1));
        setUserNum1(randomUser1);
        setUserNum2(randomUser2);
        setGameIsStart(false)
    }

    if( isGameStart === false ) {
        if(((pcNum1 + 1) + (pcNum2 + 1)) > ((userNum1 + 1) + (userNum2 + 1)) )
            { 
                setWhoIsWin('pc');
                setCoins(coins - 100)
            }

        if(((pcNum1 + 1) + (pcNum2 + 1)) < ((userNum1 + 1) + (userNum2 + 1)) )
            { 
                setWhoIsWin('user');
                setCoins(coins + 100)

            }
        if(((pcNum1 + 1) + (pcNum2 + 1)) === ((userNum1 + 1) + (userNum2 + 1)) ) { setWhoIsWin('draw') }

        const gameTimeout = setTimeout(() => {
            setUserNum1(0);
            setUserNum2(0);
            setPcNum1(0);
            setPcNum2(0);
            setWhoIsWin(null);
          }, 3000);

        setGameIsStart(null)
    }



    return (
        <>
            <div className="game">
                <header>

                    <div className="logo">
                        <i className="fa-solid fa-dice"></i>
                        <p>DiceGame</p>
                    </div>

                    <div className="coins">
                        <p>{coins}</p>
                        <i className="fa-solid fa-coins"></i>
                    </div>

                </header>

                

                <main>

                    <div className="pcBox">

                        <h1>Bilgisayar</h1>

                        <div className="">
                            <i className={`fa-solid fa-dice-${data[pcNum1].icon}`}></i>
                            <i className={`fa-solid fa-dice-${data[pcNum2].icon}`}></i>
                        </div>

                    </div>

                    <div className="buttons">
                        {isGameStart === true ? '' : <button onClick={pcPlay}>Oyunu Başlat!</button>}
                        {isGameStart === null ? '' : <button onClick={userPlay}>Zar At!</button>}
                    </div>

                    <div className="userBox">

                        <h1>Oyuncu</h1>

                        <div className="">
                        <i className={`fa-solid fa-dice-${data[userNum1].icon}`}></i>
                        <i className={`fa-solid fa-dice-${data[userNum2].icon}`}></i>
                        </div>

                    </div>

                </main>


                    {whoIsWin === 'pc' &&
                        <div className="infoBox">
                            <p>Bilgisayar kazandı!</p>
                            <p style={{color: '#f00'}}>100 coins kaybettiniz!</p>
                            <p>3 saniye sonra yeni oyuna başlayabilirsiniz.</p>
                        </div>
                    }
                    {whoIsWin === 'user' &&
                        <div className="infoBox">
                            <p>Tebrikler!</p>
                            <p style={{color: '#33673b'}}>100 coins kazandınız!</p>
                            <p>3 saniye sonra yeni oyuna başlayabilirsiniz.</p>
                        </div>
                    }
                    {whoIsWin === 'draw' &&
                        <div className="infoBox">
                            <p>Berabere!</p>
                            <p>3 saniye sonra yeni oyuna başlayabilirsiniz.</p>
                        </div>
                    }

            </div>
        </>
    )
}
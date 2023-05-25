import axios from "axios";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const Joke = () => {
  const [joke, setJoke] = useState({});

    useEffect(()=>{
       handleClick()
    },[]);

    const handleClick = ()=>{
        let endpoint = "https://v2.jokeapi.dev/joke/Any?type=single"
        axios.get(endpoint)
        .then((response)=>{
            setJoke(response.data)
        })
    }

    return ( 
        <>
        <div className="wrapper">
        <div className="container">
            <div className="logo">
                <h1>Joke App <span><img src="images/loveicon.png" alt="icon" height={50} width={50} /></span></h1>
            </div>
        <div className="jokeWrapper">
            <nav>
                <div className="home-icon">
            <span class="material-symbols-outlined">home</span>
                </div>
                <div className="others">
                <span className="material-symbols-outlined">more_vert</span>
                <span className="material-symbols-outlined">favorite</span>
                <span className="material-symbols-outlined">settings</span>
                <span className="material-symbols-outlined">share</span>
                </div>
            </nav>
                { 
                    <>
                 <div className="category">{joke.category}</div>
                 <div className="main">{joke.joke}
                 <CopyToClipboard  text={joke.joke}>
                    <span class="material-symbols-outlined clip">integration_instructions</span>
                    </CopyToClipboard>
                 </div>
                    </>
                }
            
        
                <div className="myButton">
                <button onClick={handleClick}>
                <span class="material-symbols-outlined">double_arrow</span>
                </button>
                </div>
        </div>
        </div>
        </div>
        </>
     );
}
 
export default Joke;
import { useEffect } from "react";
import Login from "./Login"
import Playback from "./playback"

const code = new URLSearchParams(window.location.search).get
('code')

function Music() {
    useEffect(()=>{if(!code) window.location.replace("https://accounts.spotify.com/authorize?client_id=7ddba64e308841f495cb6c6054d6ff9c&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-currently-playing%20user-read-email%20user-read-playback-state%20user-modify-playback-state")},[]);
    return code ? <Playback code= {code} /> : <Login />

}

export default Music


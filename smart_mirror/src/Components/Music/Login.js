import React, {useState,useEffect} from 'react';


const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=7ddba64e308841f495cb6c6054d6ff9c&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-currently-playing%20user-read-email%20user-read-playback-state%20user-modify-playback-state"


export default function Login() {
    return (
    <div>
        <a className= "btn btn-success btn-lg" href= {AUTH_URL}>
            Login With Spotify
        </a>
    </div>
    )
}
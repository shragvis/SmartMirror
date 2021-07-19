import React, {useEffect, useState} from 'react'
import useAuth from './useAuth'
import SpotifyWebAPI from "spotify-web-api-node"; 
const spotifyApi = new SpotifyWebAPI({clientId: "7ddba64e308841f495cb6c6054d6ff9c"})

const styleSheet = {
    div: {
        paddingLeft: "50px",
        fontSize: "15px",
        fontFamily: "Rajdhani",
        position: "absolute",
        top: "400px",
        right: "100px"
    },
    top:{
        marginBottom: "0px",
    },
    bot:{
        marginTop: "0px"
    }
}

export default function Playback({ code }) {
    const accessToken = useAuth(code)
    const [currentTrack, setTrack] = useState()
    const updateTrack = async() => {
        setTrack (await getEvents())
    }
    
    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
        const interval = setInterval (updateTrack, 3000)
        return(
            ()=>{clearInterval(interval)}
        )
    }, [accessToken])
    const getEvents = async()=>{
        try{
        if (!accessToken) return
        const n = await spotifyApi.getMyCurrentPlayingTrack()
        console.log (n)
        const m = n?.body?.item?.name
        const a = n?.body?.item?.artists[0]?.name
        const i = n?.body?.item?.album?.images[n?.body?.item?.album?.images.length-1]?.url
        return{m,a,i}
        } catch(error){
            console.log(error)
        }
    }

    return <div style ={styleSheet.div}>
        <h2>Currently Playing...</h2>
        <img src={currentTrack?.i}/>    
        <div>{currentTrack?.m} - {currentTrack?.a}</div>
        
    </div>
}

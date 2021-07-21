import React, {useEffect, useState} from 'react'
import useAuth from './useAuth'
import SpotifyWebAPI from "spotify-web-api-node"; 
const spotifyApi = new SpotifyWebAPI({clientId: "7ddba64e308841f495cb6c6054d6ff9c"})

const styleSheet = {
    div: {
        paddingLeft: "50px",
        paddingTop: "-20px",
        fontSize: "15px",
        fontFamily: "Rajdhani",
        textAlign: "center"
    },
    inner:(t,T)=>({
        width: "10px",
        height: "10px",
        border: "1px solid grey",
        borderRadius: "100%",
        backgroundColor: "#C9CAE8",
        position: "relative",
        top: "-3px",
        left: `${(t/T)*95}%`,
        
    }),
    outer:{
        width: "200px",
        height: "5px",
        border: "1px solid black",
        borderRadius: "2em",
        marginLeft: "25px"
    },
    box: {
        width: "250px",
        padding: "10px",
        border: "2px solid white",
        margin: "0",
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
        const t = n?.body?.progress_ms
        const T = n?.body?.item?.duration_ms
        return{m,a,i,t,T}
        } catch(error){
            console.log(error)
        }
    }

    return <div style ={styleSheet.div}>
        <div style ={styleSheet.box}>
        <h2>Currently Playing...</h2>
        <img src={currentTrack?.i}/>    
        <div>{currentTrack?.m} - {currentTrack?.a}</div>
        <div style ={styleSheet.outer}>
            <div style ={styleSheet.inner(currentTrack?.t, currentTrack?.T)}>
            </div>
        </div>
        </div>
        </div>
}

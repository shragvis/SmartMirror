import {useState, useEffect} from 'react'
import axios from 'axios'

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()


useEffect(()=> {
    axios
        .post('http://localhost:8080/login',{
            code,
        })
        .then(res =>{
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
            window.history.pushState({}, null, "/")
        })
        .catch((err) =>{
            window.location = "/"
        })
    }, [code])


useEffect(()=> {
    if (!refreshToken || !expiresIn) return
    const interval = setInterval(() => {
        axios
        .post('http://localhost:8080/refresh',{
            refreshToken,
         })
         .then(res =>{
            setAccessToken(res.data.accessToken)
            setExpiresIn(res.data.expiresIn)
        })
        .catch((err) =>{
           window.location = "/"
        })
        return ()=>clearInterval(interval);
    }, (expiresIn- 60) * 1000)
}, [refreshToken, expiresIn])
return accessToken
}


    
   
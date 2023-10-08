

import { useState } from "react"


export const handlerLocation = ()=>{

    const [ locationErroMessage , setLocationErroMessage ] = useState("")

    const [ latlong , stLatlong ] = useState('')

    const [ loading , setLoading ] = useState(false);


    const succes = ( position )=>{
        const lantitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setLoading(false)
        stLatlong(`${lantitude},${longitude}`);
        setLocationErroMessage('')
    }

    const error = () =>{
        setLoading(false)
        setLocationErroMessage('unable to retrive your location ')
    }

    const trackerLocation = () =>{
        if ( !navigator.geolocation){
            setLoading(false)
            setLocationErroMessage('your browser not supported by your browzer')
        }
        else {
            setLoading(true);
            navigator.geolocation.getCurrentPosition(succes,error)
        }

    }

    return {
        latlong ,
        locationErroMessage,
        loading,
        trackerLocation,
    }
} 
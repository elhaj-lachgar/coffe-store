'use client'
import Image from 'next/image';
import Link from 'next/link'
import '../pageStyle.css'
import { getServer, getVoting} from '@/app/components/Hendler';
import { useEffect, useRef, useState } from 'react';



 function infoCard ({params}) {

    let [ voting , setVoting ] = useState(0);
    let [ data , setData ] = useState([])
    let [ render , setRender ] =useState(false)

    async function getV (){
        const res = await getVoting(params , setVoting )
        setVoting(res)
    }
    async function getE () {
        const res = await getServer(params);
        setData(res);
    }
    useEffect(()=>{
        document.getElementById('btn').onclick=()=>{
            getV()
        }
        if( ! render){
            getE()
            setRender(true);
        }
    } , [])

    return (
        <div className='container-cafe' style={{ height : '1200px'}} >
        <Link href='/' style={{textDecoration : 'none' , fontWeight : '800'}} >Back To Home </Link>
       
        <div className='choise-cafe'>
            <div className='container-about'>
                <h1 style={{ color: '#f6f6f6' }}>{data[0]?.name}</h1>
                <div className='cafe-image' style={{ width: '400px', height: '300px', position: 'relative' }}>
                    <Image src={data[0]?.image || ''} fill style={{ borderRadius: '10px' }} alt='' />
                </div>
            </div>
            <div className='vote'>

                <h3>{data[0]?.adresse}</h3>

                <h3>{data[0]?.adresse}</h3>

                <button className='btn-vote' id ='btn'>
                    Up Vote
                </button>

                <span className='N-vote' style={{ display: 'block',
                 marginTop: '15px', 
                 fontSize: '18px', 
                 fontWeight: "bold" }}>
                 {voting || data[0]?.vote}
                 </span>
            </div>
        </div>
    </div>
    )
}

export default infoCard

import Image from "next/image";
import getObjectFromRequestBodyStream from "../StreamReader/dataReader";
import { setRequestMeta } from "next/dist/server/request-meta";


export async function getVoting ( id  ){
    const url = `http://localhost:3000/api/UpdateScoreVoting`;

    const data = {id};

    const valaibleData = JSON.stringify(data);

    const reponse = await fetch(url , { method : 'POST' , body : valaibleData , next : { revalidate : 0 }}) 

    const transData = await getObjectFromRequestBodyStream(reponse.body)
    
    const voting = await transData[0].vote;

    return voting;

}
export async function getServer(params ) {

    const url = `http://localhost:3000/api/GetElementById?id=${params.id}`;

    const res = await fetch(url, { next: { revalidate: 20 } });

    const data = await getObjectFromRequestBodyStream(res.body);

    
    return data;
}


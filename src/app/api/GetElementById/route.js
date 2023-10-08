import { Minifiled, table} from "../globalroles/RouteProvider"


import { NextResponse } from "next/server"




export async function  GET(request) {

     const id = request.nextUrl.searchParams.get("id");
      if (id){

          
               const res = await table.select({
               filterByFormula:`id="${id}"`, 
               }).firstPage();
               if(res.length > 0 ){
                    const remotle = await Minifiled(res) 
                    return NextResponse.json(remotle)
               }
               else{

                    return NextResponse.json({ message : 'caffee not found ..... !'});
               }
         

             
     
     }
          
     return NextResponse.json({ message : 'id is missing'});    
} 


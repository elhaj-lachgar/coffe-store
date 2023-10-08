import { NextResponse } from "next/server";
import { table } from "../globalroles/RouteProvider";
import getObjectFromRequestBodyStream from "@/app/StreamReader/dataReader";

export async function POST(requiste) {


  const methode = await requiste.body;
  let { id, name, adresse, crosse_adresse , image } =await getObjectFromRequestBodyStream(methode);

  if (id) {


      const records = await table.select({
          filterByFormula: `id="${id}"`,
         
        }).firstPage();


      if (records.length > 0) {
        return NextResponse.json({ records });

      } 

      else {

// 
          const creation = await table.create(
            [
              {
              "fields" : {
                "id" : `${id}`,
                "name" : name,
                "adresse" : adresse,
                "crosse_adresse" : crosse_adresse,
                "image":image,
                "vote" : 0
              }
            },
          ]
          );


          if (creation) {
            return NextResponse.json({ creation });
          } 
          
          else {
            return NextResponse.json({
              message: "samething went wrong please try again",
            });
          }
        }


        }

    



  
  return NextResponse.json({ message: "id is missing ...." });
}

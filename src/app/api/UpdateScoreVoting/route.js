

import { Minifiled, table } from "../globalroles/RouteProvider";
import { NextResponse } from "next/server";
import getObjectFromRequestBodyStream from "@/app/StreamReader/dataReader";
export async function POST (request) {


    const methode = await request.body;

    let value =  await getObjectFromRequestBodyStream(methode);
    let  id = value.id.id
    if (id) {
  
        const repond = await table.select({ filterByFormula: `id="${id}"`}).firstPage();
  
        if (repond.length > 0) {

          const data = await Minifiled(repond);

          const voting = data[0].vote + 1;
          const recover = data[0].recover_id

          const result = await table.update([
            {
              "id": `${recover}`,
              "fields": {
                "vote": voting,
              },
            },
          ]);
  
          if (result.length > 0) {
            const sendData = Minifiled(result)
            return NextResponse.json(sendData);

          } else {

            return NextResponse.json({ message: "samething went wrong .....!" });

          }
        } else {

          return NextResponse.json({ message: "this id not match in data base" });

        }
    }
  
    return NextResponse.json({ message: "id is missing ..... !" });

}

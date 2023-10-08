// connect on data base and export it 

const Airtable = require('airtable');
const  base = new Airtable({apiKey: process.env.SECRET_API_KEY}).base(process.env.BASE_KEY);


export const table = base('coffe-store')





              

export const Minifiled = ( records )=>{

    let data = records.map((element)=>{
        return {
            ...element.fields,
            recover_id : element.id
        }
    })
    return data ;
}


import axios from "axios"


const client_id = "ameren-dashboard"
const end_point = "https://btocdevapi.bidgely.com"
const url = `${end_point}/v2.0/encryption/key/${client_id}`

const config = {
    headers:{
        "Authorization": "Bearer d9ae051d-f4ed-4701-a8bf-ba4f7cbb5a7c"
    }
}

async function getKey(){
    return await axios.get(url,config);
}

export const res= getKey();

// @ts-nocheck


/** @type {import('./$types').PageLoad} */
import { getRequestByCommunity,getUserById} from '$lib/server/database/db';
import { jwtDecode } from 'jwt-decode';

export async function load({cookies}) {

    let request = await getRequestByCommunity('3')




    for(let i=0;i<request.length;i++){
       let user = await getUserById(request[i].user_id)
       request[i].userInfo = user[0]
}


    return {
        request:request ?? [],

	}
}

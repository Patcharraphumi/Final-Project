// @ts-nocheck
import { jwtDecode } from 'jwt-decode';
import { redirect } from '@sveltejs/kit';
/** @type {import('./$types').PageLoad} */


export async function load({ cookies }) {
    const session_id = cookies.get('session_id')

    if(session_id === null || session_id === undefined ){

   throw  redirect(303,'/login')

    }

    const payload = jwtDecode(session_id)
    const user = {
        UserName : payload.data.UserName,
        PassWord : payload.data.PassWord
    }


    return {
        user
    }
}


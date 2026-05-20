import { jwtDecode } from 'jwt-decode';
import { redirect } from '@sveltejs/kit';


export async function load({cookies}) {
        const session_id = cookies.get('session_id')

        

        if(!session_id){

            throw redirect(302,'/login')
        }



}

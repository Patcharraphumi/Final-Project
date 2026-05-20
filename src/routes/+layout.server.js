
import { jwtDecode } from 'jwt-decode';

export async function load({cookies}) {

   
    let session_id = cookies.get('session_id')

    let user 
    if(session_id === undefined){
         user = null
    }
    
    if(session_id){

  const payload = jwtDecode(session_id)

     user = {
        UserName : payload.data.UserName,
        PassWord : payload.data.PassWord
    }

}
    return {
        user:user ?? []
    }
}
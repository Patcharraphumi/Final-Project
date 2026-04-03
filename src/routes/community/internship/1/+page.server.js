// @ts-nocheck
import { supabase } from "$lib/supabaseClient";
import { error, redirect } from '@sveltejs/kit';
import { jwtDecode } from "jwt-decode";
import {getUserByUserName,InsertRequest,getRequestById,getTopicByCommunity,isAMember,getRequestByCommunity} from "$lib/server/database/db.js";

export async function load({cookies}) {
  const session_id = cookies.get('session_id')
  if(session_id === undefined){
   throw  redirect(303,'/login')
  }
  const Topic = await getTopicByCommunity(1)

    const decoded = jwtDecode(session_id)
    const payload = await getUserByUserName(decoded.data.UserName)
    const user = {
      id:payload[0].id ,
    username: payload[0].UserName,
    password: payload[0].PassWord,
    topic_id: payload[0].topic_id,
    role: payload[0].role
    }

    let request

    if(user.role === 'admin'){    
     request = await getRequestByCommunity(1)
  }else if(user.role === 'student'){
     request = await getRequestById(user.id)
  }

    if(user.role === 'student' && session_id && await isAMember('1',user.id)){
    return {
      Topic,
      request:{
        status:'approved'
      },
      user:{
        role:'student'
      }
    }
  } if(user.role === 'student' && session_id && !(await isAMember('1',user.id)) && request.length===0){
    return{
      Topic:[],
      request:{
        status:null
      }
    }
  }else if(user.role === 'student' && session_id && !(await isAMember('1',user.id)) && request.length>0){
    return{
      Topic:[],
      request:{
        status:'pending'
      }
    }
  }else if(!session_id){
  throw error(404, 'not found')  
  }else if(user.role === 'admin'){
    return{
      Topic,
      request,
      user:{
        role:'admin'
    }
  }
}else {
    return []
  }



}


/** @satisfies {import('./$types').Actions} */
export const actions = {
	default: async ({cookies}) => {
		// TODO log the user in
     const session_id = cookies.get('session_id')
    const decoded = jwtDecode(session_id)
    const payload = await getUserByUserName(decoded.data.UserName)
    const req = {
      community_id:'1',
      user_id:payload[0].id
    }
    await InsertRequest(req)
	}
};

  
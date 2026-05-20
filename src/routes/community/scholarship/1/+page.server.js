// @ts-nocheck
import { supabase } from "$lib/supabaseClient";
import { error, redirect } from '@sveltejs/kit';
import { jwtDecode } from "jwt-decode";
import {getUserByUserName,InsertRequest,getRequestById,getTopicByCommunity,isAMember,getRequestByCommunity,getCommentByTopicId,getCommunityById, getUserById} from "$lib/server/database/db.js";
import { P } from "flowbite-svelte";

export async function load({cookies}) {

  let community = await getCommunityById(1)

  const session_id = cookies.get('session_id')
  if(session_id === undefined){
   throw  redirect(303,'/login')
  }
  let Topic = await getTopicByCommunity(1)

  for(let i =0;i<Topic.length;i++){
    Topic[i].comments = await getCommentByTopicId(Topic[i].id)
    Topic[i].User = await getUserById(Topic[i].user_id)
  }

  

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
     request = await getRequestById('1',user.id)
  }


    if(user.role === 'student' && session_id && await isAMember('1',user.id)){
    return {
      Topic,
      community,
      request:{
        status:'approved'
      },
      user
    }
  } if(user.role === 'student' && session_id && !(await isAMember('1',user.id)) && request.length===0){
    return{
      Topic:[],
      community,
      request:{
        status:null
      },
      user
    }
  }else if(user.role === 'student' && session_id && !(await isAMember('1',user.id)) && request.length>0){
    return{
      Topic:[],
      community,
      request:{
        status:'pending'
      },
      user
    }
  }else if(!session_id){
  throw error(404, 'not found')  
  }else if(user.role === 'admin'){
    return{
      community,
      Topic,
      request,
      user
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


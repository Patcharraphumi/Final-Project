// @ts-nocheck

import { getUserById,getTopicByUserId, getCommentByUserId, getUserByUserName, getCommunityById, getTopicById } from '$lib/server/database/db';
import { redirect } from '@sveltejs/kit';

import { jwtDecode } from 'jwt-decode';


export async function load({ params ,cookies}) {
	    const sessionId = cookies.get('session_id')

		let payload 

    if(!sessionId){
        throw redirect(302,'/login')   
    }else {

        payload = jwtDecode(sessionId)

    }

	
	
	let user

	if (params.username === 'admin'){
		 user = await getUserByUserName('admin')
	}else {
		
		user = await getUserByUserName(params.username)
	}


	

	let topic = await getTopicByUserId(user[0].id)

	for(let i=0;i<topic.length;i++){
		let community = await getCommunityById(topic[i].community_id)
		topic[i].community = community[0]
	}

	let comment = await getCommentByUserId(user[0].id)

	for(let i=0;i<comment.length;i++){
		let topic = await getTopicById(comment[i].topic_id)
		comment[i].topic = topic[0]
		let community = await getCommunityById(topic[0].community_id)
		comment[i].community = community[0]
	}

	
	
	
	return {
		user,
		topic:topic ?? [],
		comment:comment ?? []

		
	};
}
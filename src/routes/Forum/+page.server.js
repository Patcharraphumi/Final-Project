// @ts-nocheck
/** @satisfies {import('./$types').Actions} */
import { redirect } from '@sveltejs/kit';
import { InsertTopic,getUserByUserName,getUserCommunities,getCommunityById } from '$lib/server/database/db';
import { jwtDecode } from 'jwt-decode';

export const actions = {
	default: async ({request}) => {
		// TODO log the user in
        const data = await request.formData()

        const Topic = {
            Title:data.get('Title'),
            Content:data.get('Content'),
            community_id:data.get('community')
        }

        console.log(data)
        const result = await InsertTopic(Topic)

        return { success: true };

        
	}

};


export async function load({cookies}){
    const payload = jwtDecode(cookies.get('session_id'))
    const user = await getUserByUserName(payload.data.UserName)
    
    const userCommunity = await getUserCommunities(user[0].id)
    
    let community = new Array(userCommunity.length).fill(null)

    for(let i=0;i<userCommunity.length;i++){
        const communityInfo = await getCommunityById(userCommunity[i].community_id)
        community[i] = communityInfo[0]
    }

    return {
        community
    }

}
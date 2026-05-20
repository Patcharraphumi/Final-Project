import { searchTopic,getUserCommunities,getUserByUserName } from '$lib/server/database/db.js'
import { jwtDecode } from 'jwt-decode'
import { redirect } from '@sveltejs/kit'

export async function load({url,cookies}){
     let sessionId = cookies.get('session_id')

    let payload 


    if(!sessionId){
        throw redirect(302,'/login')   
    }else {

        payload = jwtDecode(sessionId)

    }

    const user = await getUserByUserName(payload.data.UserName)


    const searchQuery = url.searchParams.get('params')


    
    let community = [{id:2,name:"สหกิจศึกษา 2"},{id:4,name:"สำหรับนักศึกษา ปี 1"},{id:5,name:"กิจกรรมนักศึกษา"}]
    
    const userCommunity = await getUserCommunities(user[0].id)

    if(userCommunity.length >0){
    community.push(...userCommunity)
    }
   
    const communityIds = community.map(community => community.id)


    let topics = await searchTopic(searchQuery,communityIds)

    return{
        topics :topics ?? []
    }
    
}
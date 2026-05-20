
import { redirect } from '@sveltejs/kit';
import { InsertTopic,getUserByUserName,getUserCommunities,getCommunityById } from '$lib/server/database/db';
import { jwtDecode } from 'jwt-decode';


export async function load({cookies}){

    let sessionId = cookies.get('session_id') 

    let payload 

    if(!sessionId){
        throw redirect(302,'/login')   
    }else {

        payload = jwtDecode(sessionId)

    }

    const user = await getUserByUserName(payload.data.UserName)


    let community = [{id:2,name:"สหกิจศึกษา 2"},{id:4,name:"สำหรับนักศึกษา ปี 1"},{id:5,name:"กิจกรรมนักศึกษา"},{id:6,name:"ทุนการศึกษา 2"}]
    
    const userCommunity = await getUserCommunities(user[0].id)
    
    if(userCommunity.length > 0){
        for(let i =0;i<userCommunity.length;i++){
        let commu = await getCommunityById(userCommunity[i].community_id)
        community.push(commu[0])

    }
   
    
  
    
    }
     return {
        community
    }
}



export const actions = {
	default: async ({request,cookies}) => {
        const payload = jwtDecode(cookies.get('session_id'))
    const userName = await getUserByUserName(payload.data.UserName)

    const data = await request.formData()

        const Topic = {
            Title:data.get('Title'),
            Content:data.get('Content'),
            community_id:data.get('community'),
            user_id:userName[0].id
        }

     

     
        
        await InsertTopic(Topic)



        switch (Topic.community_id) {
  case '1':
    throw redirect(303,'./community/internship/1')
    case '2':
    throw redirect(303,'./community/internship/2')
    case '3':
    throw redirect(303,'./community/scholarship/1')  
  case '4':
    throw redirect(303,'./community/firstyear')
    case '5':
    throw redirect(303,'./community/activity') 
    case '6':
    throw redirect(303,'./scholarship/2') 
}
        return { success: true };
    
    }

}
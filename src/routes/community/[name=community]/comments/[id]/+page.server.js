// @ts-nocheck
/** @type {import('./$types').PageLoad} */

import { getTopicById,getCommentByTopicId,insertComment,getComment,getReply,getUserByUserName,getCommunityById, getUserById} from '$lib/server/database/db';
	import { page } from '$app/state';
import { refreshAll } from '$app/navigation';
import { jwtDecode } from 'jwt-decode';

export async function load({ params }) {

  const topicId = params.id
    const Topic = await getTopicById(topicId )

    const comments = await getCommentByTopicId(topicId)

    const reply = await getReply(topicId) 

    const community = await getCommunityById(Topic[0].community_id)

    const user = await getUserById(Topic[0].user_id)
  

	return {
    Topic,
    comments:comments ?? [],
    reply:reply ?? [],
    community:community ?? [],
    user:user ?? []
	}
}
export const actions = {
 comment: async ({ request, params,cookies }) => {
      const payload = jwtDecode(cookies.get('session_id'))
    const userName = await getUserByUserName(payload.data.UserName)

    const data = await request.formData();
    
    const content = data.get('content');
    const refId = data.get('reference_Id'); 

    const newComment = {
      Content: content,
      topic_id: params.id, 
reference_Id: data.get('reference_Id') || null,
            user_id:userName[0].id
    };

    await insertComment(newComment); 

  },
}

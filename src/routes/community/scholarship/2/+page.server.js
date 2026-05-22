import { getTopicByCommunity,getCommunityById,getCommentByTopicId,getUserById} from '$lib/server/database/db';

export async function load(){


	let Topic = await getTopicByCommunity(6)

  for(let i =0;i<Topic.length;i++){
    Topic[i].comments = await getCommentByTopicId(Topic[i].id)
	let user = await getUserById(Topic[i].user_id)
	Topic[i].User = user[0] 
  }
  
	let community = await getCommunityById(6)
	return {
		topic:Topic ?? [],
		community:community ?? []
	}
}



/** @satisfies {import('./$types').Actions} */
export const actions = {
	default: async (event) => {
		// TODO log the user in
	}
};
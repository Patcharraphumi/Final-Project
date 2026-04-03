/** @type {import('./$types').PageLoad} */

import { getTopicById,getCommentByTopicId} from '$lib/server/database/db';

export async function load({ params }) {

  const topic_id = params.id
    const Topic = await getTopicById(topic_id)

    const comments = await getCommentByTopicId(topic_id)

	return {
    Topic,
    comments:comments ?? []
	}
}

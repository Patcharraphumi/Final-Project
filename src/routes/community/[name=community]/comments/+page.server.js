/** @type {import('./$types').PageLoad} */

import { getTopicById } from '$lib/server/database/db';

export async function load({ params }) {

    const topic = await getTopicById()

    console.log(params.id)
	return {
        user:user
	};
}
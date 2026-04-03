// @ts-nocheck


/** @type {import('./$types').PageLoad} */
import { getRequestByCommunity,getUserById} from '$lib/server/database/db';

export async function load() {
    const request = await getRequestByCommunity('1')
    const user = await getUserById(request[0].user_id)
    return {
		request,
        user
	}
}

import { deleteRequest,insertUserToCommunity } from "$lib/server/database/db";
import { json } from '@sveltejs/kit';

export async function DELETE({ params }) {
	const id = params.id

	await deleteRequest(id)
	return new Response(null, { status: 204 });
}

export async function POST({params,request}){
	const id = params.id
	const user = await request.json()

	await insertUserToCommunity(user.user_id,user.community_id)

	await deleteRequest(id)
	return new Response(null, { status: 204 });



}
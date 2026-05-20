
import { deleteComment } from "$lib/server/database/db";

export async function DELETE({ params }) {
	const id = params.id

	await deleteComment(id)
	return new Response(null, { status: 204 });
}



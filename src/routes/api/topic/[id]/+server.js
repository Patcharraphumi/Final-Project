
import { deleteTopic } from "$lib/server/database/db";

export async function DELETE({ params }) {
	const id = params.id

	await deleteTopic(id)
	return new Response(null, { status: 204 });
}


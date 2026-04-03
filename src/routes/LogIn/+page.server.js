/** @satisfies {import('./$types').Actions} */

import {redirect} from '@sveltejs/kit'
import { isAdmin } from '$lib/server/database/db.js';
import jwt from 'jsonwebtoken'
import { userState } from '../../lib/state.svelte.js';


export const actions = {

	login: async ({request,cookies}) => {
        
        const data = await request.formData()
		// TODO log the user in
        
        const username  = data.get('username')

        const password = data.get('password')


        const user = {UserName:username,
            PassWord:password
        }

        if(user.UserName != 'admin'){
        const  req = new Request('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
    method: 'POST',
    'hostname': 'restapi.tu.ac.th',
    'path': '/api/v1/auth/Ad/verify',
    headers: {
      'Content-Type': 'application/json',
      'Application-Key': 'TU133be33cfbf58f3903720d654a8c61babc73e1e598658283702e66b8b291c4a148a11491778a8fb0c0c1455f334a5eb2'

    },
    body:JSON.stringify(user)
  });

 
    const auth = await fetch(req)
    const res = await auth.json()
    console.log(res)
    console.log(await isAdmin(user.PassWord))

    }else if(username === 'admin' && await isAdmin(user.PassWord)){
      userState.role = 'admin'
      
    }

  const token =  jwt.sign({data:user}, 'secret')

  cookies.set('session_id', token, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7 // one week
        });
  throw redirect(303, "/")

	},
	register: async (event) => {
		// TODO register the user
	}
};
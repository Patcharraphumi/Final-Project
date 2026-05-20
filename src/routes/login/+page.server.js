/** @satisfies {import('./$types').Actions} */

import {redirect} from '@sveltejs/kit'
import { getUserByUserName, insertUser, isAdmin } from '$lib/server/database/db.js';
import jwt from 'jsonwebtoken'
import { fail } from '@sveltejs/kit';


export const actions = {

	login: async ({request,cookies}) => {
        
        const data = await request.formData()
		// TODO log the user in
        
        const username  = data.get('username')

        const password = data.get('password')

      

        let user = {
          "UserName":username,
            "PassWord":password,
            "FirstName":null,
            "LastName":null
        }
          let token


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

  const res = await fetch(req)

 let userInfo =  await res.json()

 user.FirstName = userInfo.displayname_th.split(" ")[0]

 user.LastName = userInfo.displayname_th.split(" ")[1]


  console.log(user.LastName)
  if(res.status === 200 && (await getUserByUserName(user.UserName)).length === 0){
     token =  jwt.sign({data:user}, 'secret')
     await insertUser(user)

	}
  if(res.status === 200 && (await getUserByUserName(user.UserName)).length > 0){
  token =  jwt.sign({data:user}, 'secret')
  }
} else if(user.UserName === 'admin'&& await isAdmin(user.PassWord)){
      token =  jwt.sign({data:user}, 'secret')

}




if(token){

  cookies.set('session_id', token, {
            path: '/',
            httpOnly: false,
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7 
        });
  throw redirect(303, "/")
      }
  },

	
	register: async (event) => {
		// TODO register the user
	}
}
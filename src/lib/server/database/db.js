// @ts-nocheck
import { supabase } from "$lib/supabaseClient";
import { P } from "flowbite-svelte";


//Topic Controller
/**
 * @param {{ Title: any; Content: any;community_id:any; }} Topic
 */
export async function InsertTopic(Topic){
    
const { data, error } = await supabase
  .from('Topic')
  .insert([
    { Title:Topic.Title, Content: Topic.Content ,community_id:Topic.community_id},
  ])
  .select()

}

export async function getTopicById(id){

let { data: Topic, error } = await supabase
  .from('Topic')
  .select("*")

  // Filters
  .eq('id', id)

  if(Topic.length >0 ){
    return Topic
  }else {
    return []
  }
}




export async function getCommentByTopicId(id){


let { data: Comment, error } = await supabase
  .from('Comment')
  .select("*")

  // Filters
  .eq('topic_id', id)

  if(Comment.length>0){
    return Comment
  }else{
    return []     
  }

}

//User Controller

export async function getUserByUserName(usrname){

  let { data: User, error } = await supabase
  .from('User')
  .select("*").eq('UserName',usrname)

  if(User){
  return User 
}else {
  return []
}
}

export async function getUserById(id){

let { data: User, error } = await supabase
  .from('User')
  .select('*')
  .eq('id',id)

  if(User.length > 0){
    return User
  }else{
    return []
  }
}

export async function isAdmin(password){
let { data: User, error } = await supabase
  .from('User')
  .select("*")
  // Filters
  .eq('PassWord', password)
  
  if(User.length>0){
    return User
  }else {
    return []
  }
}


//check community that user is a member

export async function getUserByCommunity(usrname){

  let { data: User, error } = await supabase
  .from('User')
  .select("*").eq('UserName',usrname)

  if(User){
  return User 
}else {
  return []
}
}




export async function getRequestByCommunity(id){

let { data: request, error } = await supabase
  .from('request')
  .select("*")
  .eq('community_id', id)
  if(request.length >0){
    return request
  }else {
    return []
  }

}

export async function InsertRequest(req){


const { data, error } = await supabase
  .from('request')
  .insert([
    { community_id: req.community_id, user_id:req.user_id },
  ])
  .select()

  if(error){
    console.log(error)
  }else{
    console.log("Success!")
  }
}

export async function getRequestById(id){

let { data: request, error } = await supabase
  .from('request')
  .select("*")

  // Filters
  .eq('user_id', id)

  if(request){
    return request
  }else {
    return []
  }

}


export async function deleteRequest(id){

const { error } = await supabase
  .from('request')
  .delete()
  .eq('user_id', id)

}

export async function getTopicByCommunity(id){

   let { data: Topic } = await supabase
  .from('Topic')
  .select("*").eq('community_id',id)

  if(Topic.length >0 ){
    return Topic
  }else {
    return []
  }
}

export async function isAMember(communityid,userid){

let { data: CommunityUser, error } = await supabase
  .from('CommunityUser')
  .select('*')
    .eq('user_id', userid)

  
if(CommunityUser.length > 0 && CommunityUser[0].user_id === userid){
  return true
}else {
  return false
  
}

}


export async function getCommunityById(id){
 let { data: Community, error } = await supabase
  .from('Community')
  .select("*")

  // Filters
  .eq('id', id)

  if(Community.length >0){
    return Community
  }else{
    return []
  } 
}

export async function getUserCommunities(userId){

let { data: CommunityUser, error } = await supabase
  .from('CommunityUser')
  .select("*")

  // Filters
  .eq('user_id', userId)

  if(CommunityUser.length >0){
    return CommunityUser
  }else{
    return []
  }


  
}



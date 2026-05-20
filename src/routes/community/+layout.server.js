



export function load({url}){

    const segment = url.pathname.split('/')

    let communityName = segment[2]

   console.log(communityName) 
    return{
 
            communityName
    
    }
}


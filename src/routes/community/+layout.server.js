



export function load({url}){

    const segment = url.pathname.split('/')

    let communityName = segment[2]

   
    return{
 
            communityName
    
    }
}


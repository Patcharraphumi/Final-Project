// @ts-nocheck
 let userState = $state({
    login:false,
    role:null
	/* ... */
});

export default {
    get role(){
        return userState.role
    },
    setRole(role){
        userState.role  = role
    }
}
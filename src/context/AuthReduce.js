const AuthReducer = (state, action) =>{
    switch(action.type){
       case "LOGOUT":
          return{
            user: null,
            isfetching: false,
            error: false,
          };
       case "LOGIN_START":
           return{
            user: null,
            isfetching: true,
            error: false
           };
        case "LOGIN_SUCCESS":
            return{
             user: action.payload,
             isfetching: false,
             error: false
            };
        case "LOGIN_FAILURE":
                return{
                 user: null,
                 isfetching: false,
                 error: action.payload,
                };
        case "REGISTRATION_START":
             return{
                user: null,
                isfetching: true,
                error: false
             };
        case "REGISTRATION_SUCCESS":
              return{
                  user: action.payload,
                  isfetching: false,
                  error: false
              };
        case "REGISTRATION_FAILURE":
            return{
               user: null,
               isfetching: false,
               error: true
            };
        default: {
            return {
                state
            }
        }
    }
}


export default AuthReducer;
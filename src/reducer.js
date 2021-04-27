export const initialState={
    user: null,
    useremail: null,
    username: null,
    userprofile: null
};
const reducer=(state,action)=>{
       switch(action.type)
       {
           case 'Auth':
               return{
                  ...state,
                  user: action.users,
                 useremail: action.email,
                  username: action.name,
                  userprofile: action.profile
               };
            case 'delAuth':
                return {
                    ...state,
                    user: action.users,
                    useremail: null,
                    username: null,
                    userprofile: null
                };
                default:
                    return state;
       }
};
export default reducer;
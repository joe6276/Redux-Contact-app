const initialState=[
    {
        id:1,
        name:'Jonathan Ndambuki',
        number:712584549,
        email:"joendambuki16@gmail.com"
    }
    ,
    {
        id:2,
        name:'Benedict Mutisya',
        number:718065406,
        email:"benmutisya@gmail.com"
    }
]

const contactReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_CONTACT":
            state=[...state ,action.payload]
            return state;

            case "UPDATE_CONTACT":
                const updatestate=state.map(
                    (contact)=>contact.id===action.payload.id ? action.payload:contact);

            state=updatestate
            return state;

            case "DELETE_CONTACT":
                const filteredContacts=state.filter(
                    (contact)=>contact.id!==action.payload && contact);

            state=filteredContacts
            return state;
        default:
            return state;
    }

}

export default contactReducer;
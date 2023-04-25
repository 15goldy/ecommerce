const addItem=[];

const addItems=(state=addItem,action)=>{
    switch(action.type){
        case"ADDITEM":
        return[
            ...state,
            action.payload
        ]
        break;

       case "DELITEM":
        return  state=state.filter((x)=>{
             return x.id!==action.payload.id
            })
        break;

        default :return state;
        break;
    }
}
export default addItems;

// in reducer we tell redux how to performe the action

// here we have return addItem instead of addItems noticiable
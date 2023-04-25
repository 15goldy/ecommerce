export const addItem=(product)=>{
return{
    type:"ADDITEM",
    payload:product
}
}

export const delItem=(product)=>{
    return{
        type:"DELITEM",
        payload:product
    }
}

// in actions we tell redux what we want to do .
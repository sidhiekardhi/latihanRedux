import { combineReducers } from "redux"

const initialState={
    name:"sidhiek ardhiansah"
}

const initialStateBuah={
    form: {
        warna: '',
        kondisi: '',
        harga: ''
    },
    warna:"merah",
    kondisi: "matang"
}
const initialStateSayur={
    harga: "murah",
    kondisi: "langka"
}



const reducerBuah = (state = initialStateBuah, action) => {
    if (action.type === "SET_FORM") {
        return{
            ...state,
            form: {
                ...state.form,
                [action.inputType]: action.inputValue,
            }
        }
    }
    return state
}
const reducerSayur = (state = initialStateSayur, action) => {
    return state
}
//combine
const reducer = combineReducers({
    reducerBuah, reducerSayur
})

// //tidak combine
// const reducer = (state = initialStateBuah, action) => {
//  return state
// }


export default reducer;
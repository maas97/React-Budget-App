import { createContext, useReducer } from "react"


const AppReducer = (state, action)=> {
    switch(action.type){
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        case 'DELETE-EXPENSE':
            return{
                ...state,
                expenses: state.expenses.filter( (expense)=> expense.id !== action.payload )
            }
        default:
            return state;
    }
}

const initialState = {
    budget: 7000,
    expenses: [
        {id:123, name: 'shopping', cost: 50 },
        {id:124, name: 'cooking', cost: 70 },
        {id:125, name: 'playing', cost: 90 },
    ]
}

export const AppContext = createContext();

export const AppProvider = (props)=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(
        <AppContext.Provider value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch,
        }}>
            {props.children}

        </AppContext.Provider>
    )
}
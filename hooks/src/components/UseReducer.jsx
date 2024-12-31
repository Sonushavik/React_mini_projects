import React, { useReducer, useState } from 'react'

const UseReducer = () => {


        const initialState = {
                count: 0,
                inc: 2,
                dec: 2,
        };

        const reducer = (state, action) => {
                console.log(state, action);
                // if (action.type === "INCREMENT") {
                //         return state + 1;
                // }

                // if(action.type === "DECREMENT"){
                //         return state -1;
                // }
                // if(action.type === "RESET"){
                //         return (state = 0);
                // }

                switch(action.type){
                        case "INCREMENT":
                                return{
                                        ...state,
                                        count: state.count + state.inc,
                                };
                        
                        case "DECREMENT":
                                return {
                                        ...state,
                                        count: state.count - 1,
                                }
                        
                        case "RESET":
                                return {
                                        ...state,
                                        count:0
                                }

                        default: 
                                return state;
                }

        };
        const [state, dispatch] = useReducer(reducer, initialState);
        return (
                <>
                        <h1>{state.count}</h1>
                        <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
                        <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
                        <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
                </>
        )
}

export default UseReducer

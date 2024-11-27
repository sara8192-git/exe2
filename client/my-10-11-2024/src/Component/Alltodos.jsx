import { useReducer, useRef } from "react"
import Todo from "./Todo"
const Alltodos = () => {

    const reducer = (state, action) => {
        switch (action.type) {
            case "add":
                const s1=state.map(a=>{return {id:a.id,name:a.name}})
                s1.push(action.what)
                return s1;
                
            case "delete":
              return  state.filter((a) => a.id !== action.obj.id)
            default: throw new Error()
        }
    }
   

    const initialState = [{ id: 0, name: " " }, { id: 1, name: " " }, { id:2, name: " " }];
  
    const [state, dispatch] = useReducer(reducer, initialState);

    const refid = useRef(0)
    const refname = useRef("")
    return (
        <>
            <label>id:</label>
            <input type="number" ref={refid}></input>
            <label>name:</label>
            <input type="text" ref={refname}></input>
            <button onClick={() =>{ dispatch({ type: "add",what:{id:refid.current.value,name:refname.current.value} })}}>add</button>
            {state.map(item => { return <Todo state={{ id: item.id, name: item.name }} dispatch={dispatch} /> })}
        </>
    )
}
export default Alltodos
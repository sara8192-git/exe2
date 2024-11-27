

const Todo = (props) => {
    return (
        <>
            <h1>{props.state.id}</h1>
            <h1>{props.state.name}</h1>
            <button onClick={()=>{props.dispatch({ type: "delete", obj: { id: props.state.id } })}}>DELETE</button>
        </>
    )
}
export default Todo
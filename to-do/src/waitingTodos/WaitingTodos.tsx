import { useEffect, useState } from "react"
import { TodoType } from "../App"





const WaitingTodos = ({setWaitingTodos , waitingTodos}:{
    setWaitingTodos : any , 
    waitingTodos : TodoType[]
}) => {

  
    const [content, setContent] = useState('')
    const [arrayCounter, setarrayCounter] = useState(0)

    const handleClick = () => {

        const newTodo: TodoType = {
            content: content,
            status: "waiting",
            index: arrayCounter
        }

        setWaitingTodos([...waitingTodos, newTodo])

        setarrayCounter(arrayCounter + 1) 



    }

    const handleDelete = (item: TodoType) => {



        for (var a = 0; a < waitingTodos.length; a++) {

            var index_arr = waitingTodos[a];

            if (index_arr.index == item.index) {
                item.status = "deleted"
                break
            }


        }

        console.log(item)

        setWaitingTodos([...waitingTodos])

    }


    useEffect(() => {

        console.log(waitingTodos)

    }, [waitingTodos])



    return (

        <>

            <h1>Waiting Todos</h1>

            <input type="text" name="" id="" onChange={(event) => {
                setContent(event.target.value)
                console.log(content);
            }} />

            <button style={{ marginLeft: 20 }}
                onClick={handleClick}> Ekle </button>
            {
                waitingTodos.map((item) => {

                    return (
                        <>
                            {item.status === 'waiting' &&
                                <>
                                    <div > {item.content} </div>
                                    <button onClick={() => handleDelete(item)}>delete</button>
                                </>
                            }

                        </>
                    )
                })
            }
        </>

    )
}



export default WaitingTodos
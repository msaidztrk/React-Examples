import { TodoType } from "../App"


const DeletedTodos = ({ waitingTodos }: {
    waitingTodos: TodoType[]
}) => {
    return (

        <>
            <h1>Deleteds</h1>
            {
                waitingTodos.map((item) => {


                    return (
                        <>
                            {item.status === 'deleted' &&
                                <>
                                    <div > {item.content} </div>

                                </>
                            }

                        </>
                    )
                })
            }

        </>

    )
}

export default DeletedTodos
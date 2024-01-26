
import { useState } from 'react'
import './App.css'

import DeletedTodos from './deletedTodos/DeletedTodos'
import WaitingTodos from './waitingTodos/WaitingTodos'

export type TodoType = {
  content: string
  status: 'waiting' | 'deleted'
  index: number
} 

function App() {

  const [waitingTodos, setWaitingTodos] = useState<TodoType[]>([])

  return (
    <>

      <h1>Said</h1>
    <WaitingTodos waitingTodos={waitingTodos} setWaitingTodos={setWaitingTodos} />
    <DeletedTodos waitingTodos={waitingTodos}  />

    </>
  )
}

export default App

import { useEffect } from "react";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import AddTodoForm from "./components/ui/AddTodoForm";
import TodoList from "./components/ui/TodoList";
import { useDispatch } from "react-redux";
import { fetchAndDispatchData, fetchTodos } from "./redux/module/todoThunk";


function App() {
const dispatch=useDispatch()
useEffect(()=>{
  fetchAndDispatchData(dispatch,fetchTodos)
},[])

  return (
    <>
      <Header />
      <Main childern={<>
      <AddTodoForm/>
      <TodoList />
      </>
      }

      />
    </>
  );
}

export default App;

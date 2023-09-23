import {  Stack } from "@mui/material"
import { useAppSelector } from "../../../redux/store"
import Todo from "../Todo"
import { Button } from "../../common/index.style"
import { useDispatch } from "react-redux"
import { emptyTodoList ,relaodTodoList} from "../../../redux/module/todoListSlice"
import StructurePage from "../../layout/StructurePage"

 const TodoList = () => {
  const {itemsOfTodoList,error,loadind} =useAppSelector(state=>state.todoList)
  
  const dispatch=useDispatch()
  const handleEmptyList=()=>dispatch(emptyTodoList())
  const handleRelaodTodoList=()=>dispatch(relaodTodoList())

  
  return (
    <StructurePage error={error} 
    childern={<> <Stack
      sx={{
        marginTop:'20px',
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: {
          xs: "center",
          xl: "start",
        },
      }}
    >
      {itemsOfTodoList.length? itemsOfTodoList.map((item) => 
         <Todo key={item.id} {...item} />
      ):<h3>no item in products</h3>}
      </Stack>
     <Button style={{marginLeft:'70%'}} onClick={itemsOfTodoList.length?handleEmptyList:handleRelaodTodoList}>{itemsOfTodoList.length? 'remove all products':'reload products'}</Button>
</>}
     loading={loadind}/>
      
   
  
  

  )
}
export default TodoList

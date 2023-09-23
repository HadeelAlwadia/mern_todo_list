import {  createAsyncThunk } from "@reduxjs/toolkit"
import API from "../../api"

//create todos the thunk
const fetchTodos = createAsyncThunk(
  'todos/getTodos',
  async () => {
    const response = await API.get('/')
    return response.data.todos
  }
)


 const fetchAndDispatchData =(dispatch:any,fetchData:any) => {
    // You can dispatch your async thunk action here
     dispatch(fetchData());
  
  };
export {
    fetchTodos,
    fetchAndDispatchData
}
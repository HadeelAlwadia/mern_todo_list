import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import itemsOfTodoList from '../../data/items.json'
import { fetchTodos } from "./todoThunk";

export interface TodoProperty  {
  id: string;
  name: string;
  imgUrl: string;
};

export interface TodoListObject{
  todoOfInput:TodoProperty|null,
  itemsOfTodoList:TodoProperty[],
  loadind:boolean,
  error:string 
}

const initialState:TodoListObject = {
  todoOfInput:null,
   itemsOfTodoList:[],
   loadind:false,
   error:''
  } 

const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {

   deleteItemOfList:(state,{payload}:PayloadAction<{id:string}>)=>{
     const newTodoList=state.itemsOfTodoList.filter(item=>item.id!==payload.id)
     state.itemsOfTodoList=newTodoList
   },

   addItemOfList:(state,{payload}:PayloadAction<TodoProperty>)=>{
    state.itemsOfTodoList.unshift(payload)
    state.todoOfInput=null},

   relaodTodoList:(state)=>{state.itemsOfTodoList=itemsOfTodoList},
   emptyTodoList:(state)=>{state.itemsOfTodoList=[]},
    
   editeTodoList:(state,{payload}:PayloadAction<{id:string}>)=>{
    const uditeTodoItem=state.itemsOfTodoList.find(item=>item.id===payload.id)
    state.todoOfInput=uditeTodoItem||null
    const newTodoList=state.itemsOfTodoList.filter(item=>item.id!==payload.id)
    state.itemsOfTodoList=newTodoList
   }},
    extraReducers: (builder:any) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchTodos.pending, (state:TodoListObject, action:any) => {
        state.loadind=true;
        state.error='';
        state.itemsOfTodoList=[]
   
    })
    builder.addCase(fetchTodos.fulfilled, (state:TodoListObject, {payload}:any) => {
      state.loadind=false;
      state.error='';
      state.itemsOfTodoList=payload
   
  })
  builder.addCase(fetchTodos.rejected, (state:TodoListObject, {payload}:any) => {
    state.loadind=false;
    state.error=payload;
    state.itemsOfTodoList=[]

})

  },
 
 
  }
);


export default todoListSlice.reducer;

export const {
  addItemOfList,
  deleteItemOfList,
  emptyTodoList,
  relaodTodoList,
  editeTodoList
} = todoListSlice.actions;

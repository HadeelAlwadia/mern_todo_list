import express from 'express'
import { createTodo, deleteItemOFtodo, getAlltodo, updateItemOfTodo } from '../controllers/index.mjs';
const routes=express.Router();

// Get all TODO items
routes.get('/',getAlltodo);

// Create a new TODO item
routes.post('/', createTodo);

// Update a TODO item by ID
routes.put('/:id',updateItemOfTodo );

// Delete a TODO item by ID
routes.delete('/:id', deleteItemOFtodo);

export default routes;






import { collection } from "../db/index.mjs";

const getAlltodo = async(req, res) => {
  try{
    const result= await collection.find({}).toArray(res=>res)
    console.log(result);
      res.status(200).json({todos:result,  massage:'ok'})
  } catch(error){
     res.status(500).json('some error occur!')
  }
  }


const createTodo =async(req,res) =>{


  try{
    const result=await collection.insertOne(req.body)
    console.log(result);
    res.json({massage:'ok'});
  }catch(error){
    res.status(500).json('some error occur!')
  }

    }
   
  

const deleteItemOFtodo = async (req, res) => {
    const itemId = req.params.id;
    console.log(itemId)
  try{
    const result=await  collection.deleteOne({id:itemId})
    result.deletedCount===0? res.status(300).json({massage:'error'}):  res.status(200).json({massage:'ok'})
  }catch(error){
    res.status(500).json('some error occur!')
  }
  

}


const updateItemOfTodo =async  (req, res) => {
    const itemId = req.params.id;
    const updatedItem=req.body
    try{
      const result=  await collection.findOneAndUpdate(
        { id: itemId },
        { $set: updatedItem },
        { returnOriginal: true }
      );
    res.json(result)
        
    }catch(error){
      res.status(500).json('some error occur!')
    }
       
}


export {
    createTodo, updateItemOfTodo, deleteItemOFtodo, getAlltodo
}
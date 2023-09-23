import { useDispatch } from 'react-redux'
import { Button } from '../../common/index.style'
import { Form, TextFiled } from './AddTodoForm.style'
import { useEffect, useState } from 'react'
import { addItemOfList } from '../../../redux/module/todoListSlice'
import { uniqueId } from '../../../utils'
import car from '/imgs/car.jpg'
import { useAppSelector } from '../../../redux/store'
import API from '../../../api'


const AddTodoForm = () => {
  const { todoOfInput } = useAppSelector(state => state.todoList)
  console.log(todoOfInput)
  const [value, setValue] = useState('')
  const [haveError,setHaveError]=useState(false)
  const dispatch = useDispatch()
const newTodo={id: todoOfInput?.id||uniqueId(), imgUrl: todoOfInput?.imgUrl||car, name: value }
  useEffect(()=>{ setValue(todoOfInput?.name||'')},[todoOfInput])

  const handleChangeValue = (newValue: string) => {
    setValue(newValue)
    setHaveError(false)
  }

  const handleAddItemToList = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()
      value?dispatch(addItemOfList(newTodo)):setHaveError(true)
      setValue(todoOfInput?.name||'') 
         todoOfInput? API.put(`/${todoOfInput.id}`,newTodo):API.post('/',newTodo)
  }
  
  return (
    <Form onSubmit={handleAddItemToList}>
      <TextFiled
        errorInput={haveError}
        onChange={e => handleChangeValue(e.target.value)}
       value={value}
      />
      <Button type='submit'>Add</Button>
    </Form>
  )
}

export default AddTodoForm

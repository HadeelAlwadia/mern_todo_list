import { Card, CardContent,CardMedia, Stack, Typography } from "@mui/material"
import { TodoProperty, deleteItemOfList,editeTodoList } from "../../../redux/module/todoListSlice"
import { Button } from "../../common/index.style"
import { useDispatch } from "react-redux"
import API from "../../../api"

const Todo = ({id,imgUrl,name}:TodoProperty) => {
  const dispatch=useDispatch();

  const handleDeleteItem=()=>{
    dispatch(deleteItemOfList({id}))
    API.delete(`/${id}`)
  }
  const handleEditeItem=()=>{
    dispatch(editeTodoList({id}));
  }

  return (
    <Card sx={{ minWidth: { xs: '300px', sm: '400px' }, height: 430 }}>
    <CardMedia
      component='img'
      alt='green iguana'
      sx={{ height: 250, maxWidth: 400 }}
      image={imgUrl}
    />
    <CardContent
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Typography variant='h5' component='div'>
        {name}
      </Typography>
     
      <Stack  flexDirection={'row'} width={'40%'} justifyContent={'space-around'}>
      <Button onClick={handleDeleteItem}>
        delete
      </Button>
      <Button onClick={handleEditeItem}>
        edite
      </Button>
      </Stack>
   </CardContent>

  </Card>
  )
}

export default Todo

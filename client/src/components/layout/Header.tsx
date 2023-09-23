import { AppBar,Toolbar } from "@mui/material"

const Header = () => {
  return (
    <AppBar position="fixed"  sx={{background:'#000'}}>
        <Toolbar sx={{width:'80%'}}>
           Todo
        </Toolbar>
       
     </AppBar >
  )
}

export default Header

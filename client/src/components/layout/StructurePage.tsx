import {ReactElement} from 'react'
import { Error, Loading } from '../common/index.style'

interface StructurePageProperty{
    error:string
    childern:ReactElement
    loading:boolean
}

 const StructurePage = ({error,childern,loading}:StructurePageProperty) => {
  return (
    <>
      
    { error&&<Error>{error}</Error>}
    { loading?<Loading/>:childern}  
    
    </>
 
  )
}

export default StructurePage;
import { ReactElement } from "react"

const Main = ({childern}:{childern:ReactElement}) => {
  return (
    <main style={{margin:' 20vh auto ',width:'80%'/**background:'blue',height:'100vh' */}}>
      {childern}
    </main>
  )
}

export default Main

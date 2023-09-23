import axios from "axios";

const fetchData=axios.create({
baseURL:'http://localhost:3000/todos'
})

const API={
    get:(url:string)=>{

       return  fetchData.get(url)

    },
    post:(url:string,data:any)=>{
        return  fetchData.post(url,data)

    },
    put:(url:string,data:any)=>{
        return  fetchData.put(url,data)

    },
    delete:(url:string)=>{
        return  fetchData.delete(url)
    }
}
export default API
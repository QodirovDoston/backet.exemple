// import axios from "axios"
// import React, { useEffect, useState } from "react"
// function Get() {
//     const [data,setData] = useState([])
//     const getData =()=>{
//         axios.get('https://jsonplaceholder.typicode.com/users')
//         .then(res => setData(res.data))
//     }
//     useEffect(()=>{
//         getData()
//     },[])
//   return (
//     <>
//       {data.map(e => {
//         return (
//             <h1>{e.name}</h1>
//         )
//       })}
//     </>
//   )
// }
// export default Get;
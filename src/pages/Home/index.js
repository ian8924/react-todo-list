import { useEffect, useState } from "react";
import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

const Home = () => {
  const [data, setData] = useState([]);

//   useEffect(()=>{
//       // 綁定事件
//       if(data.length!==0){
//         window.alert('新增成功')
//       }
//       return () => {
//         // 取消綁定
//       }
//   },[data])  


    useEffect(()=>{
        fetch("http://localhost:3003/posts/1")
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }, [])

  return (
    <div className="app">
      <Edit add={ setData } />
      <List listData={ data } deleteData={ setData }/>
    </div>
  );
};

export default Home;

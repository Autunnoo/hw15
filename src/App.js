import React from 'react';

import Post from './components/post'


const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";

const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";


function App() {

  return (
    <Post author={{
      name: "Anakin skywalker",
      photo: ANAKIN_IMAGE,
      nickname: "@dart_vader"
   }}
   content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
   image={RAY_IMAGE}
   date={"26 февр."}
    />
  )

}




















// const author = {{}
//   name: ,
//   photo: ,
//   nickname: ,
// }
//   content=''
//   image={}
//   date={}
// }


// function App() {
  
//   return (
//     <Post 
    


//     />
//   )


// }







// //2
// const studenList = [

//   {
//     name: 'Ivan',
//     tasks: 12
//   },
//   {
//     name: 'Maria',
//     tasks: 12
//   },
//   {
//     name: 'Nazar',
//     tasks: 13
//   }

// ];

// //1
// function App(){
//   return (
//       <div>
//           { studenList.map(student => <Student {...student}/>) }




        
//           <Student name={'Ivan'} tasks={12}/>
//           <Student name={'Maria'} tasks={12}/>
//           <Student name={'Nazar'} tasks={13}/>
//       </div>
//   )
// }


export default App;

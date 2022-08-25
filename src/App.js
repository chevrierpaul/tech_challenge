import { useState } from 'react';

import './App.css';
import Header from './components/header';
import Form from './components/form';
import MemberList from './components/memberList';
import Footer from './components/footer';




function App() {

  const [member, setMember] = useState ([])

  const addMember = (text) => {

    let id = 1;
    if(member.length >0){
      id = member[0].id + 1
    }

    const newMember={
      text:text,
      id:id,
      key:id
    }

    setMember(() => [newMember, ...member])
  }

  const handleDelete = (id) => {
   const newMember = member.filter((el) => el.id != id )
   setMember(newMember, ...member)
  }

  const element = member.map((el) => (
    <MemberList
    text={el.text}
    id={el.id}
    key={el.key}
    member={el}
    handleDelete = {handleDelete}
     />
  ))
  

  return (
    <div className="App">
      <Header />
    <main>  
      <Form addMember={addMember} />
      {element}
      {/* <MemberList /> */}
    </main>
      <Footer />

    </div>
  );
}

export default App;

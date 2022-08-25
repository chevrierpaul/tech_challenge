import React from "react"
import { useState, useRef } from "react"

export default function Form(props) {

    const [memberList, setMemberList] = useState() 
    
    const form = useRef(null);
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        props.addMember(memberList)
        form.current.reset();
    }

 return(
     <div>
      <h2>Ajouter un(e) Argonaute</h2>
         <form ref={form} onSubmit={handleSubmit} class="new-member-form">
                  <label for="name">Nom de l&apos;Argonaute</label>
                  <input 
                  onChange={(e) => setMemberList(e.target.value)}
                  id="name" 
                  name="name" 
                  type="text" 
                  placeholder="Charalampos" />
                  <button 
                  className="formButton"
                  type="submit">Envoyer</button>
         </form>
         <h2>Membres de l'équipage</h2>
     </div>
    )
}
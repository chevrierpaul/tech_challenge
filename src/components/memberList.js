export default function MemberList(props){
    return(
      <div >
         <section className="memberlist" > 
         <div >
           <h4>
            {props.text} 
            </h4>
           <button 
           className="memberButton"
           onClick={() => props.handleDelete(props.id)}>Supprimer</button> 
         
         </div>
         </section>
        </div>
    )
}
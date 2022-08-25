export default function MemberList(props){
    return(
      <div>
         {/* <section class="member-list"> </section>*/}
         <div className="memberlist">
          <h4>{props.text} </h4>
           <button 
           className="memberButton"
           onClick={() => props.handleDelete(props.id)}>Supprimer</button> 
         
         </div>
        </div>
    )
}
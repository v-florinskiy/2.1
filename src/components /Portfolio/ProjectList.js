import React from "react";





const ProjectList = ({projects}) => {
  
  
console.log(projects)
 return (
    <div className="cards-wrapper">
      {projects && projects.map((p,indx) => (
         <div key={indx} className="card All" className={p.category}  > <img src={p.img} /></div>
         )
      )}
    </div>
  );
  
}

export default ProjectList;

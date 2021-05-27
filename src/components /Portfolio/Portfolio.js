import React, { Component } from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: ["All", "Websites", "Flayers", "Business Cards"],
      selected: "All",
      projects: projectsToState()
     
    };
  }
  
  projectsToState = () =>  (
    [
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
      category: "Business Cards",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
      category: "Websites",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
      category: "Websites",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
      category: "Websites",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
      category: "Business Cards",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
      category: "Websites",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
      category: "Websites",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
      category: "Business Cards",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
      category: "Websites",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
      category: "Flayers",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
      category: "Websites",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
      category: "Business Cards",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
      category: "Websites",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
      category: "Websites",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
      category: "Business Cards",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
      category: "Websites",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
      category: "Flayers",
    },
  ]

  )

  onSelectFilter = (e) => {
    const filter = e.target.textContent;
    //console.log(filter);
    this.setState({ selected: filter });
    //console.log(this.state.selected);
    //console.log(this.state.projects.category)

    const projects  = this.state.projects;
    //console.log(projects)
    //console.log(projects)

    // this.state.projects.forEach( p => console.log(p.category)
    //)
    /*const filteredProjects = this.state.projects.filter(p => p.category === filter);
   console.log(filteredProjects)
   filteredProjects.forEach(p => {
//console.log(p)
     p.classList.add('show')
   });
*/

    if (filter !== "All") {
      const filteredProjects = this.state.projects.filter(
        (p) => p.category === filter);
      this.setState({ projects: filteredProjects });

    } else {

    }
      this.setState({ projects: this.state.projects });
    


  };

  render() {
    return (
      <>
        <Toolbar
          filters={this.state.filters}
          selected={this.state.selected}
          changeFilter={this.changeFilter}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList
          /*filteredItems={filteredItems} */ selected={this.state.selected}
          projects={this.state.projects}
        />
      </>
    );
  }
}

export default Portfolio;

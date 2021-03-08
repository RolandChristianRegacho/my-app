import React from 'react'
import ReactDOM from 'react-dom'
import About from './about';
import Experience from './experience';
import Skills from './skills';
import Contact from './contact';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      about: "inactive",
      experience: "inactive",
      skills: "inactive",
      contact: "inactive",
      page: "non"
    }
  }

  clearState = () => {
    this.setState({
      about: "inactive",
      experience: "inactive",
      skills: "inactive",
      contact: "inactive"
    })
  }

  changeStatus = (buttonName) => {
    this.clearState()
    if(buttonName == "a"){
      this.setState({
        about: "active",
        page: "about"
      })
    }
    else if(buttonName == "e"){
      this.setState({
        experience: "active",
        page: "experience"
      })
    }
    else if(buttonName == "s"){
      this.setState({
        skills: "active",
        page: "skills"
      })
    }
    else{
      this.setState({
        contact: "active",
        page: "contact"
      })
    }
    console.log(this.state.page)
  }

  render() {
    const abt = "a"
    const exp = "e"
    const skl = "s"
    const cnt = "c"
    const pageOpen = this.state.page

    let pageContent

    if(pageOpen == "non"){
      pageContent = ""
    }
    else if(pageOpen == "about"){
      pageContent = <About />
    }
    else if(pageOpen == "experience"){
      pageContent = <Experience />
    }
    else if(pageOpen == "skills"){
      pageContent = <Skills />
    }
    else{
      pageContent = <Contact />
    }

    return (
      <div>
        <div className = "bluebox">
          <div className = "circleBase type1">
          </div>
          <div className = "bluebox-buttons">
            <button to = "/About" onClick = {() => this.changeStatus(abt)} className = {this.state.about} >ABOUT</button>
            <button onClick = {() => this.changeStatus(exp)} className = {this.state.experience} >EXPERIENCE</button>
            <button onClick = {() => this.changeStatus(skl)} className = {this.state.skills} >SKILLS</button>
            <button onClick = {() => this.changeStatus(cnt)} className = {this.state.contact} >CONTACT</button>
          </div>
        </div>
        <div className = "my-form">
          {pageContent}
        </div>
      </div>
    )
  }
}

export default NavBar
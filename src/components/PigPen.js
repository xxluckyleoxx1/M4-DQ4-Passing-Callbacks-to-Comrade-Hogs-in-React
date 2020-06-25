import React from "react"
import Pig from "./Pig.js"
import TroubleMaker from "./TroubleMaker.js"
import exclaim from '../assets/exclaim.mp3';


const pigs = [
  "Hamlet",
  "Sally",
  "Cherub",
  "Jimmy"
]

export default class PigPen extends React.Component {
  constructor() {
    super()
    this.state = {
      environment: "docile"
    }
    this.audio = new Audio(exclaim)
  }

  relax = () => {
    this.setState({environment: 'docile'})
  }

  alterEnvironment = (vibe) => {
    if (vibe === "inhospitable"){
      this.audio.play()
    }
    this.setState({environment: vibe})
  }

  generateSheeple = () => {
    return pigs.map((name, idx) => (
      <Pig key={idx} id={name} name={name} environment={this.state.environment} />
    ))
  }

  render() {
    const sheeple = this.generateSheeple()
    return(
      <div id="pig-pen">
        {sheeple}
        <TroubleMaker environment={null} alterEnvironment={null} />
      </div>
    )
  }
}

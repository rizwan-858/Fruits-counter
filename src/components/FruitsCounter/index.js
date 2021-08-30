// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onClickMangoBtn = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onClickBananaBtn = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="bg">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="span"> {mangoCount} </span>mangoes
            <span className="span"> {bananaCount} </span> bananas
          </h1>
          <div className="image-container">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="Mango"
                className="mango-img"
              />
              <button
                type="button"
                className="button"
                onClick={this.onClickMangoBtn}
              >
                Eat Mango
              </button>
            </div>
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="Banana"
                className="banana-img"
              />
              <button
                type="button"
                className="button"
                onClick={this.onClickBananaBtn}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

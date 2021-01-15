
class App extends React.Component {
  state = {
    tardis: {
      name: 'Time and Relative Dimension in Space',
      caps: false,
    }
  }//below is function to change to caps and reverse
  changeIt = (text) => {
  if (this.state.tardis.caps) {
    this.setState({
      tardis: {
        name: text.toLowerCase(),
        caps: false
      }
    })
  } else {
    this.setState({
      tardis: {
        name: text.toUpperCase(),
        caps: true
      }
    })
  }
}
render(){

  return(
    <div id="appcomponent">
    <DivOne Prop1 = {this.state.tardis.name} Prop2={this.changeIt}/>
    </div>
  )
}
}

// renders the first div inside of the main app which will hold the other 2
class DivOne extends React.Component {
      render() {
        return (
          <div id="divone">
          <DivTwo Prop1 = {this.props.Prop1} Prop2={this.props.Prop2}/>
          </div>
        )
    }
}

class DivTwo extends React.Component {

    render() {
      // rendering div3 inside of div2 twice
        return (
          <div id="divtwo">
          <DivThree Prop1 = {this.props.Prop1} Prop2={this.props.Prop2}/>
          <DivThree Prop1 = {this.props.Prop1} Prop2={this.props.Prop2}/>

          </div>

        )
    }
}

class DivThree extends React.Component {

    render() {// inside box
        return (
          <div id="divthree">
              <h3 onClick={() => this.props.Prop2(this.props.Prop1)}> {this.props.Prop1}</h3>
          </div>
        )
    }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)

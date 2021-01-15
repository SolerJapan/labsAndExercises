
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
}//end of class App

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
      //according to rendering div3 inside of div2
        return (
          <div id="divtwo">
          <DivThree Prop1 = {this.props.Prop1} Prop2={this.props.Prop2}/>
          <DivThree Prop1 = {this.props.Prop1} Prop2={this.props.Prop2}/>

          </div>

        )
    }
}

class DivThree extends React.Component {

    render() {
      console.log("inside DivThree");
      console.log(this.props.Prop1);
        return (
          <div id="divthree">
              <h3 onClick={() => this.props.passingProp2(this.props.Prop1)}> {this.props.Prop1}</h3>
          </div>
        )
    }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)

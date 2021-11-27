import React from 'react';
import './App.css';
import Home from './Components/home';
import axios from 'axios';

class App extends React.Component {

  /*lifecycle method
  any component when it  create  pass in three stages:
   -mounting  [constructor - getDerivedStateFromProps - render - componentDidMount]
  -updite   [getDerivedStateFromProps-]
  -unmounting [componentWillUnmount]
  nots render() method is required and will always be called, the others are optional and will be called if you define them.
  */

  /***  constructor(): method  first thing called when the component is initiated,
   and it is the natural place to set up the initial state and other initial values***/

  /***** example */


  constructor(props) {
    super(props);
    this.state = {users:[],show:true};
    console.log('hi');
  }


   /***  getDerivedStateFromProps(): method is called second method throught mounting component and after updite component , use it
         when  the state object based on the initial props to updite state and declaration as
          static so you cant use (this) work insted of return object and 
         this object reperesent new state. ***/
  /***** example in home component  */
   



/******* componentDidMount(): method is called foruth method  after the component is rendered and use in get requests*******/
    /***** example */


    componentDidMount() {
      axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          this.setState({ users: res.data});
        })
    }

/*****  shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with
  the rendering or not and it  penfites in  less  perfarmance *****/

/** for example***/
shouldComponentUpdate() {
//return false if nextstate equal pervstate
//return true  if nextstate dont  equal pervstate
}





    /*****componentWillUnmount():  method is called when the component is about to be removed from the DOM. ********/
     /******** example go to home ********/
     deleteHome = () => {
      this.setState({show: false});
    }



/*********** getSnapshotBeforeUpdate()  method you have access to the props and state before the update,
          meaning that even after the update, you can check what the values were before the update.
          mening find out what the state object looked like before the update:*********/
          /**example****/

          getSnapshotBeforeUpdate(prevProps, prevState) { 
              console.log(prevState,prevProps);

          }


    
  
/***   render(): method is called third  method throught mounting component and  is required,
   and is the method that actually outputs the HTML to the DOM.
  ***/

  render() {
    let myhome;
    if (this.state.show) { myhome = <Home  name='mohmmad'/>;};
    return (
    <div>
          <h2>Hi, I am a hadeel! <br/> I will explain about lifecycle component</h2>
           {myhome}
           <button type="button" onClick={this.deleteHome}>Delete Home</button>

        
    </div>
    );
  }
}

export default App;

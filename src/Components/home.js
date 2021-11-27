import React from 'react'

 class Home extends React.Component {
    
    constructor(props) {
        super(props);
       this.state={name:'' };
      }
    /*** here state base on props so you can use getDerivedStateFromProps method */
    static getDerivedStateFromProps(props, state) {
        return {name: props.name};
      }
      /***  this  method called when this component delete ****/
      componentWillUnmount() {
        console.log("The component named Header is about to be unmounted.");
      }
    

 render(){
    return (
        <div>
            {this.state.name}
        </div>
    )
}}
export default Home;
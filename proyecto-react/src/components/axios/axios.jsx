import axios from "axios";
import React from "react";


class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
           users: [] ,
    }
    }
    
    componentDidMount() {
      axios.get('http://localhost:5000/empleados')
        .then(response => this.setState({ users: response.data }))
    }
    

    renderUsers() {
      const { users } = this.state
      return users.map( user => (
        <div key={user.id_usuario}> {user.nombre_usuario} {user.correo_usuario}</div>
      ))
    }
    
    render() {
      return(
        <div>{ this.renderUsers() }</div>
      )
    }
  }
  
  export default App
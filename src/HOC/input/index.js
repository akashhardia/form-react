import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'

class TextInput extends Component {
  state = {
    query: ''
  }

  handleChange = (event) => {
    const query = event.target.value
    this.setState({
      query
    })
  }

  render() {
    const { name, placeholder, required } = this.props

    return(
      <TextField
        value={ this.state.query }
        onChange={ this.handleChange }
        fullWidth={ true }
        name={ name }
        placeholder={ placeholder }
        required={ required }
        type='text'
      />
    )
  }  
}

export default TextInput
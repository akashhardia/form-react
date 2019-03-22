import React, { Component } from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import FormGroup from '@material-ui/core/FormGroup'

function CheckBoxOptions(props) {
  const { value, label, checked, onChange } = props

  console.log(props)
  return(
    <FormControlLabel
      control={
        <Checkbox 
          checked={ checked } 
          onChange={ onChange() } 
          value={ value } 
        />
      }
      label={ label }
    />
  )
}

class CheckBoxInput extends Component {
  constructor(props) {
    super(props)
    const values = props.options.map(option => option.value)
    const obj = {}
    values.map(value => {
      obj[value] = false
    })
    this.state = obj
  }

  handleChange = () => event => {
    this.setState({ [event.target.value]: event.target.checked });
  };

  render() {
    const { heading, options } = this.props
    
    return (
      <FormControl component='fieldset'>
        <FormLabel component='legend'>{ heading }</FormLabel>
        <FormGroup>
          {
            options.map((option, index) => (
              <CheckBoxOptions
                key={ index }
                value={ option.value }
                label={ option.label }
                checked={ this.state[option.value] }
                onChange={ this.handleChange }
              />
            ))
          }         
        </FormGroup>        
      </FormControl>
    )
  }  
}

export default CheckBoxInput
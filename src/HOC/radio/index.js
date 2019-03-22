import React, { Component } from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

function FormLabelContent(props) {
  
  return(
    <FormControlLabel 
      value={ props.value }
      label={ props.label }
      control={ <Radio /> }
    />
  )
}

class RadioInput extends Component {
  state = {
    value: 'female'
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    const { props } = this
    const { options, heading, name } = props

    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">{ heading }</FormLabel>
        <RadioGroup
          aria-label="Gender"
          name={ name }
          value={ this.state.value }
          onChange={ this.handleChange }
        >
          { 
            options.map((option, index) => (
              <FormLabelContent
                key={ index }
                value={ option.value }
                label={ option.label }
              />
            )) 
          }           
        </RadioGroup>
      </FormControl>
    )
  }  
}

export default RadioInput
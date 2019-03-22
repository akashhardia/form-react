import React, { Component } from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'

function OptionCreator(props) {
  const { value, label } = props
  return(
    <option value={ value }>{ label }</option>
  )
}

class DropDownInput extends Component {
  state = {
    age: ''
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value })
  };

  render() {
    const { heading, name,  options } = this.props

    return(
      <FormControl>
        <InputLabel>{ heading }</InputLabel>
        <Select
          native
          value={this.state.age}
          onChange={this.handleChange('age')}
          inputProps={{
            name
          }}
        >
          {
            options.map((option, index) => (
              <OptionCreator 
                key={ index }
                value={ option.value }
                label={ option.label }
              />
            ))
          }
        </Select>
      </FormControl>
    )
  }  
}

export default DropDownInput
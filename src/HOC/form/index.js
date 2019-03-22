import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextInput from '../input'
import RadioInput from '../radio'
import CheckBoxInput from '../checkbox'
import DropDownInput from '../dropdown'

class Form extends Component {

  componentCreator = (item) => {
    const { type } = item

    switch(type) {
      case 'TextField':
        console.log('inside case textfiled')
        return (
          <TextInput
            placeholder={ item.placeholder }
            name={ item.name }
            required={ true }
          />
        ) 
      case 'RadioButton':
        return (
          <RadioInput 
            heading={ item.heading }
            options={ item.options }
            name={ item.name }
          />
        )
      case 'CheckBox':
        return (
          <CheckBoxInput 
            heading={ item.heading }
            options={ item.options }
            name={ item.name }
          />
        )
      case 'DropDown':
        return(
          <DropDownInput
            heading={ item.heading }
            name={ item.name }
            options={ item.options }
          />
        )
      default: 
          console.log('defualt')
          return null
    }    
  }

  iterator = (items) => {
    console.log('items', items)
    const component = items.map((item, index) => (
      <div key={ index }>
        { this.componentCreator(item) }
      </div>
    ))
    return component
  }

  render() {
    const { props } = this
    const { formData, onSubmit } = props

    return(
      <form onSubmit={ onSubmit }>
        <Grid>
          { this.iterator(formData) }
        </Grid>
        <Button type="submit">
            Submit
        </Button>
      </form>      
    )
  }
}

export default Form
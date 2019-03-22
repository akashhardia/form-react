import React, { Component } from 'react'
import Form from '../HOC/form'

class FormContainer extends Component {

  handleSubmit = event => {
    event.preventDefault()
    console.log('form submitted')
    console.log(event.target)
    console.log('Your First Name is', event.target.firstName.value)
    // console.log(event.target.presentDays.value)
    // console.log(event.target.gender.value)
    console.log('Your Age is', event.target.age.value)
  }  

  render() {
    const formData = [
      {
        name: 'firstName',
        type: 'TextField',
        required: true,
        placeholder: 'FirstName'
      },
      {
        type: 'CheckBox',
        name: 'presentDays',
        heading: 'Present Days',
        options: [
          { label: 'Sunday', value: 'sunday' },
          { label: 'Monday', value: 'monday' },
          { label: 'Tuesday',value: 'tuesday' },
          { label: 'Wednesday', value: 'wednesday' },
          { label: 'Thursday', value: 'thursday' },
          { label: 'Friday', value: 'friday' },
          { label: 'Saturday', value: 'saturday' }
        ]
      },
      {
        type: 'RadioButton',
        heading: 'Gender',
        name: 'gender',
        options: [
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
          { label: 'Others', value: 'others' }
        ]
      },
      {
        type: 'DropDown',
        heading: 'Age',
        name: 'age',
        options: [
          { label: 'ten', value: 10 },
          { label: 'twenty', value: 20 },
          { label: 'thirty', value: 30 }          
        ]
      }
    ]

    return(
      <Form 
        formData={ formData }
        onSubmit={ this.handleSubmit }
      />
    )
  }
}

export default FormContainer
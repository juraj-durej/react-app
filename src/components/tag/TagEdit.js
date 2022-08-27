import React from 'react'
import {Edit, PasswordInput, SimpleForm, TextInput} from 'react-admin'

const TagEdit = (props) => {
  return (
    <Edit title='Edit Tag' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='title' />
        <TextInput source='tag' />
      </SimpleForm>
    </Edit>
  )
}

export default TagEdit

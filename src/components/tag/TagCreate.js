import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const TagCreate = (props) => {
  return (
    <Create title='Create a Tag' {...props}>
      <SimpleForm>
        <TextInput source='title' />
        <TextInput source='tag' />
      </SimpleForm>
    </Create>
  )
}

export default TagCreate

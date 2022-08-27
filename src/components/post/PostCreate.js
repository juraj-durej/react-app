import React from 'react'
import {
    Create,
    SimpleForm,
    TextInput,
    ReferenceArrayInput,
    SelectArrayInput,
    ReferenceInput,
    SelectInput
} from 'react-admin'

const PostCreate = (props) => {
  return (
    <Create title='Create a Post' {...props}>
      <SimpleForm>
          <TextInput source='title' />
          <TextInput multiline source='content' />
          <ReferenceArrayInput label='Tags'
                               source="tags"
                               reference="tags"
                               parse={(value) => value && value.map((v) => ({ id: v }))}
                               format={(value) => value && value.map((v) => v.id)}
          >
              <SelectArrayInput optionText="title" />
          </ReferenceArrayInput>

          <ReferenceInput label="Author" source="author.id" reference="users">
              <SelectInput optionText="name" />
          </ReferenceInput>
      </SimpleForm>
    </Create>
  )
}

export default PostCreate

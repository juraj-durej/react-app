import React from 'react'
import {
    Edit,
    SimpleForm,
    TextInput,
    DateInput,
    ReferenceArrayInput,
    SelectArrayInput,
    SelectInput,
    ReferenceInput
} from 'react-admin'

const PostEdit = (props) => {
  return (
    <Edit title='Edit Post' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='title' />
        <TextInput multiline source='content' />
        <DateInput disabled label='Created at' source='created' />
        <ReferenceArrayInput
            label='Tags'
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
    </Edit>
  )
}

export default PostEdit

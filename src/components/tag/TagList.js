import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton, DateField,
} from 'react-admin'

const TagList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='title' />
        <TextField source='tag' />
        <DateField source='created' />
        <EditButton basePath='/tags' />
        <DeleteButton basePath='/tags' />
      </Datagrid>
    </List>
  )
}

export default TagList

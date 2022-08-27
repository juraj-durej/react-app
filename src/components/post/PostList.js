import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton, ReferenceField, SingleFieldList, ChipField, ArrayField,
} from 'react-admin'

const PostList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='title' />

        <ReferenceField label="Author" source="id" reference="users" link="edit">
          <TextField source="name" />
        </ReferenceField>

        <ArrayField source="tags">
          <SingleFieldList>
            <ChipField source="title" />
          </SingleFieldList>
        </ArrayField>

        <DateField source='created' />
        <EditButton basePath='/posts' />
        <DeleteButton basePath='/posts' />
      </Datagrid>
    </List>
  )
}

export default PostList

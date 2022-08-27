import React from 'react'
import {Admin, Resource} from 'react-admin'
import BookIcon from '@material-ui/icons/Book';
import GroupIcon from '@material-ui/icons/Group';
import LocalOfferIcon from '@material-ui/icons/LocalOffer'

import restProvider from 'ra-data-simple-rest'
import PostList from './components/post/PostList'
import PostCreate from './components/post/PostCreate'
import PostEdit from './components/post/PostEdit'
import UserList from './components/user/UserList'
import UserCreate from './components/user/UserCreate'
import UserEdit from './components/user/UserEdit'
import TagList from "./components/tag/TagList";
import TagCreate from "./components/tag/TagCreate";
import TagEdit from "./components/tag/TagEdit";

function App() {

  const apiUrl = process.env.REACT_APP_BACKEND_URL ? process.env.REACT_APP_BACKEND_URL : "http://localhost:8080/api";

  return (
    <Admin
        dataProvider={restProvider(apiUrl)}
    >

      <Resource
        name='posts'
        icon={BookIcon}
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      />

      <Resource
          name='tags'
          icon={LocalOfferIcon}
          list={TagList}
          create={TagCreate}
          edit={TagEdit}
      />

      <Resource
        name='users'
        icon={GroupIcon}
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
    </Admin>
  )
}

export default App

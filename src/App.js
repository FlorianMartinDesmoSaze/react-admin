import * as React from "react";
import { Admin, Resource/*, ListGuesser, EditGuesser*/ } from 'react-admin';
import { PostList, PostEdit, PostCreat } from './posts';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "./users";
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import Dashboard from './Dashboard'
import authProvider from './authProvider';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    {/* <Resource name="posts" list={ListGuesser} /> */}
    {/* <Resource name="edit" list={PostEdit} edit={EditGuesser} /> */}
    {/* <Resource name="posts" list={PostList} edit={EditGuesser} /> */}
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreat} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} recordRepresentation="name" />
  </Admin>
);

export default App;

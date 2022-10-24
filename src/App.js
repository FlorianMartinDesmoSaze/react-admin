import * as React from "react";
import { Admin, Resource/*, ListGuesser*/, EditGuesser } from 'react-admin';
import { PostList } from './posts';
// import { PostEdit } from "./posts";
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "./users";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dataProvider={dataProvider}>
    {/* <Resource name="posts" list={ListGuesser} /> */}
    {/* <Resource name="edit" list={PostEdit} edit={EditGuesser} /> */}
    <Resource name="posts" list={PostList} edit={EditGuesser} />
    <Resource name="users" list={UserList} recordRepresentation="name" />
  </Admin>
);

export default App;

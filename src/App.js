import * as React from "react";
import { Admin, Resource/*, ListGuesser*/ } from 'react-admin';
import { PostList } from './posts'
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "./users";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dataProvider={dataProvider}>
    {/* <Resource name="posts" list={ListGuesser} /> */}
    <Resource name="posts" list={PostList} />
    <Resource name="users" list={UserList} recordRepresentation="name" />
  </Admin>
);

export default App;

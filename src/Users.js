import * as React from "react";
import { Datagrid, EmailField, List, TextField, UrlField } from 'react-admin';
import MyUrlField from "./MyUrlField";

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            {/* <TextField source="username" /> */}
            <EmailField source="email" />
            {/* <TextField source="address.street" /> */}
            <TextField source="phone" />
            {/* <UrlField source="website" /> */}
            <MyUrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);
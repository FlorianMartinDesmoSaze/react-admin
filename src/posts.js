import * as React from "react";
import { useRecordContext } from "react-admin";

import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    TextInput,
    Create
} from "react-admin";

const PostTitle = () => {
    const record = useRecordContext();
    return <span>{record ? `"${record.title}"` : ''}</span>
}

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />
]

export const PostList = props => (
    <List filters={postFilters}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="userId" reference="users" />
            <TextField source="title" />
            {/* <TextField source="body" /> */}
            <EditButton />
        </Datagrid>
    </List>
);

export const PostEdit = props => (
    <Edit title={<PostTitle />}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreat = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);
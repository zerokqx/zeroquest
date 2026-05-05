import {
  BooleanInput,
  Edit,
  NumberInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from 'react-admin';

export const UserEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" disabled />

        <NumberInput source="telegramId" />
        <TextInput source="login" />
        <BooleanInput source="isBanned" />
        <SelectInput
          source="role"
          choices={[
            { id: 'USER', name: 'USER' },
            { id: 'ADMIN', name: 'ADMIN' },
          ]}
        />
      </SimpleForm>
    </Edit>
  );
};

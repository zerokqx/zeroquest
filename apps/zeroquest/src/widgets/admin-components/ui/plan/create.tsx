import {
  BooleanInput,
  Create,
  NumberInput,
  SimpleForm,
  TextInput,
} from 'react-admin';

export const PlanCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <BooleanInput source="isSpecial" defaultValue={false} />
      <NumberInput source="discountedPercent" />
      <NumberInput source="inboundId" />
      <TextInput source="features" />
      <NumberInput source="price"  />
      <TextInput source='description'/>
      <NumberInput source='totalGb'/>
      <NumberInput source='duratationDays'/>
    </SimpleForm>
  </Create>
);

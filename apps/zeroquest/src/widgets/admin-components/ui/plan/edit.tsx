
import {
  BooleanInput,
  Edit,
  NumberInput,
  SimpleForm,
  TextInput,
} from 'react-admin';

export const PlanEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <BooleanInput source="isSpecial"  />
      <NumberInput source="discountedPercent" />
      <NumberInput source="inboundId" />
      <TextInput source="features" />
      <NumberInput source="price"  />
      <TextInput source='description'/>
      <NumberInput source='totalGb'/>
      <NumberInput source='duratationDays'/>
    </SimpleForm>
  </Edit>
);

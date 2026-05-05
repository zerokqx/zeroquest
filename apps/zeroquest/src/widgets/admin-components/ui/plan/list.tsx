import { BooleanField, DataTable, List } from 'react-admin';

export const PlanList = () => (
  <List>
    <DataTable>
      <DataTable.Col source="id" />
      <DataTable.Col source="name" />
      <DataTable.Col source="isSpecial">
        <BooleanField source="isSpecial" />
      </DataTable.Col>
      <DataTable.Col source="discountedPercent" />
      <DataTable.Col source="features" />
      <DataTable.NumberCol source="price" label={'Price (₽)'} />
      <DataTable.Col source="description" />
      <DataTable.NumberCol source="totalGb" />
      <DataTable.NumberCol source="duratationDays" />
    </DataTable>
  </List>
);

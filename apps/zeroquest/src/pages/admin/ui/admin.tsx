import { Admin, ListGuesser, Resource } from 'react-admin';
import { dataProvider } from '../model';
import { PlanCreate, PlanEdit, PlanList, UserEdit, UserList } from '@/widgets/admin-components';
export const AdminPage = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UserList}  edit={UserEdit}/>
      <Resource name="wallets" list={ListGuesser} />
      <Resource name="plans" list={PlanList} create={PlanCreate} edit={PlanEdit} />
    </Admin>
  );
};

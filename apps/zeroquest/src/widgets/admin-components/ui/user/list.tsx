
import { BooleanField, DataTable, DateField, List, ReferenceField } from 'react-admin';

export const UserList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="login" />
            <DataTable.Col source="telegramId">
                <ReferenceField source="telegramId" reference="telegrams" />
            </DataTable.Col>
            <DataTable.Col source="isBanned">
                <BooleanField source="isBanned" />
            </DataTable.Col>
            <DataTable.Col source="role" />
            <DataTable.Col source="createdAt">
                <DateField source="createdAt" />
            </DataTable.Col>
            <DataTable.Col source="updatedAt">
                <DateField source="updatedAt" />
            </DataTable.Col>
            <DataTable.Col source="canComment">
                <BooleanField source="canComment" />
            </DataTable.Col>
            <DataTable.Col source="wallet.balance" />
        </DataTable>
    </List>
);

import { Text, Paper } from '@mantine/core';
import { useLoaderData } from 'react-router-dom';
function UserList() {
    const data = useLoaderData();
    console.log(data);
    return (
        <>
            <Paper shadow="xl" radius="xl" withBorder p="xl">
                {data.map((user: any) => (
                    <div key={user.id}>
                        <Text>{user.name}</Text>                        
                    </div>
                ))}
            </Paper>
        </>
    );
}

export default UserList;

export async function loader() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users;
}
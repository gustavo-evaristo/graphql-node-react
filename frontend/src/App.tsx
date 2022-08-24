import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { AddUserComponent } from './components/AddUser'

interface User {
  name: string;
}

export const GET_USERS = gql`
  query {
    users {
      id
      name
    }

  }
`

function App() {
  const { data } = useQuery(GET_USERS);
  
  return (
    <>
      {data?.users?.map((user: User, indx: number)  => (
        <ul key={indx}>{user?.name}</ul>
      ))}

      <AddUserComponent />
    </>
  )
}

export default App

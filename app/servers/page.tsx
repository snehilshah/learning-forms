import { User } from '@/types/user'

export default async function userServer() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const res = await fetch('https://jsonplaceholder.typicode.com/users')

  const users: User[] = await res.json()

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} <br />
          {user.email}
          <br />
          <br />
        </li>
      ))}
    </ul>
  )
}

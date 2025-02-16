'use client'
import { useState, useEffect } from 'react'

import { User } from '@/types/user'

export default function userClient() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        setUsers(data)
      } catch (e) {
        e instanceof Error ? setError(e.message) : console.log(e)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) return <div>Loading</div>

  if (error) return <div>{error}</div>

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

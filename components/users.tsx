'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export function Users() {
  const { register, handleSubmit } = useForm()
  const [input, setInput] = useState('hello snehil')
  return (
    <div>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value)
        }}
      />
    </div>
  )
}

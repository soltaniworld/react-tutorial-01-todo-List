import React from 'react'

export default function Todo( {todo}) {
  return (
    <div>
      <label>
        <input type = "checkbox" defaultChecked= {todo.complete} />
        <span>{todo.name}</span>
      </label>
    </div>
  )
}

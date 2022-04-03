import React from 'react'

export default function childComponent({helloMessage}) {
  return (
    <div>
    <h2>Child components</h2>
      <p>{helloMessage}</p>
    </div>
  )
}

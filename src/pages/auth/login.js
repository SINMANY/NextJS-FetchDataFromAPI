import React from 'react'

export default function login() {
  return (
    <div>login</div>
  )
}

login.getLayout = function getLayout(page){
    return (
        <>
            <main>
                {page}
            </main>
        </>
    )
}
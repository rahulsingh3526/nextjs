import React from 'react'

export default function Navbar({children}) {
  return (
    <>
    <nav>
           <ul>home</ul>
           <ul>about</ul>
           <ul>team</ul>
    </nav>
           {children}
    </>
  )
}

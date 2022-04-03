import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  
 
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contact">Contact</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/blog">Blog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/admin">Admin</a>
      </li>
      
    </ul>
  </div>
</nav>
  )
}

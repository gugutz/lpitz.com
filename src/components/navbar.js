import React from 'react'
import Link from 'gatsby-link'
// import '../layouts/index.scss'

// array of links for the sidebar,
// temporary fix
const links = [
  {name: 'inicio', href: '/', text: 'Inicio'},
  {name: 'instagram', href: '/about', text: 'Sobre a empresa'},
  {name: 'tumblr', href: '/contact', text: 'Fale Conosco'}
]

const Navbar = () => (
  <nav className="navbar is-fluid is-pulled-right is-dark">
    <div className="hero-nav-b navbar-menu">
      <div className="navbar-end">
        {links.map(({name, href, text}) => (
          <Link key={name} to={href} className="navbar-item">
            {name}
          </Link>
        ))}

        {/* <div className="navbar-item has-dropdown is-hoverable"> */}
        {/*   <a className="navbar-link">Dicas</a> */}
        {/*   <div className="navbar-dropdown"> */}
        {/*     <a className="navbar-item">Como limpar suas persianas?</a> */}
        {/*     <a className="navbar-item">Como dar manutenção nas esquadrias?</a> */}
        {/*     <a className="navbar-item">Components</a> */}
        {/*     <hr className="navbar-divider" /> */}
        {/*     <div className="navbar-item">Version 0.7.1</div> */}
        {/*   </div> */}
        {/* </div> */}
      </div>
    </div>
  </nav>
)

export default Navbar

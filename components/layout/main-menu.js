import React from 'react'
import Link from 'next/link'

const items = [{
  href: '/',
  title: 'Reporte Oficial'
}, {
  href: '/reporte-usuarios',
  title: 'Reporte Usuarios'
}]

const isItemActive = (href, url) => href === url ? 'active' : ''

const MainMenu = ({ url }) => (
  <nav>
    {
      items.map(item => (
        <Link href={item.href} key={item.href}>
          <a className={isItemActive(item.href, url)}>{item.title}</a>
        </Link>))
    }
    <style jsx>{`
      nav {
        padding-left: 30px;
        margin-top: 10px;
      }

      a {
        background-color: #4b4f5c;
        color: white;
        display: inline-block;
        height: 30px;
        margin: 0 3px;
        padding: 5px 10px;
        text-decoration: none;
        line-height: 30px;
        border-radius: 3px 3px 0 0;
      }

      a.active {
        background: white;
        color: #555;
      }
    `}
    </style>
  </nav>
)

export default MainMenu;

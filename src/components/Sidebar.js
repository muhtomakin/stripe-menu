import React from 'react'
import { useGlobalContext } from './Context'
import sublinks from './Data'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div className={`${isSidebarOpen ? 'sidebarWrapper show' : 'sidebarWrapper'}`}>
      <aside className='sidebar'>
        <div className='sidebarLinks'>
          {sublinks.map((item, index) => {
            const { links, page } = item
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className='sidebarSublinks'>
                  {links.map((link, index) => {
                    const { url, icon, label } = link
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
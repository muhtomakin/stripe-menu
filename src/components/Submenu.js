import React, { useState, useRef, useEffect } from 'react';

import { useGlobalContext } from './Context'

const Submenu = () => {

    const {
        isSubmenuOpen,
        page: { page, links },
        location,
      } = useGlobalContext()

    const container = useRef(null);
    const [columns, setColumns] = useState('col-2');

    useEffect(() => {
        setColumns('col-2')
        const submenu = container.current
        const { center, bottom } = location
        submenu.style.left = `${center}px`
        submenu.style.top = `${bottom}px`
        console.log(links)
        if (links.length === 3) {
          setColumns('col-3')
        }
        if (links.length > 3) {
          setColumns('col-4')
        }
      }, [page, location, links])

    return (
        <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
            <section>
                <h4>{page}</h4>
                <div className={`submenuCenter`}>
                    {links.map((link, index) => {
                        return (
                            <a key={link.index} href={link.url}>
                                {link.icon}
                                {link.label}
                            </a>
                        );
                    })}
                </div>
            </section>
        </aside>
    );
}

export default Submenu;
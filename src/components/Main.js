import React from 'react';
import { useGlobalContext } from './Context';

const Main = () => {

    const { closeSubmenu } = useGlobalContext();

    return (       
        <section className='hero' onMouseOver={closeSubmenu}>
            <div className='heroCenter'>
                <article className='heroInfo'>
                    <h1>Payments infrastructure
                        <br />for the internet
                    </h1>
                    <p>
                        Millions of companies of all sizes—from startups to Fortune 500s—use
                        Stripe’s software and APIs to accept payments, send payouts, and
                        manage their businesses online.
                    </p>
                    <button className='btn'>start now</button>
                </article>
                <article className='heroImages'>
                    <img src='https://react-projects-13-stripe-submenus.netlify.app/static/media/phone.58d7e3d6.svg' alt='image' className='phoneImg'/>
                </article>
            </div>
        </section>
    );
}

export default Main;

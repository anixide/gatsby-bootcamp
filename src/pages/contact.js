import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

const contact = () => {
    return (
        <div>
            <Header />
            <h1>Contact Us</h1>
            <ul>
                <li>Phone number: 555-555-555</li>
                <li>Email: gatsby@gmail.com</li>
                <li>twitter : <a href="https://www.twitter.com/g0thman">@G0thman</a></li>
                <Footer />
            </ul>
        </div>
    )
}

export default contact
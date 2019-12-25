import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'

const about = () => {
    return(
        <div>
            <Header />
            <h1>About us</h1>
            <h3>This is a blog about bleeding edge technologies.</h3>
            <Link to="/contact">Contact Us</Link>
            <Footer />
        </div>
    )
}

export default about
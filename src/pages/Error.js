import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

const Error = () => {
    return (
        <Hero>
            <Banner title='404' subtitle='page not found'></Banner>
            <Link to="/" className="btn-primary center">
                return home</Link>
        </Hero>
    )
}

export default Error

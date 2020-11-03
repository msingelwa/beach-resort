import React, { Component } from 'react'
import Title from '../components/Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'Free Cocktails',
                info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy'
            },
            {
                icon: <FaHiking />,
                title: 'Free Hiking',
                info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy'
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free Rides',
                info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy'
            },
            {
                icon: <FaBeer />,
                title: 'Strongest Free Beer',
                info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services">Lore</Title>

                <div className="services-center">
                    {
                        this.state.services.map((item, index) => {
                            return (
                                <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                                </article>
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}
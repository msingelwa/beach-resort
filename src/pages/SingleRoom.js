import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyleHero from "../components/StyleHero";

// import StyledHero from "../components/StyledHero";
export default class SingleRoom extends Component {
    constructor (props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg: defaultBcg
        };
    }
    static contextType = RoomContext;

    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);

        if (!room) {
            return (
                <div className="error">
                    <h3> no such room could be found...</h3>
                    <Link to="/rooms" className="btn-primary">
                        back to rooms
                        </Link>
                </div>
            );
        }
        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room
        
        return (
            <>
                <StyleHero img={images[0]}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">
                            back to rooms
                    </Link>
                    </Banner>
                </StyleHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {
                            images.map((item, index) => {
                                return <img key={index} src={item} alt={name} />
                            })
                        }
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price : R{price}</h6>
                            <h6>size : R{size} SQFT</h6>
                            <h5>Max capacity : {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h5>
                            <h6>
                                {pets ? "allowed" : "no pets at all"}
                            </h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>Extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                </section>
            </>
        );
    }
}
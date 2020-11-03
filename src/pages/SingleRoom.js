import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import defaultBcg from '../images/room-1.jpeg'

export default class SingleRoom extends Component {
    constructor (props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = RoomContext;

    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);

        if (!room) {
            return <div className="error">
                <h3>no such room could be found...</h3>
                <Link to="/rooms" className="btn-primary">
                    back to rooms
                </Link>
            </div>
        }
        return (
            <div>Hello from SingleRoom{room.name}</div>
        )
    }
}
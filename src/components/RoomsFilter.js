import React, { useContext } from 'react'
import { RoomContext } from '../context'
import Title from './Title';


const getAllUniqueVals = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({ rooms }) {
    const context = useContext(RoomContext);
    const
        {
            handleChange,
            type,
            capacity,
            price,
            minPrice,
            maxPrice,
            minSize,
            maxSize,
            breakfast,
            pets
        } = context;
    
    //get unique types
    let types = getAllUniqueVals(rooms, 'type');
    types = ['all', ...types]
    types = types.map((item, index) => { return <option value={item} key={index}>{item}</option> })

    let people = getAllUniqueVals(rooms, 'capacity');
    people = people.map((person, index) => { return <option value={person} key={index}>{person}</option>})

    return (
        <section className="filter-container">
            <Title title='search rooms'></Title>
            <form className="filter-form">
                {/*select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/*end select type */}

                {/*guest */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/*end guests */}

                {/*room price */}
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} value={price} onChange={handleChange} className="form-control">
                        
                    </input>
                </div>
                {/*end room price */}

                {/*room size */}
                <div className="form-group">
                    <label htmlFor="size">Room Size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"/>
                    </div>
                </div>
                {/*end room size */}

                {/*breakfast */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                </div>
                {/*end breakfast */}

                {/*pets */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/*end pets */}
            </form>
        </section>
    )
}

import React from 'react'
import { withRoomConsumer } from '../context'
import Loading from './Loading'
import RoomFilter from './RoomsFilter'
import RoomList from './RoomsList'



function RoomsContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <>
            <RoomFilter rooms={rooms}></RoomFilter>
            <RoomList rooms={sortedRooms}></RoomList>
        </>
    )

}

export default withRoomConsumer(RoomsContainer)
// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const { loading, sortedRooms, rooms } = value
//                     if (loading) {
//                         return <Loading></Loading>
//                     }
//                     return (
//                         <div>
//                             Hello from Rooms Container
//                             <RoomFilter rooms={rooms}></RoomFilter>
//                             <RoomList rooms={sortedRooms}></RoomList>
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
//     )
// }

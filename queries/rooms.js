const db = require("../db/dbConfig");

const getAllRooms = async () => {
    try {
        const allRooms = await db.any("SELECT * FROM rooms");
        return allRooms
    } catch(err) {
        console.error('Error fetching all rooms:', err);
        return err;
    }
}

const getOneRoom = async (id) => {
    try {
        const oneRoom = await db.one("SELECT * FROM rooms WHERE id=$1", id);
        return oneRoom;
    } catch(err) {
        console.error('Error fetching one room:', err);
        return err;
    }

}

const updateRoom = async (id, room) => {
    try {
        const { name, capacity, floor, amenities, description } = room;
        const updatedRoom = await db.one("UPDATE rooms SET name =$1, capacity=$2, floor=$3, amenities=$4, description=$5 WHERE id=$6 RETURNING * ", [name, capacity, floor, amenities, description, id]);
        return updatedRoom
    } catch(err) {
        console.error('Error updating room:', err);
        return err;
    }
};


module.exports = {
    getAllRooms,
    getOneRoom,
    updateRoom
}
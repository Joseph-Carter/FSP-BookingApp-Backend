const db = require("../db/dbConfig");

const getAllEventSpaces = async () => {
    try {
        const allEventSpaces = await db.any("SELECT * FROM eventspaces");
        return allEventSpaces
    } catch(err) {
        console.error('Error fetching all event spaces:', err);
        return err;
    }
}

const getOneEventSpace = async (id) => {
    try {
        const oneEventSpace = await db.one("SELECT * FROM eventspaces WHERE id=$1", id);
        return oneEventSpace;
    } catch(err) {
        console.error('Error fetching one event spaces:', err);
        return err;
    }

};

const createEventSpace = async (eventSpace) => {
    const { space_name, capacity, location, image, description } = eventSpace;
    try {
        const newEventSpace = await db.one("INSERT INTO eventspaces (space_name, capacity, location, image, description) VALUES ($1, $2, $3, $4, $5) RETURNING *", [space_name, capacity, location, image, description]);
        return newEventSpace;
    } catch (error) {
        return error;
    }
  };

const updateEventSpace = async (id, eventSpace) => {
    try {
        const { space_name, capacity, location, image, description } = eventSpace;
        const updatedEventSpace = await db.one("UPDATE eventspaces SET space_name=$1, capacity=$2, location=$3, image=$4, description=$5  WHERE id=$6 RETURNING * ", [space_name, capacity, location, image, description, id]);
        return updatedEventSpace
    } catch(err) {
        console.error('Error updating Event Space:', err);
        return err;
    }
};

const deleteEventSpace = async (id, eventSpace) => {
    try {
        const deletedEventSpace = await db.one("DELETE FROM eventspaces WHERE id=$1 RETURNING *", id);
        return deletedEventSpace;
    } catch (error) {
        return error
    }
};


module.exports = {
    getAllEventSpaces,
    getOneEventSpace,
    createEventSpace,
    deleteEventSpace,
    updateEventSpace
}
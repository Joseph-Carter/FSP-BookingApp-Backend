const db = require("../db/dbConfig");

const getAllBookings = async () => {
    try {
        const allBookings = await db.any("SELECT * FROM bookings")
        return allBookings
    } catch (error) {
        console.error('Error fetching all bookings:', err);
        return err;
    }
}

const getOneBooking = async () => {
    try {
        const oneBooking = await db.one("SELECT * FROM bookings WHERE id=$1", id)
        return oneBooking
    } catch (error) {
        console.error('Error fetching one booking:', err);
        return err;
    }
}

const createBooking = async (booking) => {
    try {
        const newBooking = await db.one("INSERT INTO bookings (user_id, room_id, start_date, end_date, checkout, attendees, special_requirements) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *", [booking.user_id, booking.room_id, booking.start_date, booking.end_date, booking.checkout, booking.attendees, booking.special_requirements]);
        return newBooking
    } catch (error) {
        console.error('Error creating bookings:', err);
        return err;
    }
}

const updateBooking = async (id, booking) => {
    try {
        const { user_id, room_id, start_date, end_date, checkout, attendees, special_requirements } = booking;
        const updatedBooking = await db.one("UPDATE bookings SET user_id = $1, room_id = $2, start_date = $3, end_date = $4, checkout = $5, attendees = $6, special_requirements $7 WHERE id = $8 RETURNING *", [user_id, room_id, start_date, end_date, checkout, attendees, special_requirements, id]);
        return updatedBooking;
    } catch (error) {
        console.error('Error updating bookings:', error);
        throw error;
    }
};


const deleteBooking = async (id) => {
    try {
        const deletedBooking = await db.one("DELETE FROM bookings WHERE id = $1 RETURNING *", id);
        return deletedBooking        
    } catch (error) {
        console.error('Error deleting  bookings:', err);
        return err;
    }
}



module.exports = {
    getAllBookings,
    getOneBooking,
    createBooking,
    updateBooking,
    deleteBooking
}
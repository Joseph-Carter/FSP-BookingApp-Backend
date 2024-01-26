const express = require("express");
const bookings = express.Router();

const {
    getAllBookings,
    getOneBooking,
    createBooking,
    updateBooking,
    deleteBooking
}=  require("../queries/bookings");

bookings.get("/", async (req, res) => {
    try {
        const allBookings = await getAllBookings();
        if (allBookings.length)  {
            res.status(200).json({ success: true, payload: allBookings });
        } else {
            res.status(404).json({ success: false, error: "No bookings found" })
        }
    } catch(err) {
        res.status(500).json({ success: false, error: "Server Error -  failed to fetch bookings" });
    }
});

bookings.get("/:id", async (req, res) => {
    const [ id ] = req.params;
    try {
        const oneBooking = await getOneBooking(id);
        if (oneBooking) {
            res.status(200).json(oneBooking);
        } else {
            res.status(404).json({ error: "Booking not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

bookings.post("/", async (req, res) => {
    try {
        const createdBooking = await createBooking(req.body);
        res.status(201).json(createBooking);
    } catch (error) {
        res.status(400).json({ error: "Booking creation failed" });
    }
});

bookings.put("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const updatedBooking = await updateBooking(id, req.body);
        if (updatedBooking.id) {
            res.status(200).json(updateBooking);
        } else {
            res.status(404).json({ error: "No booking found with that ID" });
        }
    } catch (error) {
        res.status(500).json({ error: "Update failed" });
    }
});

bookings.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedBooking = await deleteBooking(id);
        if (deletedBooking) {
            res.status(200).json({ success: true, payload: deletedBooking });
        } else {
            res.status(404).json({ error: "Booking not found" });
        }
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

module.export = bookings;
    
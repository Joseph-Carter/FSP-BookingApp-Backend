const express = require("express");
const rooms = express.Router();

const {
    getAllRooms,
    getOneRoom,
    updateRoom
} = require("../queries/rooms");

rooms.get("/", async (req, res) => {
    try {
        const allRooms = await getAllRooms();
        if (allRooms.length) {
            res.status(200).json({ success: true, payload: allRooms });
        } else {
            res.status(404).json({ success: false, error: "No rooms found" });
        }
    } catch (err) {
        res.status(500).json({ success: false, error: " Server Error - failed to fetch rooms" });
    }
});

rooms.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const oneRoom = await getOneRoom(id);
        if (oneRoom) {
            res.status(200).json(oneRoom);
        } else {
            res.status(404).json({ error: "Room not found" });
        }
    } catch (err) {
        res.status(500),json({ error: "Server error" });
    }
});

rooms.put("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const updatedRoom = await updateRoom(id, req.body)
        if (updatedRoom.id) {
            res.status(200).json(updatedRoom);
        } else {
            res.status(404).json({ error: "No room found with that ID" });
        }
    } catch (err) {
        res.status(500).json({ error: "Update failed" });
    }
});


module.exports = rooms;
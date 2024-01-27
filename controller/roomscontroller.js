const express = require("express");
const rooms = express.Router();

const {
    getAllRooms,
    getOneRoom,
    createRoom,
    deleteRoom,
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

rooms.post("/", async (req, res) => {
  try {
    const { id } = req.params;
    const createdRoom = await createRoom(req.body);
    res.json(createdRoom);
  } catch (err) {
    res.status(400).json({ error: "Failed to create new Room." });
  }
});

rooms.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRoom = await deleteRoom(Room_id);

    if (deletedRoom) {
      res.status(200).json(deletedRoom);
    } else {
      res.status(404).json("No Room found");
    }
  } catch (err) {
    res.send(err);
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
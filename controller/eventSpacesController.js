const express = require("express");
const eventSpaces = express.Router();

const {
    getAllEventSpaces,
    getOneEventSpace,
    createEventSpace,
    deleteEventSpace,
    updateEventSpace
} = require("../queries/eventSpaces");

eventSpaces.get("/", async (req, res) => {
    try {
        const allEventSpaces = await getAllEventSpaces();
        if (allEventSpaces.length) {
            res.status(200).json(allEventSpaces);
        } else {
            res.status(404).json({ success: false, error: "No Event Spaces found" });
        }
    } catch (err) {
        res.status(500).json({ success: false, error: " Server Error - failed to fetch Event Spaces" });
    }
});

eventSpaces.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const OneEventSpace = await getOneEventSpace(id);
        if (OneEventSpace) {
            res.status(200).json(OneEventSpace);
        } else {
            res.status(404).json({ error: "Event space not found" });
        }
    } catch (err) {
        res.status(500),json({ error: "Server error" });
    }
});

eventSpaces.post("/", async (req, res) => {
  try {
    const { id } = req.params;
    const createdEventSpace = await createEventSpace(req.body);
    res.json(createdEventSpace);
  } catch (err) {
    res.status(400).json({ error: "Failed to create new event space." });
  }
});

eventSpaces.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEventSpace = await deleteEventSpace(eventSpace_id);

    if (deletedEventSpace) {
      res.status(200).json(deletedEventSpace);
    } else {
      res.status(404).json("No Event Space found");
    }
  } catch (err) {
    res.send(err);
  }
});

eventSpaces.put("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const updatedeventSpace = await updateEventSpace(id, req.body)
        if (updatedeventSpace.id) {
            res.status(200).json(updatedeventSpace);
        } else {
            res.status(404).json({ error: "No Event Space found with that ID" });
        }
    } catch (err) {
        res.status(500).json({ error: "Update failed" });
    }
});


module.exports = eventSpaces;
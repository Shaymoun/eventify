const express = require("express")
const { getAll, getEventsByNameOrLocation } = require("../data/event")

const router = express.Router()

router.get("/:phrase", async (req, res, next) => {
	try {
		const events = await getEventsByNameOrLocation(req.params.phrase)
		res.json({ events: events })
	} catch (error) {
		next(error)
	}
})

module.exports = router

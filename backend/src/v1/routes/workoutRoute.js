const express = require("express");
const workoutController = require("../../controllers/workoutController");
// *** ADD ***
const recordController = require("../../services/recordSevices");

const router = express.Router();

router.get("/", workoutController.getAllWorkouts);

router.get("/:workoutId", workoutController.getOneWorkout);

// *** ADD ***
router.get("/:workoutId/records", recordController.getRecordForWorkout);

router.post("/", workoutController.createNewWorkout);

router.patch("/:workoutId", workoutController.updateOneWorkout);

router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;
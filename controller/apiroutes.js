const router = require("express"). Router();
const { Workout } = require("../models");
const db = require("../models")

router.get("/api/workouts", ({ body }, res) => {
    db.Workout.find().then(function(data){
        res.json(data);
    });
});

router.put("/api/workouts/:id", ({body, params}, res) => {
    db.Workout.findByIdAndUpdate(
        params.id,
        { $push: {exercises: body} },
        { new: true, runValidators: true }
    ).then(data => res.json(data));
});

router.post("/api/workouts", ({body}, res) => {
    db.Workout.create(body).then(data => {
        res.json(data);
    });
});


router.get("/api/workouts/range", ({body}, res) => {
    db.Workout.find().then(function(data){
        res.json(data);
    });
});

module.exports = router;
const getAllWorkout=(req,res)=>{
    res.send('Get all workout')
}

const getOneWorkout=(req,res)=>{
    res.send('Get an existing workout')
}

const createNewWorkout=(req,res)=>{
    res.send('Create Workout')
}

const updateOneWorkout=(req,res)=>{
    res.send('Update an exiting workout')
}

const deleteOneWorkout=(req,res)=>{
    res.send('Delete an existing workout')
}

module.exports={
    getAllWorkout,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}
const Todo = require("../models/Todo");
//define route handler
//Here we used async because we dont want our whole system to wait just for the data to be sent to the db
exports.getTodo = async(req,res) => {
    try {
        //fetch all todo data from db
        const todo = await Todo.find({});
        //send the data in respone
        res.status(200).json(
            {
                success:true,
                data:todo,
                message:'All Todo Data'
            }
        );
    }
    catch(err) {
        console.error(err);
        res.status(500)
            .json({
                success:false,
                data:"Internal Server Error",
                message:err.message,
            });
    }
}

exports.getTodoById = async(req,res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findById({_id: id})

        //data not found
        if(!todo) {
            return res.status(404).json({
                success:false,
                message:"No Data Found",
            })
        }
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`,
        })
    }
    catch(err) {
        console.err(err),
            res.status(500).json({
                success:false,
                data:err.message,
                message:'Server Error',
            });
    }
}

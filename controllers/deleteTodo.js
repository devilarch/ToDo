const Todo = require("../models/Todo");
//define route handler
//Here we used async because we dont want our whole system to wait just for the data to be sent to the db
exports.deleteTodo = async(req,res) => {
    try {
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);
        res.status(200).json(
            {
                success:true,
                message:'Entry Deleted'
            }
        );
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
            .json({
                success:false,
                data:"Internal Server Error",
                message:err.message,
            });
    }
}

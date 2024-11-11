const Todo = require("../models/Todo");
//define route handler
//Here we used async because we dont want our whole system to wait just for the data to be sent to the db
exports.updateTodo = async(req,res) => {
    try {
        const {id} = req.params;
        //extract the title and description form response body
        const {title,description} = req.body;
        //send the extracted data to db
        const todo = await Todo.findById({_id:id},{title, description,updatedAt: Date.now()});
        res.status(200).json(
            {
                success:true,
                data:todo,
                message:'Updated Successfully'
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

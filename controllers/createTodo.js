const Todo = require("../models/Todo");
//define route handler
//Here we used async because we dont want our whole system to wait just for the data to be sent to the db
exports.createTodo = async(req,res) => {
    try {
        //extract the title and description form response body
        const {title,description} = req.body;
        //send the extracted data to db
        const response = await Todo.create({title,description});
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry created'
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
            })
    }
}

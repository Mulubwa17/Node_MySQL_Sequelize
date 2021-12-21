const User = require('../models/user');



exports.createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        const newUser = await User.create({ firstName, lastName, email, password });
        res.status(200).send({datd: newUser, message: "User created successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Error creating user"});
    }
        
    };

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll({});
        res.status(200).send({data: users, message: "Users retrieved successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Error getting users"});
    }
        
    }
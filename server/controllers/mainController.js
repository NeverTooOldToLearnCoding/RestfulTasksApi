// All necessary requires, such as the Quote model.
const mongoose = require('mongoose');
var model = require("../models/tasks");
var Tasks = model.Tasks;


module.exports = {
    index: function(req, res) {

	  Tasks.find({}).sort({updatedAt:'desc'}).exec(function(err, tasks) {
	    if(err) {
	      console.log("Returned error", err);
	      res.json({message: "Error", error: err})
	    }else{
	    	res.json({message: "Success", data: tasks})
	    }
	  })	// code...
    },

	view: function(req, res) {
		// code...
		  Tasks.find({_id:req.params.id}).sort({updatedAt:'desc'}).exec(function(err, task) {
		    if(err) {
		      console.log("Returned error", err);
		      res.json({message: "Error", error: err})
		    }else{
	    		res.json({message: "Success", data: task})		    	
		    }
		  })

	},

    create: function(req, res) {
    	// code...
		  // create a new User with the name and age corresponding to those from req.body
		  // console.log(req.json);

		  var task = new Tasks(req.body);

		  task.save(function(err,tasks){

		        if(err){

			      res.json({message: "Error", error: err})
		        }
		        else {
		            res.json({message: "Success", data: tasks})
		        }
		    });
    },

    update: function(req, res) {
    	// code...
		  // create a new User with the name and age corresponding to those from req.body
	  Tasks.updateOne({_id:req.params.id}, 
	    {$set:{title:req.body.title, description:req.body.description,completed:req.body.completed}}, function(err){
	 // This code will run when the DB has attempted to update the matching record.
	   if(err){
	   		res.json({message: "Error", error: err})
	   }else{
	   		res.json({message: "Success"})
	    }
	  })

    },

    destroy: function(req, res) {
    	// code...
		Tasks.deleteOne({_id:req.params.id},function(err){
		if(err) {

			res.json({message: "Error", error: err})
		}else{
			res.json({message: "Success"})
			}
		})
    }
};

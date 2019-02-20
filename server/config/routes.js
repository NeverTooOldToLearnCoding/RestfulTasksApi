var mainController = require('../controllers/mainController');

module.exports = function(app){

//retrieve all documents
app.get('/tasks', mainController.index);

//retrieve 1 document with name
app.get('/tasks/:id', mainController.view);

// create  
app.post('/new', mainController.create);

// update  
app.put('/update/:id', mainController.update);

//delete 
app.delete('/destroy/:id', mainController.destroy);
}
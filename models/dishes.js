const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
},{
    timestamps: true  // this will automatically add the created at and updated at 2 timestamps into each
                   //document ie.stored in our application it will updated automatically these values whenever we update the document
});

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;

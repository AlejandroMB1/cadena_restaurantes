const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var ingredientSchema = new Schema({
    name:  {
        type : String,
        required : true
    },
    description: String,
    price: {
        type : Number,
        required: true
    }
});

module.exports = {
    ingredientSchema : ingredientSchema,
    plateSchema: new Schema({
        name:  {
            type : String,
            required : true
        },
        description: String,
        price: {
            type : Number,
            required: true
        },
        ingredientes: [ingredientSchema]
    })
}



/*
The permitted SchemaTypes are:

String
Number
Date
Buffer
Boolean
Mixed
ObjectId
Array
Decimal128
Map
*/
var exampleSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs:  Number
    }
});

// Aqui abajo son los esquemas que se usaran


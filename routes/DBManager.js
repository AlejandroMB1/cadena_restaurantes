// 'use strict';
// //Este componente es el encargado de manejar las conexiones con la base de datos
// require('dotenv').config()
// const mongoose = require('mongoose');
// mongoose.connect(process.env.DBUrl, { useNewUrlParser: true, useUnifiedTopology: true  });
// const db = mongoose.connection;
// db.on('error', (error) => console.log(error))
// db.once('open', () => console.log('Connected to Database'))

// const DBSchemas = require('./DBSchemas')

// module.exports = {
//     getAllIngedients: async () => {
//         const ingredientModel = mongoose.model('Ingredient', DBSchemas.ingredientSchema);
//         try {
//             return await ingredientModel.find();
//         } catch (error) {
//             throw error;
//         }
//     },
//     createIngredient: async (ingredient) => {
//         const ingredientModel = mongoose.model('Ingredient', DBSchemas.ingredientSchema);
//         let newIngredient = new ingredientModel(ingredient);
//         try {
//             await newIngredient.save();
//             return newIngredient;
//         } catch (error) {
//             throw error;
//         }
//     }
// }
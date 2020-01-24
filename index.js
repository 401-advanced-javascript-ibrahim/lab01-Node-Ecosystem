'use strict';

const validator = require('./validator/lib/validator.js');

const VehicleConstructor = require('./classes/lib/vehicle-constructor.js');
const VehicleClass = require('./classes/lib/vehicle-class.js');

// Implement a car and motorcycle using a Constructor
const mazdaConstructor = new VehicleConstructor.Car('Mazda 3');
const mazdaClass = new VehicleConstructor.Car('Mazda 3');

const harleyConstructor = new VehicleConstructor.Motorcycle('Harley');
const harleyClass = new VehicleClass.Motorcycle('Harley');

// Implement a car and motorcycle using a Class
// validator.isValid = (schema, data) => {
//     let valid = true;
//     for (let fieldName in schema.fields) {
//         let field = schema.fields[fieldName];
//         // Am I required and set?
//         let required = field.required
//         ? validator.isTruthy(data[fieldName])
//         : true;
//         // Am I the right type (if we even care)
//         let type = field.type
//         ? validator.isCorrectType(data[fieldName], field)
//         : true;
//         // If anything is false ...
//         if (!(required && type)) {
//             valid = false;
//         }
//     }
//     return valid;
// };

// const personRules = {
//     fields: {
//         id: { type: 'string', required: true },
//         name: { type: 'string', required: true },
//         age: { type: 'number', required: true },
//         children: { type: 'array', valueType: 'string' },
//     },
// };

// const susan = {
//     id: '123-45-6789',
//     name: 'Susan McDeveloperson',
//     age: 37,
//     children: [],
// };

// const fred = {
//     id: 38,
//     name: 'Freddy McCoder',
//     children: [],
// };

console.log('mazdaConstructor', mazdaConstructor.name, mazdaConstructor.drive(), mazdaConstructor.stop());
console.log('mazdaClass', mazdaClass.name, mazdaClass.drive(), mazdaClass.stop(),'\n');

console.log('harleyConstructor', harleyConstructor.name, harleyConstructor.wheelie(), harleyConstructor.stop());
console.log('harleyClass', harleyClass.name, harleyClass.wheelie(), harleyClass.stop(),'\n');

// console.log('Testing susan', validator.isValid(personRules, susan));
// console.log('Testing fred', validator.isValid(personRules, fred));
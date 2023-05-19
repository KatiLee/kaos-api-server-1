'use strict';
// since this is the server we have to behave, so we are to "use strict" mode
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
// here we are calling sequelize and requiring it, or saying hey you should come over here and help
const Clothes = sequelize.define('Clothes', {
  // Here we are defining a constructor "Clothes"
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  // This is telling us that the constuctor, Clothes, will have an "id", and the data typethat will be the datatype of an
  // integer, stating that it WILL have a primary Key, and that it WILL be autoincrementing
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Again stating that Clothes will have a type which will a type that has, presumably words
  // and that you're not allowed to leave the field empty
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // the Clothes will have some color, which in this case will be a string, presumably typed
  // out color words, this also could have been an enum to specify paticular options.
  // again, not allowed to leave the field empty
  size: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // the Clothes will have a size which will be a string, may to have numbers or s/m/l, again,
  // the feild may not be left blank
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
// we are giving the Clothes a price, in which the datatype is a float so as to include a number
// that more than likely has a decimal. There Must be a price. 
}, {
  tableName: 'clothes',
  timestamps: false,
});
// this is just specifying the name of the table and telling it not to keep timestamps

module.exports = Clothes;
// this bad boi will send that Clothes construtor on it's marry way, back out into the server 
// for whatever file needs to use it.
const mongoose = require('mongoose');

async function connect () {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/G1CV_SDN301m');
    console.log('Connect Successfully!!!');
  } catch (error) {
    console.log(error);
    console.log('Connect failure!!!');
  }
};

module.exports = {connect};
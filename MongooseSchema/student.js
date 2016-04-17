var mongoose = require('mongoose');
var courses = require('./course');

var schema = new mongoose.Schema({
  name: { type: String, required: true },
  courses: [{ type: String, ref: 'Course' }]

});

var Student = mongoose.model("Students", schema);

// var student = new Student({
//   name:"William Bruce Rose",
//   courses:[{
//     _id:"CS-101",
//     title:"Introduction to Computer Science",
//     description:"description",
//     requirements:[
//       {"1"},{"2"}
//     ]
//   }]
// });

var studentValue = new Student({
  name:"William Bruce Rose",
  courses:[{
    _id:"CS-101",
    title:"Introduction to Computer Science",
    description:"description",
    requirements:[
      "adsd","adasd"
    ]
  }]
});

console.log(studentValue.name.split(" ")[0] );

// console.log(studentValue.name);
// var fname = studentValue.name.split(" ")[0];
// console.log(fname);
/* Returns the student's first name, which we will define
 * to be everything up to the first space in the student's name.
 * For instance, "William Bruce Bailey" -> "William" */
// schema.virtual('')

schema.virtual('firstName').get(function() {
  // console.log('inside firstname')
  // var fname = this.name.split(" ");
  // console.log(fname[0]);
  return this.name.split(" ")[0];
});

/* Returns the student's last name, which we will define
 * to be everything after the last space in the student's name.
 * For instance, "William Bruce Bailey" -> "Bailey" */
schema.virtual('lastName').get(function() {
  // var fname = studentValue.name.split(" ");
  // console.log(fname[2]);
  return this.name.split(" ")[2];
});

module.exports = schema;

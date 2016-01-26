var EventEmitter = require('events').EventEmitter;
var _ = require('underscore');

var _teachers = {
  "teachers":[
    {"id":"luc","first":"Luc","last":"Doumen"},
    {"id":"marijke","first":"Marijke","last":"Sporen"},
    {"id":"giel", "first":"Giel", "last":"Smets"},
    {"id":"jan","first":"Jan","last":"Willekens"}
  ]
};

var TeacherStore = _.extend({}, EventEmitter.prototype, {
  getTeachers: function () {
    var teachers = [];

    for (var idx in _teachers.teachers) {
      teachers.push(_teachers.teachers[idx]);
    }

    return teachers;
  },

  getTeacher: function (teacherId) {
    var teachers = [];

    for (var idx in _teachers.teachers) {
      var teacher= _teachers.teachers[idx];
      if(teacher.id == teacherId){
        return teacher;
      }
    }
  },

  // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

module.exports = TeacherStore;

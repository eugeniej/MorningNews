const mongoose = require('mongoose');

var options = {
   connectTimeoutMS: 5000,
   useNewUrlParser: true,
   useUnifiedTopology: true
  };

mongoose.connect('mongodb+srv://eugeniej:Civijou35!@aboutcarsproject-f0uk3.mongodb.net/matinnews?retryWrites=true&w=majority',
    options,
    function(err) {
     if (err) {
       console.log(`error, failed to connect to the database because --> ${err}`);
     } else {
       console.info('*** Database faceUp app connection : Success ***');
     }
    }
);

module.exports = mongoose;
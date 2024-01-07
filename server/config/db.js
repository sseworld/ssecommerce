const mongoose = require("mongoose");
try {
  mongoose.connect(
    "mongodb+srv://sseworld:sseworld%4012@bakend.lxfcdxr.mongodb.net/ssecommerce?retryWrites=true&w=majority",
    // {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    // }
  );
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}

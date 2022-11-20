const mongoose =require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      //  
    },
    email: {
      type: String,
      // required: true,
      // unique: true,
    },
    batch: {
      type: String,
      //required: true,
    },
    status: {
      type: String,
      enum: ["Placed", "Not Placed"],
    },
    dsa_score: {
      type: String,
      //   required: true,
    },
    webd_score: {
      type: String,
      //   required: true,
    },
    react_score: {
      type: String,
    },
   interviews: [
        {
          company: {
            type: String,
           
          },
          date: {
            type: String,
          },
          result: {
            type: String,
            enum: [
              "Selected",
              "Not Selected",
              "On Hold",
              "Absent",
              "Interview Pending",
            ],
          },
        },
      ],
    
    });
      const Student = mongoose.model("Student", studentSchema);

       module.exports = Student; 
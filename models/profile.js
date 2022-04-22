const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    date_of_birth: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    company_name: {
      type: String,
    },
    work_description: {
      type: String,
    },
    university_name: {
      type: String,
      // required: true,
    },
    course_name: {
      type: String,
      // required: true,
    },
    skills: [
      {
        type: String,
        required: true,
      },
    ],
    projects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        autopopulate: true
      },
    ],
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

profileSchema.plugin(require('mongoose-autopopulate'));

module.exports =
  mongoose.models.Profile || mongoose.model("Profile", profileSchema);

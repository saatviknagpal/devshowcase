import connectDB from "../../middleware/mongodb";
import User from "../../models/user";
import Profile from "../../models/profile";
import Project from "../../models/project"

const handler = async (req, res) => {
  if (req.method === "POST") {
    const {
      user_id,
      name,
      date,
      bio,
      location,
      company,
      work,
      school,
      course,
      tags,
      designation,
      images,
    } = req.body;
    const profile = new Profile({
      image: images,
      name: name,
      designation: designation,
      date_of_birth: date,
      bio: bio,
      location: location,
      company_name: company,
      work_description: work,
      university_name: school,
      course_name: course,
      skills: tags,
      user_id: user_id,
    });
    try {
      const userProfile = await profile.save();
      const user = await User.findByIdAndUpdate(
        { _id: user_id },
        {
          $set: {
            profile_id: userProfile._id,
          },
        },
        {
          new: true,
          useFindAndModify: false,
        }
      );
      return res.status(201).json({
        status: "success",
        message: "Profile Created Successfully",
        user: user,
        userProfile: userProfile,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    const { profile_id } = req.headers;
    const profile = Profile.findById(profile_id)
      .populate({ path: "projects", model: Project })
      .exec((err, result) => {
        if (err)
          res
            .status(404)
            .json({ status: "fail", message: "User Profile Not found" });
        res.status(201).json({ status: "success", user: result });
      });
  }
};

export default connectDB(handler);

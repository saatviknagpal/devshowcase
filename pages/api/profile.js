import connectDB from "../../middleware/mongodb";
import Profile from "../../models/profile";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const {
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
      name: name,
      date_of_birth: date,
      bio: bio,
      location: location,
      company_name: company,
      work_description: work,
      university_name: school,
      course_name: course,
      skills: tags,
      designation: designation,
      image: images,
    });
    try {
      await profile.save();
      return res
        .status(201)
        .json({ status: "success", message: "Profile Created Successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    const {profile_id} = req.body;
    try{
      const profile = await Profile.findOne({ _id: profile_id });
      res.status(201).json({ status: "success", user: profile });
    } catch{
      res.status(201).json({ status: "fail", message: 'User Profile Not found' });
    }
  }
};

export default connectDB(handler);
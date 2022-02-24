import Head from "next/head";
import Image from "next/image";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import { useState } from "react";

function ProfileForm() {
  const [tags, setTags] = useState([]);
  const [data, setData] = useState({
    name: "",
    date: "",
    bio: "",
    location: "",
    company: "",
    work: "",
    school: "",
    course: "",
    skills: "",
  });

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  function submit(e) {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        date: data.date,
        bio: data.bio,
        location: data.location,
        company: data.company,
        work: data.work,
        school: data.school,
        course: data.course,
        skills: data.skills,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  return (
    <div>
      <Head>
        <title>Profile Form</title>
      </Head>
      <div className="bg-gray-400 w-full h-full flex flex-col items-center justify-center">
        <div className="md:invisible p-3 md:p-16 flex flex-col">
          <label htmlFor="file-input">
              <Image
                src="/images/avatar.png"
                width={125}
                height={118}
                className="rounded-full drop-shadow-lg cursor-pointer"
              />
            </label>
            <input
              id="file-input"
              type="file"
              className="hidden"
              accept="image/*"
            />
          <button className="font-semibold hover:text-white">
            Add Designation
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center md:-mt-24 md:mb-20 lg:w-10/12 mx-auto">
        <div className="flex flex-row shadow-2xl w-full md:w-11/12">
          <div className="hidden bg-white pl-10 pt-28 pb-8 mb-4 md:block flex-col">
            <label htmlFor="file-input">
              <Image
                src="/images/avatar.png"
                width={125}
                height={118}
                className="rounded-full drop-shadow-lg cursor-pointer"
              />
            </label>
            <input
              id="file-input"
              type="file"
              className="hidden"
              accept="image/*"
            />
            <button className="font-semibold text-gray-400">
              Add Designation
            </button>
          </div>
          <div className="w-0.5 table-cell bg-gray-100"></div>
          <form className="bg-white px-8 w-screen" onSubmit={(e) => submit(e)}>
            <div className="text-center text-blue-500 text-2xl font-semibold lg:text-4xl mb-7 md:mb-16 mt-6">
              Profile Form
            </div>
            <div>
              <div className="text-blue-500 text-lg lg:text-2xl font-semibold mb-5">
                Basic Info
              </div>
              <div className="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-2 border-b">
                <label
                  className="block py-2 font-semibold "
                  htmlFor="full-name"
                >
                  Name
                </label>
                <input
                  onChange={(e) => handle(e)}
                  value={data.name}
                  className=" appearance-none w-full py-2 text-gray-700 leading-tight focus:outline-none"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-2 border-b">
                <label className="block py-2 font-semibold " htmlFor="date">
                  Date Of Birth
                </label>
                <input
                  onChange={(e) => handle(e)}
                  value={data.date}
                  className="appearance-none w-full py-2 text-gray-700 leading-tight focus:outline-none"
                  id="date"
                  type="date"
                  placeholder="Your Birthday"
                />
              </div>
              <div className="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-2 border-b">
                <label className="block py-2 font-semibold " htmlFor="bio">
                  Bio
                </label>
                <input
                  onChange={(e) => handle(e)}
                  value={data.bio}
                  className=" appearance-none w-full py-2 text-gray-700 leading-tight focus:outline-none"
                  id="bio"
                  type="text"
                  placeholder="Tell us about yourself"
                />
              </div>
              <div className="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-2 border-b">
                <label className="block py-2 font-semibold " htmlFor="location">
                  Location
                </label>
                <input
                  onChange={(e) => handle(e)}
                  value={data.location}
                  className=" appearance-none w-full py-2 text-gray-700 leading-tight focus:outline-none"
                  id="location"
                  type="text"
                  placeholder="Your Location"
                />
              </div>
              <div className="mt-8 text-blue-500 text-lg lg:text-2xl font-semibold mb-5">
                Experience
              </div>
              <div className="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-2 border-b">
                <label className="block py-2 font-semibold " htmlFor="company">
                  Company Name
                </label>
                <input
                  onChange={(e) => handle(e)}
                  value={data.company}
                  className=" appearance-none w-full py-2 text-gray-700 leading-tight focus:outline-none"
                  id="company"
                  type="text"
                  placeholder="Your Company"
                />
              </div>
              <div className="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-2 border-b">
                <label className="block py-2 font-semibold" htmlFor="work">
                  Work
                </label>
                <textarea
                  onChange={(e) => handle(e)}
                  value={data.work}
                  className="bg-gray-200 text-center w-full p-2 resize-none"
                  id="work"
                  placeholder="Describe your Work"
                ></textarea>
              </div>
              <div className="mt-8 text-blue-500 text-lg lg:text-2xl font-semibold mb-5">
                Education
              </div>
              <div className="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-2 border-b">
                <label className="block py-2 font-semibold " htmlFor="school">
                  University/School
                </label>
                <input
                  onChange={(e) => handle(e)}
                  value={data.school}
                  className=" appearance-none w-full py-2 text-gray-700 leading-tight focus:outline-none"
                  id="school"
                  type="text"
                  placeholder="Your Uni/School"
                />
              </div>
              <div className="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-2 border-b">
                <label className="block py-2 font-semibold " htmlFor="course">
                  Course
                </label>
                <input
                  onChange={(e) => handle(e)}
                  value={data.course}
                  className=" appearance-none w-full py-2 text-gray-700 leading-tight focus:outline-none"
                  id="course"
                  type="text"
                  placeholder="Your Course"
                />
              </div>
              <div className="mt-8 text-blue-500 text-lg lg:text-2xl font-semibold mb-5">
                Skills
              </div>
              <div className="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-2">
                <label className="block py-2 font-semibold " htmlFor="skills">
                  Technical Skills
                </label>
                <ReactTagInput
                  tags={tags}
                  placeholder="Your Skills"
                  maxTags={5}
                  editable={true}
                  readOnly={false}
                  removeOnBackspace={true}
                  value={data.skills}
                  onChange={(newTags) => setTags(newTags)}
                />
              </div>
            </div>
            <div className="flex md:justify-center justify-end items-center mb-5 md:mr-20">
              <input
                type="submit"
                value="SAVE"
                className=" bg-blue-500 shadow-lg md:w-3/12 shadow-blue-500/50 rounded-lg p-3 text-white font-bold mt-5 cursor-pointer hover:scale-110 transform duration-200"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;

import React, { useRef, useState } from 'react';
import outline from '../assets/pencil1.png';
import avatar0 from '../assets/avatar0.png';
import avatar1 from '../assets/avatar1.png'; 
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';
import avatar4 from '../assets/avatar4.png';
import avatar5 from '../assets/avatar5.png';
import avatar6 from '../assets/avatar6.png';
import { COLLEGES, MONTHS, YEARS, AVATAR_URLS } from "../utils/constants";
import { editProfile } from '../services/operations/authAPI';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const avatarMap = {
  avatar0: AVATAR_URLS[0],
  avatar1: AVATAR_URLS[1],
  avatar2: AVATAR_URLS[2],
  avatar3: AVATAR_URLS[3],
  avatar4: AVATAR_URLS[4],
  avatar5: AVATAR_URLS[5],
  avatar6: AVATAR_URLS[5]
};

const EditProfileComp = () => {

  const firstName = useRef(null);
  const lastName  = useRef(null);
  const rollNo = useRef(null);
  const phoneNo = useRef(null);
  const email = useRef(null);
  const college = useRef(null);
  const gradMonth = useRef(null);
  const gradYear = useRef(null);
  const [avatar, setAvatar] = useState(AVATAR_URLS[0]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let num = 123;
    num.toFixed()
    const formData = {
      rollNo: rollNo.current.value,
      mobileNo: phoneNo.current.value.toString(),
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      collageName: college.current.value,
      graduationMonth: gradMonth.current.value,
      graduationYear: gradYear.current.value,
      avatar,
    };
    dispatch(editProfile(formData,navigate));
  };


  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-red-200">
        <main className="py-16">
          <div className="text-center">
            <h1 className="font-bold text-5xl">Edit Profile</h1>
          </div>

          <div className="flex justify-center mt-8 pt-10 flex-wrap ">
            <div className="flex flex-col items-center w-full md:w-1/3 mb-8 md:mb-0 ">
              <div className="flex flex-col items-center">
                <div
                  className={`w-32 h-32 rounded-full cursor-pointer`}
                  style={{
                    backgroundImage: `url(${avatarMap[avatar]})`,
                    backgroundSize: "cover",
                  }}
                ></div>

                <div className="flex space-x-2 mt-4">
                  <div
                    className={`w-16 h-16 rounded-full cursor-pointer ${
                      avatar === "avatar0" ? "ring-4 ring-red-500" : ""
                    }`}
                    onClick={() => setAvatar("avatar0")}
                    style={{
                      backgroundImage: `url(${avatar1})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div
                    className={`w-16 h-16 rounded-full cursor-pointer ${
                      avatar === "avatar1" ? "ring-4 ring-red-500" : ""
                    }`}
                    onClick={() => setAvatar("avatar1")}
                    style={{
                      backgroundImage: `url(${avatar2})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div
                    className={`w-16 h-16 rounded-full cursor-pointer ${
                      avatar === "avatar2" ? "ring-4 ring-red-500" : ""
                    }`}
                    onClick={() => setAvatar("avatar2")}
                    style={{
                      backgroundImage: `url(${avatar3})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
                <div className="flex space-x-2 mt-4">
                  <div
                    className={`w-16 h-16 rounded-full cursor-pointer ${
                      avatar === "avatar3" ? "ring-4 ring-red-500" : ""
                    }`}
                    onClick={() => setAvatar("avatar3")}
                    style={{
                      backgroundImage: `url(${avatar4})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div
                    className={`w-16 h-16 rounded-full cursor-pointer ${
                      avatar === "avatar4" ? "ring-4 ring-red-500" : ""
                    }`}
                    onClick={() => setAvatar("avatar4")}
                    style={{
                      backgroundImage: `url(${avatar5})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div
                    className={`w-16 h-16 rounded-full cursor-pointer ${
                      avatar === "avatar5" ? "ring-4 ring-red-500" : ""
                    }`}
                    onClick={() => setAvatar("avatar5")}
                    style={{
                      backgroundImage: `url(${avatar6})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
              </div>
              <div className="text-center mt-4 font-bold">
                Choose Your Avatar
              </div>
            </div>
            <div className=' flex text-center justify-center'>
              <form
                onSubmit={handleSubmit}
                className="w-full ml-0 md:ml-7 font-semibold  "
              >
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex flex-col md:flex-row">
                    <input
                      type="text"
                      name="firstName"
                      ref={firstName}
                      placeholder="First Name"
                      className="p-2 mr-0 md:mr-2 border rounded-2xl w-full bg-gray-300 mb-2 md:mb-0 "
                    />
                    <input
                      type="text"
                      name="lastName"
                      ref={lastName}
                      placeholder="Last Name"
                      className="p-2 ml-0 md:ml-2 border rounded-2xl w-full bg-gray-300"
                    />
                  </div>
                  <input
                    type="text"
                    name="rollNo"
                    ref={rollNo}
                    placeholder="Roll No."
                    className="p-2 border rounded-2xl w-full bg-gray-300"
                  />
                  <input
                    type="text"
                    name="phoneNo"
                    ref={phoneNo}
                    placeholder="Phone No."
                    className="p-2 border rounded-2xl w-full bg-gray-300"
                  />
                  <input
                    type="email"
                    name="email"
                    ref={email}
                    placeholder="E-mail"
                    className="p-2 border rounded-2xl w-full bg-gray-300"
                  />
                  <select
                    name="college"
                    ref={college}
                    className="p-2 border rounded-2xl w-full bg-gray-300"
                  >
                    {COLLEGES.map((college, index) => {
                      return (
                        <option value={college} key={index}>
                          {college}
                        </option>
                      );
                    })}
                  </select>
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-2">
                    <div className="font-semibold  p-2 rounded">
                      Year Of Graduation
                    </div>
                    <select
                      name="gradMonth"
                      ref={gradMonth}
                      className="p-2 border rounded-2xl w-full bg-gray-300"
                    >
                      {MONTHS.map((month, index) => {
                        return (
                          <option value={month} key={index}>
                            {month}
                          </option>
                        );
                      })}
                    </select>
                    <select
                      name="gradYear"
                      ref={gradYear}
                      className="p-2 border rounded-2xl w-full bg-gray-300"
                    >
                      {YEARS.map((year, index) => {
                        return (
                          <option value={year} key={index}>
                            {year}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="text-center mt-8  ">
                  <button
                    type="submit"
                    className="bg-red-600 text-white py-2 px-10 rounded-3xl "
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="flex justify-end mb-16 mr-10 fixed bottom-16 right-4 ">
            <img
              src={outline}
              alt="Edit"
              className="w-14 h-14 cursor-pointer"
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default EditProfileComp;

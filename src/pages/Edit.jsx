import React, { useState } from 'react';
import outline from '../assets/pencil1.png';
import avatar0 from '../assets/avatar0.png';
import avatar1 from '../assets/avatar1.png'; 
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';
import avatar4 from '../assets/avatar4.png';
import avatar5 from '../assets/avatar5.png';
import avatar6 from '../assets/avatar6.png';
import HeaderL from '../components/Header';
import Footer from '../components/Footer';

const avatarMap = {
  avatar0: avatar0,
  avatar1: avatar1,
  avatar2: avatar2,
  avatar3: avatar3,
  avatar4: avatar4,
  avatar5: avatar5,
  avatar6: avatar6
};

const EditProfile = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    rollNo: '',
    phoneNo: '',
    email: '',
    college: '',
    gradMonth: '',
    gradYear: '',
    avatar: 'avatar0',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAvatarSelect = (avatar) => {
    setForm({ ...form, avatar });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(form);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    console.log("Edit button is working");
  };

  return (
    <>
      <HeaderL />

      <div className="min-h-screen bg-gradient-to-b from-white to-red-200">
        <main className="py-16">
          <div className="text-center">
            <h1 className="font-bold text-5xl">Edit Profile</h1>
          </div>

          <div className="flex justify-center mt-8 flex-wrap">
            <div className="flex flex-col items-center w-full md:w-1/3 mb-8 md:mb-0">
              <div className="flex flex-col items-center">
                <div
                  className={`w-32 h-32 rounded-full cursor-pointer`}
                  style={{ backgroundImage: `url(${avatarMap[form.avatar]})`, backgroundSize: 'cover' }}
                ></div>

                <div className="flex space-x-2 mt-4">
                  <div
                    className={`w-16 h-16 rounded-full cursor-pointer ${form.avatar === 'avatar1' ? 'ring-4 ring-red-500' : ''}`}
                    onClick={() => handleAvatarSelect('avatar1')}
                    style={{ backgroundImage: `url(${avatar1})`, backgroundSize: 'cover' }}
                  ></div>
                  <div
                    className={`w-16 h-16 rounded-full cursor-pointer ${form.avatar === 'avatar2' ? 'ring-4 ring-red-500' : ''}`}
                    onClick={() => handleAvatarSelect('avatar2')}
                    style={{ backgroundImage: `url(${avatar2})`, backgroundSize: 'cover' }}
                  ></div>
                  <div
                    className={`w-16 h-16 rounded-full cursor-pointer ${form.avatar === 'avatar3' ? 'ring-4 ring-red-500' : ''}`}
                    onClick={() => handleAvatarSelect('avatar3')}
                    style={{ backgroundImage: `url(${avatar3})`, backgroundSize: 'cover' }}
                  ></div>
                </div>
                <div className="flex space-x-2 mt-4">
                  <div
                    className={`w-16 h-16 rounded-full cursor-pointer ${form.avatar === 'avatar4' ? 'ring-4 ring-red-500' : ''}`}
                    onClick={() => handleAvatarSelect('avatar4')}
                    style={{ backgroundImage: `url(${avatar4})`, backgroundSize: 'cover' }}
                  ></div>
                  <div
                    className={`w-16 h-16 rounded-full cursor-pointer ${form.avatar === 'avatar5' ? 'ring-4 ring-red-500' : ''}`}
                    onClick={() => handleAvatarSelect('avatar5')}
                    style={{ backgroundImage: `url(${avatar5})`, backgroundSize: 'cover' }}
                  ></div>
                  <div
                    className={`w-16 h-16 rounded-full cursor-pointer ${form.avatar === 'avatar6' ? 'ring-4 ring-red-500' : ''}`}
                    onClick={() => handleAvatarSelect('avatar6')}
                    style={{ backgroundImage: `url(${avatar6})`, backgroundSize: 'cover' }}
                  ></div>
                </div>
              </div>
              <div className="text-center mt-4 font-bold">Choose Your Avatar</div>
            </div>

            <form onSubmit={handleSubmit} className="w-full md:w-1/3 ml-0 md:ml-7 font-semibold">
              <div className="grid grid-cols-1 gap-2">
                <div className="flex flex-col md:flex-row">
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="p-2 mr-0 md:mr-2 border rounded w-full bg-gray-300 mb-2 md:mb-0 "
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="p-2 ml-0 md:ml-2 border rounded w-full bg-gray-300"
                  />
                </div>
                <input
                  type="text"
                  name="rollNo"
                  value={form.rollNo}
                  onChange={handleInputChange}
                  placeholder="Roll No."
                  className="p-2 border rounded w-full bg-gray-300"
                />
                <input
                  type="text"
                  name="phoneNo"
                  value={form.phoneNo}
                  onChange={handleInputChange}
                  placeholder="Phone No."
                  className="p-2 border rounded w-full bg-gray-300"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  placeholder="E-mail"
                  className="p-2 border rounded w-full bg-gray-300"
                />
                <select
                  name="college"
                  value={form.college}
                  onChange={handleInputChange}
                  className="p-2 border rounded w-full bg-gray-300"
                >
                  <option value="">Choose College</option>
                  <option value="college1">College 1</option>
                  <option value="college2">College 2</option>
                  <option value="college3">College 3</option>
                </select>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-2">
                  <div className="font-semibold bg-gray-300 p-2 rounded">Year Of Graduation</div>
                  <select
                    name="gradMonth"
                    value={form.gradMonth}
                    onChange={handleInputChange}
                    className="p-2 border rounded w-full bg-gray-300"
                  >
                    <option value="">Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                  <select
                    name="gradYear"
                    value={form.gradYear}
                    onChange={handleInputChange}
                    className="p-2 border rounded w-full bg-gray-300"
                  >
                    <option value="">Year</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                  </select>
                </div>
              </div>
              <div className="text-center mt-8 mb-40">
                <button type="submit" className="bg-red-600 text-white py-2 px-10 rounded-3xl ">
                  Save
                </button>
              </div>
            </form>
          </div>

          <div className="flex justify-end mb-16 mr-10 fixed bottom-16 right-4 ">
            <img src={outline} alt="Edit" className="w-14 h-14 cursor-pointer" onClick={handleEdit} />
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default EditProfile;

import React, { useEffect, useState } from "react";
import { IoMdStar } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import Button from "./Button";
import { FaRegSave } from "react-icons/fa";

function EditProfile({
  editProfile,
  setEditProfile,
}: {
  editProfile: boolean;
  setEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  useEffect(() => {
    document.body.style.overflow = editProfile ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [editProfile]);

  const [userName, setUserName] = useState<string>("Mehran1029");
  const [photo, setPhoto] = useState<File | null>(null);
  const [name, setName] = useState<string>("Mehran");
  const [lastName, setLastName] = useState<string>("Soufi Ghaderi");
  const [email, setEmail] = useState<string>("mehran@example.com");
  const [phone, setPhone] = useState<string>("09213821172");
  const [job, setJob] = useState<string>("Programmer");
  const [birthday, setBirthday] = useState<string>("2000-01-19");
  const [membership, setMembership] = useState<string>(
    new Date().toISOString().split("T")[0]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      userName,
      photo,
      name,
      lastName,
      email,
      phone,
      job,
      membership,
      birthday,
    });
    alert("Profile updated successfully!");
    setEditProfile(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black/10 z-[100] edit-profile">
      <div className="w-full h-full flex justify-center items-center">
        <div className="relative w-4/5 md:w-[460px] h-[550px] overflow-y-auto rounded-lg bg-white flex flex-col justify-start items-start">
          {/* Header */}
          <div className="w-full flex p-4 items-center justify-between border-b border-slate-300 sticky top-0 bg-white">
            <h2 className="text-main font-bold text-lg">Edit Profile</h2>
            <button
              className="outline-none text-xl cursor-pointer"
              onClick={() => setEditProfile(false)}
            >
              <IoCloseSharp />
            </button>
          </div>

          <div className="w-full border-b border-slate-300 p-4">
            <p>You can change your information from this section.</p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full flex justify-between items-center flex-wrap p-4"
          >
            {/* User Name */}
            <div className="w-full md:w-1/2 p-2 flex flex-col gap-2 my-1">
              <label htmlFor="userName" className="flex items-start gap-0.5">
                User Name: <IoMdStar size={10} className="text-rose-400" />
              </label>
              <input
                type="text"
                id="userName"
                className="w-full p-2 outline-[#0d4b72] rounded-md border-2 border-slate-300"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            {/* Profile Photo */}
            <div className="w-full md:w-1/2 p-2 flex flex-col gap-2 my-1">
              <label htmlFor="photo" className="flex items-start gap-0.5">
                Profile Photo: <IoMdStar size={10} className="text-rose-400" />
              </label>
              <input
                type="file"
                id="photo"
                className="w-full p-2 outline-[#0d4b72] rounded-md border-2 border-slate-300 cursor-pointer"
                onChange={(e) => setPhoto(e.target.files?.[0] || null)}
              />
            </div>

            {/* Name */}
            <div className="w-full md:w-1/2 p-2 flex flex-col gap-2 my-1">
              <label htmlFor="name" className="flex items-start gap-0.5">
                Name: <IoMdStar size={10} className="text-rose-400" />
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 outline-[#0d4b72] rounded-md border-2 border-slate-300"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Last Name */}
            <div className="w-full md:w-1/2 p-2 flex flex-col gap-2 my-1">
              <label htmlFor="lastName" className="flex items-start gap-0.5">
                Last Name: <IoMdStar size={10} className="text-rose-400" />
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full p-2 outline-[#0d4b72] rounded-md border-2 border-slate-300"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="w-full md:w-1/2 p-2 flex flex-col gap-2 my-1">
              <label htmlFor="email" className="flex items-start gap-0.5">
                Email: <IoMdStar size={10} className="text-rose-400" />
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 outline-[#0d4b72] rounded-md border-2 border-slate-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Phone */}
            <div className="w-full md:w-1/2 p-2 flex flex-col gap-2 my-1">
              <label htmlFor="phone" className="flex items-start gap-0.5">
                Phone: <IoMdStar size={10} className="text-rose-400" />
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full p-2 outline-[#0d4b72] rounded-md border-2 border-slate-300"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* job */}
            <div className="w-full md:w-1/2 p-2 flex flex-col gap-2 my-1">
              <label htmlFor="job" className="flex items-start gap-0.5">
                job:
              </label>
              <input
                type="text"
                id="job"
                className="w-full p-2 outline-[#0d4b72] rounded-md border-2 border-slate-300"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
            </div>

            {/* Birthday */}
            <div className="w-full md:w-1/2 p-2 flex flex-col gap-2 my-1">
              <label htmlFor="birthday" className="flex items-start gap-0.5">
                Birthday:
              </label>
              <input
                type="date"
                id="birthday"
                className="w-full p-2 outline-[#0d4b72] rounded-md border-2 border-slate-300"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
            </div>

            {/* return money */}
            <div className="w-full md:w-1/2 p-2 flex flex-col gap-2 my-1">
              <label htmlFor="returnMoney" className="flex items-start gap-0.5">
                Return Money:
              </label>
              <input
                type="text"
                id="returnMoney"
                className="w-full p-2 outline-[#0d4b72] rounded-md border-2 border-slate-300"
                value="Master Cart"
                readOnly
                disabled
              />
            </div>

            {/* Membership */}
            <div className="w-full md:w-1/2 p-2 flex flex-col gap-2 my-1">
              <label htmlFor="membership" className="flex items-start gap-0.5">
                Membership Date:
              </label>
              <input
                type="date"
                id="membership"
                className="w-full p-2 outline-[#0d4b72] rounded-md border-2 border-slate-300"
                value={membership}
                readOnly
                disabled
              />
            </div>

            {/* Submit Button */}
            <div className="w-full flex justify-end mt-4">
              <Button title="Save Changes" icon={<FaRegSave />} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;

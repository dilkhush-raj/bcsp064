"use client";
import { useEffect, useRef, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

export default function AddSchedule() {
  const [formData, setFormData] = useState({
    title: "",
    programme: "",
    course: "",
    group: "",
    duration: "",
    date: "",
    time: "",
    students:[]
  })
  const [students, setStudents] = useState([]);
  console.log(formData);

  const handleAddStudent = () => {
    setStudents([...students, { enrolment: "", studentName: "" }]);
    setFormData({...formData, students})
  };

  const handleRemoveStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
    setFormData({...formData, students})
  };

  const handleStudentInput = (e, index, field) => {
    const updatedStudents = [...students];
    updatedStudents[index][field] = e.target.value;
    setStudents(updatedStudents);
    setFormData({...formData, students})
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="">
      <button
        className="shadow-sm hover:shadow-md flex items-center gap-4 text-xl font-semibold p-2 sm:p-4 rounded-md border border-[#ddd] "
        onClick={() => document.getElementById("schedule_modal").showModal()}
      >
        <FaCalendarAlt />
        <div>Add Schedule</div>
      </button>
      <dialog
        id="schedule_modal"
        className="p-2 sm:p-4 rounded-md shadow-md max-w-[75vw] "
      >
        <h2 className="text-2xl text-center font-bold border-b-4 border-black">
          Add New Schedule
        </h2>
        <form className="flex flex-col gap-4 py-2 w-[70vw] ">
          <div className="grid grid-cols-[100px_1fr] gap-2 items-center ">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData?.title}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="grid grid-cols-[100px_1fr_100px_1fr] gap-2 items-center ">
            <label htmlFor="programme">Programme</label>
            <input
              type="text"
              id="programme"
              name="programme"
              value={formData?.programme}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
            <label htmlFor="course">Course</label>
            <input
              type="text"
              id="course"
              name="course"
              value={formData?.course}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
            <label htmlFor="group">Group</label>
            <input
              type="text"
              id="group"
              name="group"
              value={formData?.group}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
            <label htmlFor="duration">Duration</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData?.duration}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData?.date}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData?.time}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="grid grid-cols-[1fr_1fr_100px] gap-2">
            <div>Enrolment Number</div>
            <div>Student Name</div>
            <div>Action</div>
            {students.map((student, index) => {
              return (
                <>
                  <input
                    type="text"
                    onChange={(e) => handleStudentInput(e, index, "enrolment")}
                    value={student.enrolment}
                    className="input input-bordered w-full"
                    required
                    placeholder=""
                  />
                  <input
                    type="text"
                    onChange={(e) =>
                      handleStudentInput(e, index, "studentName")
                    }
                    value={student.studentName}
                    className="input input-bordered w-full"
                    required
                    placeholder=""
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveStudent(index)}
                  >
                    Remove
                  </button>
                </>
              );
            })}
          </div>
          <div onClick={handleAddStudent}>Add Student</div>
          <div className="flex justify-between">
            <button
              className="bg-[#465fc8] text-white font-bold py-1 px-2 rounded-sm"
              type="submit"
            >
              Add
            </button>
            <button
              type="button"
              className="bg-white border border-black font-bold py-1 px-2 rounded-sm"
              onClick={() => document.getElementById("schedule_modal").close()}
            >
              Cancel
            </button>
          </div>
        </form>
      </dialog>
    </main>
  );
}

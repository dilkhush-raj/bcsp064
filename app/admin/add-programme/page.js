"use client";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

const ProgramForm = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    slug: "",
    programType: "year",
    img: "",
    description: "",
    semesters: [
      {
        name: "",
        slug: "",
        courses: [
          {
            name: "",
            slug: "",
          },
        ],
      },
    ],
  });

  const handleSubmit = (values) => {
    // You can perform form submission logic here
    console.log(values);
    onSubmit(values);
  };

  const handleRemoveSemester = (semesterIndex) => {
    setFormData((prevData) => {
      const updatedSemesters = [...prevData.semesters];
      updatedSemesters.splice(semesterIndex, 1);
      return { ...prevData, semesters: updatedSemesters };
    });
  };

  const handleRemoveCourse = (semesterIndex, courseIndex) => {
    setFormData((prevData) => {
      const updatedSemesters = [...prevData.semesters];
      updatedSemesters[semesterIndex].courses.splice(courseIndex, 1);
      return { ...prevData, semesters: updatedSemesters };
    });
  };

  const inputStyle = "flex gap-5 items-center";
  const inputBox = "rounded-md shadow-sm p-2";

  return (
    <Formik initialValues={formData} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <Form className="bg-gray-300 p-4 flex flex-col gap-2 ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 items-center ">
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" className={inputBox} />
            <ErrorMessage name="name" component="div" />

            <label htmlFor="slug">Slug:</label>
            <Field type="text" id="slug" name="slug" className={inputBox} />
            <ErrorMessage name="slug" component="div" />

            <label htmlFor="programType">Program Type:</label>
            <Field
              as="select"
              id="programType"
              name="programType"
              className={inputBox}
            >
              <option value="year">Year</option>
              <option value="semester">Semester</option>
            </Field>
            <ErrorMessage name="programType" component="div" />

            <label htmlFor="img">Image URL:</label>
            <Field type="text" id="img" name="img" className={inputBox} />
            <ErrorMessage name="img" component="div" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="description">Description:</label>
            <Field
              as="textarea"
              id="description"
              name="description"
              rows={5}
              className={inputBox}
            />
            <ErrorMessage name="description" component="div" />
          </div>

          <div className="flex flex-col gap-2 bg-slate-400 p-2 rounded-md shadow-sm">
            <label>Semesters / Years:</label>
            {values.semesters.map((semester, semesterIndex) => (
              <div key={semesterIndex} className="flex flex-col gap-2  ">
                <div className="grid grid-cols-2 gap-2">
                  <Field
                    type="text"
                    name={`semesters[${semesterIndex}].name`}
                    placeholder="Semester Name"
                    className={inputBox}
                  />
                  <Field
                    type="text"
                    name={`semesters[${semesterIndex}].slug`}
                    placeholder="Semester Slug"
                    className={inputBox}
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center gap-2 p-2">
                    <label>Courses:</label>
                    <button
                      type="button"
                      onClick={() =>
                        setFieldValue(`semesters[${semesterIndex}].courses`, [
                          ...values.semesters[semesterIndex].courses,
                          { name: "", slug: "" },
                        ])
                      }
                    >
                      Add Course
                    </button>
                  </div>
                  <div className="flex flex-col gap-2">
                    {semester.courses.map((course, courseIndex) => (
                      <div
                        key={courseIndex}
                        className="grid grid-cols-2 gap-2 "
                      >
                        <div className="flex gap-2 items-center">
                          <label
                            htmlFor={`semesters[${semesterIndex}].courses[${courseIndex}].name`}
                          >
                            Course Title:
                          </label>
                          <Field
                            type="text"
                            name={`semesters[${semesterIndex}].courses[${courseIndex}].name`}
                            placeholder="Course Name"
                            className={inputBox}
                          />
                        </div>
                        <div  className="flex gap-2 items-center">
                          <label
                            htmlFor={`semesters[${semesterIndex}].courses[${courseIndex}].slug`}
                          >
                            Slug:
                          </label>
                          <Field
                            type="text"
                            name={`semesters[${semesterIndex}].courses[${courseIndex}].slug`}
                            placeholder="Course Slug"
                            className={inputBox}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() =>
              setFieldValue("semesters", [
                ...values.semesters,
                {
                  name: "",
                  slug: "",
                  courses: [{ name: "", slug: "" }],
                },
              ])
            }
          >
            Add Semester
          </button>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default ProgramForm;

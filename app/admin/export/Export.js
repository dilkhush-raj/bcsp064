"use client";
import xlsx from "json-as-xlsx";

function Export({ userData }) {
//   console.log(userData);
  const downloadFile = () => {
    
    let data = [
        {
          sheet: "Users",
          columns: [
            { label: "Email", value: "email" },
            { label: "Enrolment", value: "enrollment" },
            // { label: "Image", value: "image" },
            { label: "Name", value: "name" },
            { label: "Programme", value: "programme" },
            { label: "Role", value: "role" },
            // { label: "__v", value: "__v" },
            // { label: "_id", value: "_id" }
          ],
          content: userData?.allUser?.map(user => ({
            email: user.email,
            enrollment: user.enrollment,
            // image: user.image,
            name: user.name,
            programme: user.programme,
            role: user.role,
            // __v: user.__v,
            // _id: user._id
          })) || []
        }
      ];
      
      
    console.log(data1);

    let settings = {
      fileName: "MySpreadsheet",
    };
    xlsx(data, settings);
  };

  return (
    <div id="app">
      <h1>Testing json-as-xlsx</h1>
      <button onClick={downloadFile}>Download</button>
    </div>
  );
}

export default Export;

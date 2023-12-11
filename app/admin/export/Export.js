"use client";
import xlsx from "json-as-xlsx";

function Export({ userData }) {
  const downloadFile = () => {
    
    let data = [
        {
          sheet: "Users",
          columns: [
            { label: "Email", value: "email" },
            { label: "Enrolment", value: "enrollment" },
            { label: "Name", value: "name" },
            { label: "Programme", value: "programme" },
            { label: "Role", value: "role" },
          ],
          content: 
          // userData?.allUser?.map(user => ({
          //   email: user.email,
          //   enrollment: user.enrollment,
          //   name: user.name,
          //   programme: user.programme,
          //   role: user.role,
          // })) || 
          []
        }
      ];

    let settings = {
      fileName: "MySpreadsheet",
    };
    xlsx(data, settings);
  };

  return (
    <div className="flex items-center justify-center my-10 flex-col gap-10">
      <h1>Testing file export to Excel Sheet</h1>
      <button onClick={downloadFile} className="bg-blue-300 p-2">Download</button>
    </div>
  );
}

export default Export;

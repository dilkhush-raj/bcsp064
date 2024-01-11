import { PiBooksFill } from "react-icons/pi";
import { MdAccountCircle, MdOutlineHelp, MdQuestionAnswer } from "react-icons/md";
import { FaLink } from "react-icons/fa";
export const website_title = "TPS IGNOU Student Zone";
export const impLinks = [
    {
      label: "IGNOU Official Website",
      link: "http://ignou.ac.in",
    },
    {
      label: "eGyankosh",
      link: "https://www.egyankosh.ac.in/handle/123456789/404",
    },
    {
      label: "Assignments",
      link: "https://webservices.ignou.ac.in/assignments/Bachelor-Degree/BCA/bca.html",
    },
    {
      label: "Previous Year Questions",
      link: "https://webservices.ignou.ac.in/Pre-Question/",
    },
    {
      label: "Exam Datesheet",
      link: "http://www.ignou.ac.in/ignou/aboutignou/division/sed/datesheet",
    },
    {
      label: "Student Login",
      link: "https://admission.ignou.ac.in/changeadmdata/AdmissionStatusNew.asp",
    },
    {
      label: "Re-registration",
      link: "https://onlinerr.ignou.ac.in/",
    },
    {
      label: "Fresh Admission",
      link: "https://ignouadmission.samarth.edu.in/",
    },
    {
      label: "Exam Form",
      link: "https://exam.ignou.ac.in/",
    },
    {
      label: "Student Grievance",
      link: "https://igram.ignou.ac.in/",
    },
    {
      label: "TEE Result",
      link: "http://www.ignou.ac.in/ignou/studentzone/results/2",
    },
    {
      label: "Hall Ticket for TEE",
      link: "http://www.ignou.ac.in/ignou/studentzone/results/6",
    },
    {
      label: "Grade Card",
      link: "https://gradecard.ignou.ac.in/gradecard/",
    },
    {
      label: "Gyan Vani",
      link: "http://www.ignou.ac.in/ignou/aboutignou/broadcast/3",
    },
    {
      label: "Gyan Darshan",
      link: "http://www.ignou.ac.in/ignou/aboutignou/broadcast/1",
    },
    {
      label: "IGNOU Online",
      link: "http://www.ignouonline.ac.in/",
    },
    {
      label: "IGNOU Wiki",
      link: "http://ieg.ignou.ac.in/wiki/index.php/Main_Page",
    },
  ];
export const semesterBgColors = [
  "bg-red-300", "bg-yellow-300", "bg-[#00aaff]", "bg-[#ffa939]", "bg-[#10ff90]", "bg-[#a069ff]"
]

export const navLinks = [
  {
    label: "Account",
    route: "/account",
    icon: <MdAccountCircle />
  },
  {
    label: "Ask Questions",
    route: "/ask-questions",
    icon: <MdQuestionAnswer />
  },
  {
    label: "Programme",
    route: "/programme",
    icon: <PiBooksFill />
  },
  {
    label: "Quick Links",
    route: "/quick-links",
    icon: <FaLink />
  },
  {
    label: "Help",
    route: "/help",
    icon: <MdOutlineHelp />
  }
];
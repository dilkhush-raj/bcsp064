import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";

const Sans = localFont({ src: "../../fonts/Sans.ttf" });

const crimson = Open_Sans({
  weight: ["300","400","500","600","700","800"],
  subsets: ["latin"],
});
export default function Heading({children}) {
  return <span className={crimson.className}>{children}</span>;
}
export function H1({ children }) {
  return (
    <h1 className={crimson.className + "text-3xl  md:text-4xl capitalize font-bold"}>
      {children}
    </h1>
  );
}
export function H2({ children }) {
  return (
    <h2 className={crimson.className + "text-2xl  capitalize font-bold"}>
      {children}
    </h2>
  );
}
export function H3({ children }) {
  return (
    <h3 className={crimson.className + "text-xl md:text-2xl capitalize font-bold"}>
      {children}
    </h3>
  );
}

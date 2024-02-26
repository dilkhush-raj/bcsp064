"use client";
import { useState } from "react";

export default function NotLoggedUserHome({ children }) {
  const [programme, setProgramme] = useState();
  return (
    <>
    <button onClick={() => setProgramme("BCA")}>BCA</button>
    </>
  );
}

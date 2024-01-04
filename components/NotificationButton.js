"use client";
import { IoMdNotifications } from "react-icons/io";

export default function NotificationButton() {
  const handleNotification = () => {
    Notification.requestPermission().then((result) => {
      if (result === "granted") {
        console.log("Permission granted for notification");
      }
    });
  };
  return <button onClick={handleNotification} className="flex items-center gap-2 p-2 bg-white rounded-l-full">Allow Notification <IoMdNotifications /></button>;
}

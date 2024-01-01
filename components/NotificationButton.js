"use client";
export default function NotificationButton() {

  function randomNotification() {
    // const randomItem = Math.floor(Math.random() * games.length);
    const notifTitle = "TPS IGNOU";
    const notifBody = "Notification by Dilkhush";
    const notifImg = "/img/full_logo.png";
    const options = {
      body: notifBody,
      icon: notifImg,
    };
    new Notification(notifTitle, options);
    setTimeout(randomNotification, 30000);
  }
  

  const handleNotification = () => {
    Notification.requestPermission().then((result) => {
      if (result === "granted") {
        // randomNotification();
        console.log("Permission granted for notification");
      }
    });
  };
  return <button onClick={handleNotification}>Allow Notification</button>;
}

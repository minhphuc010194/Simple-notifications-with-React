import { useEffect } from "react";

const NotificationComponent = () => {
   useEffect(() => {
      if (Notification.permission !== "granted") {
         Notification.requestPermission();
      }
   }, []);

   const showNotification = () => {
      if (Notification.permission === "granted") {
         const notification = new Notification("New Notification", {
            body: "This is the notification content.",
            icon: "./vite.svg", // Optional icon path
            image: "./vite.svg",
         });

         // You can also add event listeners to the notification object
         notification.onclick = () => {
            // Handle notification click event
            window.location.href = "https://google.com";
         };
      }
   };
   const handleClick = () => {
      showNotification();
   };
   return (
      <div>
         <button onClick={handleClick}>Show Notification</button>
      </div>
   );
};

export default NotificationComponent;

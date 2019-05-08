import React, { useState, useEffect } from "react";

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    // ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    handleStatusChange({isOnline:true})
    console.log("1111");
    return () => {
        console.log("2222");
        handleStatusChange({isOnline:false})
    };
  });

  if (isOnline === null) {
    return "Loading...";
    
  }
  return isOnline ? "Online" : "Offline";
}

export default FriendStatus;

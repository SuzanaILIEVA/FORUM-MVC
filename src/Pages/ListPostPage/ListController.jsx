import React, { useEffect, useState } from "react";
import api from "./../../constants";
import ListPostView from "./ListPostView";

const ListController = () => {
  const [formData, setFormData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    api
      .get("/posts")
      .then((res) => setFormData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ListPostView
      formData={formData}
      showPopup={showPopup}
      setShowPopup={setShowPopup}
      userName={userName}
      setUserName={setUserName}
    />
  );
};

export default ListController;

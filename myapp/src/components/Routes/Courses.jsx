import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { userData } from "../config";

export const Courses = () => {
  const history = useHistory();
  useEffect(() => {
    if (userData.token == localStorage.getItem("token"));
    history.push("/");
  }, []);
  return <div>this is courses</div>;
};

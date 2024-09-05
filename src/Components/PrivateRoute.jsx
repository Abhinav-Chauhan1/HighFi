import React, { useEffect, useState } from "react";
import { Route, Navigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const [authorized, setAuthorized] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthorization = async () => {
      const { id } = rest;
      if (rest.user && id) {
        try {
          const docRef = doc(db, "blogs", id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setAuthorized(docSnap.data().userId === rest.user.uid);
          } else {
            setAuthorized(false);
          }
        } catch (error) {
          console.error("Error checking authorization:", error);
          setAuthorized(false);
        }
        setLoading(false);
      } else {
        setAuthorized(false);
        setLoading(false);
      }
    };

    checkAuthorization();
  }, [rest.user, rest.id]);

  if (loading) return <div>Loading...</div>;

  return authorized ? <Component {...rest} /> : <Navigate to="/" />;
};

export default PrivateRoute;

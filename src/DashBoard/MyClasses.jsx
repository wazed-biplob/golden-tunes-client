import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/my-classes/instructor/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, [user?.email]);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Available Seats</th>
              <th>Total Enrolled Students</th>
              <th>Status</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {classes.map((singleClass, i) => (
              <>
                <tr>
                  <th>{i + 1}</th>
                  <td>{singleClass.className}</td>
                  <td>{singleClass.availableSeats}</td>
                  <td>{singleClass.totalEnrolledStudents}</td>
                  <td>{singleClass.status}</td>
                  <td>{singleClass.Feedback}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;

import React from "react";
import useEnrolledClasses from "../Hooks/useEnrolledClasses";

const EnrolledClasses = () => {
  const [enrolledClasses] = useEnrolledClasses();
  console.log(enrolledClasses);
  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Class Name</th>
                <th>Instructor Email</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {enrolledClasses?.map((singleClass, i) => (
                <>
                  <tr>
                    <th>
                      <label>{i + 1}</label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">
                            {singleClass.className}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{singleClass.instructorEmail}</td>
                    <td>${singleClass.price}</td>
                    <th className="flex gap-2">
                      <p>Enrolled</p>
                    </th>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EnrolledClasses;

import React from "react";
import useEnrolledClasses from "../../Hooks/useEnrolledClasses";

const PaymentHistory = () => {
  const [enrolledClasses] = useEnrolledClasses();
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Instructor Email</th>
              <th>Student Email</th>
              <th>Price</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {enrolledClasses?.map((singleClass, i) => (
              <>
                <tr>
                  <th>{i + 1}</th>
                  <td>{singleClass.className}</td>
                  <td>{singleClass.instructorEmail}</td>
                  <td>{singleClass.studentEmail}</td>
                  <td>{singleClass.price}</td>
                  <td>{singleClass.transactionId}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;

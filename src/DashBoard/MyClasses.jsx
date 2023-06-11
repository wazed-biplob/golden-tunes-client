import useMyClasses from "../Hooks/useMyClasses";

const MyClasses = () => {
  const [myClasses] = useMyClasses();

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
            {myClasses?.map((singleClass, i) => (
              <>
                <tr>
                  <th>{i + 1}</th>
                  <td>{singleClass.className}</td>
                  <td>{singleClass.availableSeats}</td>
                  <td>{singleClass.totalEnrolledStudents}</td>
                  <td>{singleClass.status}</td>
                  <td>{singleClass.feedback}</td>
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

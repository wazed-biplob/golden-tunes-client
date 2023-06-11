import useClasses from "../Hooks/useClasses";

const ManageClasses = () => {
  const [classes] = useClasses();
  console.log(classes);
  const handleApproveClass = (id) => {
    fetch(`https://golden-tunes-server.vercel.app/approve-class/${id}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Class has been Approved.");
        }
      });
  };
  const handleDenyClass = (id) => {
    fetch(`https://golden-tunes-server.vercel.app/deny-class/${id}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Class Has Been Denied.");
        }
      });
  };
  const handleFeedback = (id) => {
    const feedback = prompt("Write Reasons this class is denied for.");
    if (prompt) {
      fetch(`https://golden-tunes-server.vercel.app/class-feedback/${id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ feedback }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            alert(
              "Feedback Has been recorded. The instructor can view the feedback."
            );
          }
        });
    }
  };
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image and ClassName</th>
              <th>Instructor Name & Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {classes?.map((singleClass, i) => (
              <>
                <tr>
                  <th>
                    <label>
                      <p>{i + 1}</p>
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={singleClass.image} alt="image" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{singleClass.className}</div>
                        <div className="text-sm opacity-50"></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {singleClass.instructorName}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {singleClass.instructorEmail}
                    </span>
                  </td>
                  <td> {singleClass.availableSeats}</td>
                  <td>${singleClass.price}</td>
                  <td>{singleClass.status}</td>
                  <th className="flex gap-2">
                    <button
                      disabled={singleClass.status === "approved"}
                      onClick={() => handleApproveClass(singleClass._id)}
                      className="btn btn-secondary btn-xs"
                    >
                      Approve
                    </button>
                    <button
                      disabled={singleClass.status === "denied"}
                      onClick={() => handleDenyClass(singleClass._id)}
                      className="btn btn-primary btn-xs"
                    >
                      Deny
                    </button>
                    <button
                      onClick={() => handleFeedback(singleClass._id)}
                      className="btn btn-warning btn-xs"
                    >
                      Send Feedback
                    </button>
                  </th>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageClasses;

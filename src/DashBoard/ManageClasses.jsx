import useClasses from "../Hooks/useClasses";

const ManageClasses = () => {
  const [classes] = useClasses();
  console.log(classes);

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
                          <img
                            src="/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
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
                    <button className="btn btn-secondary btn-xs">
                      Approve
                    </button>
                    <button className="btn btn-primary btn-xs">Deny</button>
                    <button className="btn btn-warning btn-xs">
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

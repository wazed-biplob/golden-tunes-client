import { useNavigate } from "react-router-dom";
import useSelectedClasses from "../Hooks/useSelectedClasses";

const SelectedClasses = () => {
  const [selectedClasses] = useSelectedClasses();
  const navigate = useNavigate();
  const handlePayment = (id) => {
    navigate("/checkout");
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {selectedClasses?.map((singleClass, i) => (
              <>
                <tr>
                  <th>
                    <label>{i + 1}</label>
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
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {singleClass.instructorEmail}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>${singleClass.price}</td>
                  <th className="flex gap-2">
                    <button
                      onClick={() => handlePayment(singleClass._id)}
                      className="btn btn-primary btn-xs"
                    >
                      Pay
                    </button>
                    <button className="btn btn-info btn-xs text-white">
                      Delete
                    </button>
                  </th>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;

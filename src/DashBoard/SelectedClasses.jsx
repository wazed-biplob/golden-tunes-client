import { Link } from "react-router-dom";
import useSelectedClasses from "../Hooks/useSelectedClasses";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

// TODO : DELETE FROM CART

const SelectedClasses = () => {
  const [selectedClasses, refetch] = useSelectedClasses();
  const handleDeleteClass = (id) => {
    fetch(`https://golden-tunes-server.vercel.app/delete-class/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };
  if (selectedClasses?.length !== 0) {
    console.log(selectedClasses);
    return (
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
                      <Link to={`/dashboard/payment/${singleClass._id}`}>
                        {" "}
                        <button className="btn btn-primary btn-xs">Pay</button>
                      </Link>
                      <button
                        onClick={() => handleDeleteClass(singleClass._id)}
                        className="btn btn-info btn-xs text-white"
                      >
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
  } else {
    return <p>Your Class Cart is Empty.</p>;
  }
};

export default SelectedClasses;

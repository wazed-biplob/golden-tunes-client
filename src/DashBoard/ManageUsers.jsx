import { useContext } from "react";
import useUsers from "../Hooks/useUser";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageUsers = () => {
  const [refetch, users] = useUsers();

  const handleMakeAdmin = () => {};
  const handleMakeInstructor = (id) => {
    fetch(`https://golden-tunes-server.vercel.app/users/instructor/${id}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>User Name </th>
              <th>User Email</th>
              <th>User Role</th>
              <th>Make Instructor</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <>
                <tr>
                  <th>
                    <label>
                      <p>{i + 1}</p>
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{user.name}</div>
                        <div className="text-sm opacity-50"></div>
                      </div>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <th>
                    {
                      <button
                        disabled={
                          user?.role === "instructor" || user?.role === "admin"
                        }
                        className="btn btn-primary btn-xs"
                        onClick={() => handleMakeInstructor(user._id)}
                      >
                        Make Instructor
                      </button>
                    }
                  </th>
                  <th>
                    <button
                      disabled={user?.role === "admin"}
                      className="btn btn-secondary btn-xs"
                      onclick={handleMakeAdmin}
                    >
                      Make Admin
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

export default ManageUsers;

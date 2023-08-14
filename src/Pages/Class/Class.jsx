import { useContext, useEffect, useState } from "react";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import useUserRole from "../../Hooks/useUserRole";
import { AuthContext } from "../../Providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import { FaMoneyCheckAlt, FaUserAlt } from "react-icons/fa";
import { MdEmail, MdEventSeat } from "react-icons/md";
import Swal from "sweetalert2";

const Class = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [approvedClasses, setApprovedClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://golden-tunes-server.vercel.app/approved-classes`)
      .then((res) => res.json())
      .then((data) => {
        setApprovedClasses(data);
        setIsLoading(false);
      });
  }, []);

  const [userRole] = useUserRole();

  console.log(approvedClasses);
  const handleSelectClass = (id) => {
    const selectedClass = approvedClasses.find(
      (singleClass) => singleClass._id === id
    );
    // if user exists he/she can select classes
    if (user) {
      const selectedClassInfo = {
        classId: id,
        className: selectedClass.className,
        userEmail: user?.email,
        instructorEmail: selectedClass.instructorEmail,
        price: selectedClass.price,
      };
      console.log(selectedClassInfo);
      fetch("https://golden-tunes-server.vercel.app/selected-classes", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClassInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Class Selected",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong! Try Again Later.",
            });
          }
        });
    } else {
      alert("Please, Log in to select the class.");
      navigate("/login", { from: location });
    }
  };
  return (
    //TODO : USE ICONs for price, email, seats, name
    <>
      <SectionHeading
        heading={`All Classes`}
        subheading={`Choose your favorite`}
      />{" "}
      <div className="grid grid-cols-3 gap-4 mt-2 pb-2">
        {isLoading ? (
          <>
            {" "}
            <div
              className="flex justify-center items-center"
              style={{ height: "100vh", width: "100vw" }}
            >
              <progress className="progress w-56"></progress>
            </div>
          </>
        ) : (
          approvedClasses?.map((singleClass) => (
            <>
              <div
                style={
                  singleClass.availableSeats === 0
                    ? { backgroundColor: "red" }
                    : {}
                }
                className="card w-full bg-base-100 shadow-xl"
              >
                <figure className="px-2 pt-2">
                  <img
                    style={{ height: "300px" }}
                    src={singleClass.image}
                    alt={singleClass.className}
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{singleClass.className}</h2>
                  <div className="flex justify-center items-center gap-x-2">
                    <FaUserAlt style={{ color: "lightgrey" }} />
                    <p>{singleClass.instructorName}</p>
                  </div>

                  <div className="flex justify-center items-center gap-x-2">
                    {" "}
                    <MdEmail />
                    <p className="font-extrabold">
                      {singleClass.instructorEmail}
                    </p>
                  </div>
                  <div className="flex gap-4 justify-center items-center">
                    <div className="flex items-center gap-x-2">
                      <FaMoneyCheckAlt style={{ fontSize: "26px" }} />
                      <p>${singleClass.price}</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <MdEventSeat style={{ fontSize: "26px" }} />
                      <p>Seats : {singleClass.availableSeats}</p>
                    </div>
                  </div>
                  <div className="card-actions">
                    <button
                      onClick={() => handleSelectClass(singleClass._id)}
                      disabled={
                        userRole === "instructor" ||
                        userRole === "admin" ||
                        singleClass.availableSeats === 0
                      }
                      className="btn btn-info text-white"
                    >
                      Book to Enroll
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))
        )}
      </div>
    </>
  );
};

export default Class;

import { useContext, useEffect, useState } from "react";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import useUserRole from "../../Hooks/useUserRole";
import { AuthContext } from "../../Providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";

const Class = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [approvedClasses, setApprovedClasses] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/approved-classes`)
      .then((res) => res.json())
      .then((data) => setApprovedClasses(data));
  }, []);
  const [userRole] = useUserRole();

  console.log(approvedClasses);
  const handleSelectClass = (id) => {
    const selectedClass = approvedClasses.find(
      (singleClass) => singleClass._id === id
    );

    if (user) {
      const selectedClassInfo = {
        classId: id,
        className: selectedClass.className,
        userEmail: user?.email,
        instructorEmail: selectedClass.instructorEmail,
        price: selectedClass.price,
      };
      console.log(selectedClassInfo);
      fetch("http://localhost:5000/selected-classes", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClassInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            alert("Class has been Selected Successfully.");
          } else {
            alert("There has been an error.");
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
      <div className="grid grid-cols-3 gap-4 mt-2">
        {approvedClasses?.map((singleClass) => (
          <>
            <div
              style={
                singleClass.availableSeats === "0"
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
                <p>{singleClass.instructorName}</p>
                <p>{singleClass.instructorEmail}</p>
                <div className="flex gap-4">
                  <p>${singleClass.price}</p>
                  <p>Seats : {singleClass.availableSeats}</p>
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
        ))}
      </div>
    </>
  );
};

export default Class;

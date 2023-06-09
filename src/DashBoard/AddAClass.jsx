import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const AddAClass = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const handleAddAClass = (e) => {
    e.preventDefault();
    const form = e.target;
    const className = form.class_name.value;
    const image = form.pictureURL.value;
    const instructorName = user?.displayName;
    const instructorEmail = user?.email;

    const price = form.price.value;
    const seats = form.seats.value;
    const classInfo = {
      availableSeats: seats,
      className: className,
      feedback: "",
      image: image,
      instructorEmail: instructorEmail,
      instructorName: instructorName,
      price: price,
      status: "pending",
      totalEnrolledStudents: 0,
    };
    console.log(classInfo);
    fetch("http://localhost:5000/add-class", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(classInfo),
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.insertedId) {
          alert("Class Has Been Added Successfully.");
          form.reset();
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleAddAClass} className="p-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Image</span>
            </label>
            <input
              type="text"
              placeholder="Picture URL"
              className="input input-bordered"
              name="pictureURL"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
              type="text"
              placeholder="Class Name"
              className="input input-bordered"
              name="class_name"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <input
              type="text"
              placeholder={user?.displayName}
              className="input input-bordered"
              name="name"
              disabled
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Email</span>
            </label>
            <input
              type="email"
              placeholder={user?.email}
              className="input input-bordered"
              name="email"
              disabled
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Seats</span>
            </label>
            <input
              type="number"
              placeholder="Available Seats"
              className="input input-bordered"
              name="seats"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price to Enroll"
              className="input input-bordered"
              name="price"
            />
          </div>
        </div>

        <input
          type="submit"
          style={{ backgroundColor: "lightblue" }}
          className=" btn btn-block my-8 font-extrabold"
          value="Add Class"
        />
      </form>
    </div>
  );
};

export default AddAClass;

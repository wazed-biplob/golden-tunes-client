import React from "react";

const AddAClass = () => {
  const handleAddAClass = (e) => {
    console.log(e);
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
              placeholder="Toy Name"
              className="input input-bordered"
              name="classname"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered"
              name="name"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
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
              placeholder="Rating"
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

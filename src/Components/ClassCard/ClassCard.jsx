/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
const ClassCard = ({ singleClass }) => {
  const {
    className,
    image,
    status,
    feedback,
    instructorName,
    totalEnrolledStudents,
    price,
  } = singleClass;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-extrabold">
            {className}
            <div
              style={{
                height: "fit-content",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "12px",
              }}
              className="font-bold text-gray-500"
            >
              {instructorName}
            </div>
          </h2>
          <p>{feedback}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              Students : {totalEnrolledStudents}
            </div>
            <div className="badge badge-outline">Price : ${price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;

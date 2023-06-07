/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
const ClassCard = ({ singleClass }) => {
  console.log(singleClass);
  const {
    className,
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
          {/* <img
            src=""
            alt="Shoes"
          /> */}
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {instructorName}
            <div className="badge badge-primary">{className}</div>
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

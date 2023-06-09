/* eslint-disable react/prop-types */

const SectionHeading = ({ heading, subheading }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <h1 className="text-4xl font-extrabold text-gray-600">{heading}</h1>
      <h1 className="text-xl font-extrabold pt-3 text-gray-500">
        {subheading}
      </h1>
    </div>
  );
};

export default SectionHeading;

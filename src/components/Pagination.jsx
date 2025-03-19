/* eslint-disable react/prop-types */
function Pagination({ handlePrevious, handleNext, pageNumber }) {
  return (
    <div className="flex justify-center items-center p-3 bg-gray-800 text-white rounded-lg gap-4 mt-4">
      <i
        className="fa-solid fa-arrow-left hover:cursor-pointer text-lg hover:text-gray-300"
        onClick={handlePrevious}
      ></i>
      <div className="text-lg font-bold">{pageNumber}</div>
      <i
        className="fa-solid fa-arrow-right hover:cursor-pointer text-lg hover:text-gray-300"
        onClick={handleNext}
      ></i>
    </div>
  );
}

export default Pagination;

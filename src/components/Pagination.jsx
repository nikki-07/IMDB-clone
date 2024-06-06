/* eslint-disable react/prop-types */
function Pagination({ handlePrevious, handleNext, pageNumber }) {
  return (
    <div className="flex justify-center items-center p-2 border-2 bg-gray-400/20">
      <i
        className="fa-solid fa-arrow-left hover:cursor-pointer"
        onClick={handlePrevious}
      ></i>
      <div className="mx-3">{pageNumber}</div>
      <i
        className="fa-solid fa-arrow-right hover:cursor-pointer"
        onClick={handleNext}
      ></i>
    </div>
  );
}
export default Pagination;

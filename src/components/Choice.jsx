/* eslint-disable react/prop-types */
const Choice = ({ image, name, classColor }) => {
  const borderColor = {
    rock: "border-red-700",
    paper: "border-blue-700",
    scissors: "border-yellow-700",
  };

  return (
    <div
      className={`${classColor} w-36 h-36 md:w-80 md:h-80 flex justify-center items-center rounded-[50%] shadow-2xl border-b-8 ${borderColor[name]}`}>
      <div className="bg-white w-28 h-28 md:w-60 md:h-60 flex justify-center items-center rounded-[50%] select-none border-t-8 border-gray-300">
        <img className="w-12 md:w-24" src={image} alt={`icon`} />
      </div>
    </div>
  );
};

export default Choice;

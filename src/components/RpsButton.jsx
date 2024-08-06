/* eslint-disable react/prop-types */
const RpsButton = ({ img, name, classColor }) => {
  const borderColor = {
    rock: "border-red-700",
    paper: "border-blue-700",
    scissors: "border-yellow-700",
  };

  return (
    <div
      className={`${classColor} w-36 h-36 sm:w-44 sm:h-44 flex justify-center items-center rounded-[50%] border-b-8 shadow-2xl active:shadow-none transition-shadow ${borderColor[name]}`}>
      <div className="bg-white w-28 h-28 sm:w-32 sm:h-32 flex justify-center items-center rounded-[50%] select-none border-t-8 border-gray-300">
        <img src={img} alt={`${name} icon`} />
      </div>
    </div>
  );
};

export default RpsButton;

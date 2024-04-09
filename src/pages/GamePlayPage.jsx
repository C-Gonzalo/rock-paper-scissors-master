import { useEffect, useState } from "react";
import closeIco from "../assets/images/icon-close.svg";
import paper from "../assets/images/icon-paper.svg";
import rock from "../assets/images/icon-rock.svg";
import scissors from "../assets/images/icon-scissors.svg";
import rulesImg from "../assets/images/image-rules.svg";
import gameNameLogo from "../assets/images/logo.svg";

const GamePlayPage = () => {
  const [rulesModal, setRulesModal] = useState(false);
  const [battleTime, setBattleTime] = useState(false);
  const [playerPicked, setPlayerPicked] = useState("");
  const [housePicked, setHousePicked] = useState("");
  const [winner, setWinner] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (battleTime) {
      houseOptionPicked();
    }
  }, [battleTime]);

  useEffect(() => {
    if (battleTime && housePicked.length > 0) {
      setTimeout(() => {
        handleWinner();
      }, 1000);
    }
  }, [housePicked]);

  const handlePick = (optPicked) => {
    console.log(optPicked);
    setBattleTime(true);
    setPlayerPicked(optPicked);
  };

  const playerOptionPicked = () => {
    if (playerPicked === "paper") {
      return (
        <div className="paperGradient w-40 h-40 md:w-80 md:h-80 flex justify-center items-center rounded-[50%] shadow-2xl">
          <div className="bg-white w-28 h-28 md:w-60 md:h-60 flex justify-center items-center rounded-[50%] select-none">
            <img className="w-12 md:w-24" src={paper} alt="Paper Icon" />
          </div>
        </div>
      );
    }

    if (playerPicked === "scissors") {
      return (
        <div className="scissorsGradient w-40 h-40 md:w-80 md:h-80 flex justify-center items-center rounded-[50%] shadow-2xl">
          <div className="bg-white w-28 h-28 md:w-60 md:h-60 flex justify-center items-center rounded-[50%] select-none">
            <img className="w-12 md:w-24" src={scissors} alt="Paper Icon" />
          </div>
        </div>
      );
    }

    if (playerPicked === "rock") {
      return (
        <div className="rockGradient w-40 h-40 md:w-80 md:h-80 flex justify-center items-center rounded-[50%] shadow-2xl">
          <div className="bg-white w-28 h-28 md:w-60 md:h-60 flex justify-center items-center rounded-[50%] select-none">
            <img className="w-12 md:w-24" src={rock} alt="Paper Icon" />
          </div>
        </div>
      );
    }
  };

  const houseOptionPicked = async () => {
    const options = ["rock", "paper", "scissors"];

    const randomIndex = Math.floor(Math.random() * options.length);
    console.log(randomIndex);
    setHousePicked(options[randomIndex]);
  };

  const renderHousePicked = () => {
    if (housePicked === "paper") {
      return (
        <div className="paperGradient w-40 h-40 md:w-80 md:h-80 flex justify-center items-center rounded-[50%] shadow-2xl">
          <div className="bg-white w-28 h-28 md:w-60 md:h-60 flex justify-center items-center rounded-[50%] select-none">
            <img className="w-12 md:w-24" src={paper} alt="Paper Icon" />
          </div>
        </div>
      );
    }

    if (housePicked === "scissors") {
      return (
        <div className="scissorsGradient w-40 h-40 md:w-80 md:h-80 flex justify-center items-center rounded-[50%] shadow-2xl">
          <div className="bg-white w-28 h-28 md:w-60 md:h-60 flex justify-center items-center rounded-[50%] select-none">
            <img className="w-12 md:w-24" src={scissors} alt="Paper Icon" />
          </div>
        </div>
      );
    }

    if (housePicked === "rock") {
      return (
        <div className="rockGradient w-40 h-40 md:w-80 md:h-80 flex justify-center items-center rounded-[50%] shadow-2xl">
          <div className="bg-white w-28 h-28 md:w-60 md:h-60 flex justify-center items-center rounded-[50%] select-none">
            <img className="w-12 md:w-24" src={rock} alt="Paper Icon" />
          </div>
        </div>
      );
    }
  };

  const handleWinner = async () => {
    await checkWinner();
  };

  const handlePlayAgain = () => {
    setBattleTime(false);
    setPlayerPicked("");
    setHousePicked("");
    setWinner("");
  };

  const checkWinner = async () => {
    console.log("Checking winner");

    const resultCombinations = {
      paper: {
        paper: "tie",
        scissors: "house",
        rock: "player",
      },
      scissors: {
        paper: "player",
        scissors: "tie",
        rock: "house",
      },
      rock: {
        paper: "house",
        scissors: "player",
        rock: "tie",
      },
    };

    const result = resultCombinations[playerPicked][housePicked];

    // switch (result) {
    //   case "tie":
    //     console.log("Tie");
    //     break;
    //   case "player":
    //     console.log("You win");
    //     break;
    //   case "house":
    //     console.log("You Lose");
    //     break;
    //   default:
    //     console.log("Invalid result");
    //     break;
    // }

    result === "player" ? setScore(score + 1) : result === "house" && setScore(score - 1);

    setWinner(result);
  };

  return (
    <main className="pageBackground w-full min-h-screen flex flex-col items-center justify-between select-none">
      <header className="w-[80%] max-w-[700px] flex justify-between items-center pl-6 pr-4 py-4 rounded-md lg:rounded-xl mt-5 md:mt-10">
        <div className="flex items-center select-none">
          <img
            src={gameNameLogo}
            alt="Rock, Paper, Scissors logo"
            className="w-[90px] sm:w-[162px]"
          />
        </div>
        <div className="w-24 py-2 sm:w-36 sm:h-28 bg-white flex flex-col justify-center items-center rounded-lg">
          <p className="scoreText text-xs sm:text-sm font-[700]">S C O R E</p>
          <p className="darkText text-5xl sm:text-6xl font-[700]">{score}</p>
        </div>
      </header>
      <div className="w-full flex flex-col items-center justify-between">
        {!battleTime ? (
          <div className="flex justify-center items-center sm:mt-20">
            <div className="bgTriangle relative bg-contain bg-center flex w-[220px] h-[185px] sm:w-[313px] sm:h-[278px] ">
              <div
                className="paperGradient absolute -left-14 -top-14 w-36 h-36 sm:w-44 sm:h-44 flex self-start justify-center items-center rounded-[50%] cursor-pointer active:scale-90 transition-all shadow-2xl active:shadow-none"
                onClick={() => handlePick("paper")}>
                <div className="bg-white w-28 h-28 sm:w-32 sm:h-32 flex justify-center items-center rounded-[50%] select-none">
                  <img src={paper} alt="Paper Icon" />
                </div>
              </div>

              <div
                className="scissorsGradient absolute -right-14 -top-14 w-36 h-36 sm:w-44 sm:h-44 flex self-start justify-center items-center rounded-[50%] cursor-pointer active:scale-90 transition-all shadow-2xl active:shadow-none"
                onClick={() => handlePick("scissors")}>
                <div className="bg-white w-28 h-28 sm:w-32 sm:h-32 flex justify-center items-center rounded-[50%] select-none">
                  <img src={scissors} alt="Paper Icon" />
                </div>
              </div>

              <div
                className="flex justify-center absolute -bottom-12 w-full cursor-pointer active:scale-90 transition-all"
                onClick={() => handlePick("rock")}>
                <div className="rockGradient w-36 h-36 sm:w-44 sm:h-44 flex self-start justify-center items-center rounded-[50%] shadow-2xl active:shadow-none">
                  <div className="bg-white w-28 h-28 sm:w-32 sm:h-32 flex justify-center items-center rounded-[50%] select-none">
                    <img src={rock} alt="Paper Icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="xl:w-full max-w-[1000px] flex">
            <div className="relative w-full flex justify-center xl:justify-between items-center gap-4 sm:gap-10 sm:mt-10">
              <div className="flex flex-col-reverse xl:flex-col gap-10 2xl:gap-20 items-center justify-end">
                <p className="mt-8 xl:m-0 sm:text-xl md:text-3xl text-white font-[700]">
                  YOU PICKED
                </p>
                {/* <div className="bg-[#14233D] bg-opacity-90 p-28 rounded-full mt-32"></div> */}
                {playerOptionPicked()}
              </div>

              <div className="flex flex-col-reverse xl:flex-col gap-10 2xl:gap-20 items-center">
                <p className="mt-8 xl:m-0 sm:text-xl md:text-3xl text-white font-[700]">
                  THE HOUSE PICKED
                </p>
                {renderHousePicked()}
              </div>
            </div>
          </div>
        )}
      </div>

      {battleTime && winner.length > 0 && (
        <div className="xl:w-[30%] flex flex-col items-center justify-center gap-5 sm:mt-5">
          <div>
            {winner === "player" ? (
              <span className="text-3xl md:text-5xl font-[600] text-white">YOU WIN</span>
            ) : winner === "house" ? (
              <span className="text-3xl md:text-5xl font-[600] text-white">YOU LOSE</span>
            ) : (
              <span className="text-3xl md:text-5xl font-[600] text-white">TIE</span>
            )}
          </div>
          <div>
            <button
              onClick={handlePlayAgain}
              type="button"
              className={`${
                winner === "house" ? "text-red-500" : "darkText"
              } bg-white px-16 py-3 font-[700] text-sm rounded-md hover:bg-slate-200 active:scale-90 transition-all`}>
              PLAY AGAIN
            </button>
          </div>
        </div>
      )}

      <div className="flex w-full justify-end pr-10 mb-5 md:mb-10">
        <div
          className="px-10 py-2 outline outline-slate-500 outline-2 text-white font-[600] rounded-md cursor-pointer hover:bg-white hover:text-black hover:outline-none transition-colors"
          onClick={() => setRulesModal(true)}>
          R U L E S
        </div>
      </div>

      {rulesModal && (
        <div className="absolute w-full h-screen flex justify-center items-center bg-black bg-opacity-50">
          <div className="relative w-full h-full sm:w-[450px] sm:h-[430px] flex flex-col justify-center sm:justify-between bg-white  rounded-lg p-8">
            <div className="flex justify-center sm:justify-start items-center">
              <span className="absolute top-20 sm:top-8 darkText text-4xl font-[700]">RULES</span>
              <div
                className="flex self-start absolute bottom-20 sm:right-10 sm:top-10 hover:scale-125 transition-all cursor-pointer"
                onClick={() => setRulesModal(false)}>
                <img className="w-[24px]" src={closeIco} alt="Close Icon" />
              </div>
            </div>

            <div className="flex justify-center items-center">
              <img src={rulesImg} alt="Rules Image" />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default GamePlayPage;

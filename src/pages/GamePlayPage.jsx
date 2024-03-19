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

  useEffect(() => {
    if (battleTime) {
      houseOptionPicked();
    }
  }, [battleTime]);

  useEffect(() => {
    if (battleTime && housePicked.length > 0) {
      setTimeout(() => {
        handleWinner();
      }, 1500);
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
        <div className="paperGradient h-80 w-80 flex justify-center items-center rounded-[50%] shadow-2xl mt-32">
          <div className="bg-white h-60 w-60 flex justify-center items-center rounded-[50%] select-none">
            <img className="w-24" src={paper} alt="Paper Icon" />
          </div>
        </div>
      );
    }

    if (playerPicked === "scissors") {
      return (
        <div className="scissorsGradient h-80 w-80 flex justify-center items-center rounded-[50%] shadow-2xl mt-32">
          <div className="bg-white h-60 w-60 flex justify-center items-center rounded-[50%] select-none">
            <img className="w-24" src={scissors} alt="Paper Icon" />
          </div>
        </div>
      );
    }

    if (playerPicked === "rock") {
      return (
        <div className="rockGradient h-80 w-80 flex justify-center items-center rounded-[50%] shadow-2xl mt-32">
          <div className="bg-white h-60 w-60 flex justify-center items-center rounded-[50%] select-none">
            <img className="w-24" src={rock} alt="Paper Icon" />
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
        <div className="paperGradient h-80 w-80 flex justify-center items-center rounded-[50%] shadow-2xl mt-32">
          <div className="bg-white h-60 w-60 flex justify-center items-center rounded-[50%] select-none">
            <img className="w-24" src={paper} alt="Paper Icon" />
          </div>
        </div>
      );
    }

    if (housePicked === "scissors") {
      return (
        <div className="scissorsGradient h-80 w-80 flex justify-center items-center rounded-[50%] shadow-2xl mt-32">
          <div className="bg-white h-60 w-60 flex justify-center items-center rounded-[50%] select-none">
            <img className="w-24" src={scissors} alt="Paper Icon" />
          </div>
        </div>
      );
    }

    if (housePicked === "rock") {
      return (
        <div className="rockGradient h-80 w-80 flex justify-center items-center rounded-[50%] shadow-2xl mt-32">
          <div className="bg-white h-60 w-60 flex justify-center items-center rounded-[50%] select-none">
            <img className="w-24" src={rock} alt="Paper Icon" />
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

    switch (result) {
      case "tie":
        console.log("Tie");
        break;
      case "player":
        console.log("You win");
        break;
      case "house":
        console.log("You Lose");
        break;
      default:
        console.log("Invalid result");
        break;
    }

    setWinner(result);
  };

  return (
    <main className="pageBackground w-full min-h-screen flex justify-center select-none">
      <div className="flex flex-col items-center">
        <header className="w-[700px] flex justify-between items-center px-6 py-4 rounded-xl mt-10">
          <div className="flex items-center select-none">
            <img src={gameNameLogo} alt="Rock, Paper, Scissors logo" />
          </div>
          <div className="w-36 h-28 bg-white flex flex-col justify-center items-center rounded-lg">
            <p className="scoreText text-sm font-[600]">S C O R E</p>
            <p className="darkText text-6xl font-[700]">12</p>
          </div>
        </header>

        {!battleTime ? (
          <div className="h-[500px] flex justify-center items-center mt-20">
            <div className="bgTriangle relative flex w-[313px] h-[278px] ">
              <div
                className="paperGradient absolute -left-14 -top-14 h-44 w-44 flex self-start justify-center items-center rounded-[50%] cursor-pointer active:scale-90 transition-all shadow-2xl active:shadow-none"
                onClick={() => handlePick("paper")}>
                <div className="bg-white h-32 w-32 flex justify-center items-center rounded-[50%] select-none">
                  <img src={paper} alt="Paper Icon" />
                </div>
              </div>

              <div
                className="scissorsGradient absolute -right-14 -top-14 h-44 w-44 flex self-start justify-center items-center rounded-[50%] cursor-pointer active:scale-90 transition-all shadow-2xl active:shadow-none"
                onClick={() => handlePick("scissors")}>
                <div className="bg-white h-32 w-32 flex justify-center items-center rounded-[50%] select-none">
                  <img src={scissors} alt="Paper Icon" />
                </div>
              </div>

              <div
                className="flex justify-center absolute -bottom-12 w-full cursor-pointer active:scale-90 transition-all"
                onClick={() => handlePick("rock")}>
                <div className="rockGradient h-44 w-44 flex self-start justify-center items-center rounded-[50%] shadow-2xl active:shadow-none">
                  <div className="bg-white h-32 w-32 flex justify-center items-center rounded-[50%] select-none">
                    <img src={rock} alt="Paper Icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-[1000px] h-[500px] flex mt-20">
            <div className="w-full flex justify-between">
              <div className="w-[50%] flex flex-col items-center">
                <p className="text-3xl text-white font-[700]">YOU PICKED</p>
                {/* <div className="bg-[#14233D] bg-opacity-90 p-28 rounded-full mt-32"></div> */}
                {playerOptionPicked()}
              </div>

              {winner.length > 0 && (
                <div className="w-[30%] flex flex-col items-center justify-center gap-5 mt-20">
                  <div>
                    {winner === "player" ? (
                      <span className="text-5xl font-[600] text-white">YOU WIN</span>
                    ) : winner === "house" ? (
                      <span className="text-5xl font-[600] text-white">YOU LOSE</span>
                    ) : (
                      <span className="text-5xl font-[600] text-white">TIE</span>
                    )}
                  </div>
                  <div>
                    <button
                      onClick={handlePlayAgain}
                      type="button"
                      className={`${
                        winner === "player" ? "darkText" : "text-red-500"
                      } bg-white px-16 py-3 font-[700] text-sm rounded-md hover:bg-slate-200 active:scale-90 transition-all`}>
                      PLAY AGAIN
                    </button>
                  </div>
                </div>
              )}

              <div className="w-[50%] flex flex-col items-center">
                <p className="text-3xl text-white font-[700]">THE HOUSE PICKED</p>
                {renderHousePicked()}
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        className="absolute bottom-10 right-10 px-10 py-2 outline outline-slate-500 outline-2 text-white font-[600] rounded-md cursor-pointer hover:bg-white hover:text-black hover:outline-none transition-colors"
        onClick={() => setRulesModal(true)}>
        R U L E S
      </div>

      {rulesModal && (
        <div className="absolute w-full h-screen flex justify-center items-center bg-black bg-opacity-50">
          <div className="w-[450px] h-[460px] flex flex-col justify-between bg-white  rounded-lg p-10">
            <div className="flex justify-between items-center">
              <span className="darkText text-4xl font-[700]">RULES</span>
              <div
                className="hover:scale-125 transition-all cursor-pointer"
                onClick={() => setRulesModal(false)}>
                <img className="w-[24px] h-[24px]" src={closeIco} alt="Close Icon" />
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

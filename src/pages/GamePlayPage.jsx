import { useState } from "react";
import closeIco from "../assets/images/icon-close.svg";
import paper from "../assets/images/icon-paper.svg";
import rock from "../assets/images/icon-rock.svg";
import scissors from "../assets/images/icon-scissors.svg";
import rulesImg from "../assets/images/image-rules.svg";
import gameNameLogo from "../assets/images/logo.svg";

const GamePlayPage = () => {
  const [rulesModal, setRulesModal] = useState(false);

  return (
    <main className="pageBackground w-full min-h-screen flex justify-center select-none">
      <div>
        <header className="w-[700px] flex justify-between items-center px-6 py-4 rounded-xl mt-10">
          <div className="flex items-center select-none">
            <img src={gameNameLogo} alt="Rock, Paper, Scissors logo" />
          </div>
          <div className="w-36 h-28 bg-white flex flex-col justify-center items-center rounded-lg">
            <p className="scoreText text-sm font-[600]">S C O R E</p>
            <p className="darkText text-6xl font-[700]">12</p>
          </div>
        </header>

        <div className={`w-full h-[500px] flex justify-center items-center mt-20`}>
          <div className="bgTriangle relative flex w-[313px] h-[278px] ">
            <div
              className="paperGradient absolute -left-14 -top-14 h-44 w-44 flex self-start justify-center items-center rounded-[50%] cursor-pointer active:scale-90 transition-all"
              onClick={() => console.log("Paper")}>
              <div className="bg-white h-32 w-32 flex justify-center items-center rounded-[50%] select-none">
                <img src={paper} alt="Paper Icon" />
              </div>
            </div>

            <div
              className="scissorsGradient absolute -right-14 -top-14 h-44 w-44 flex self-start justify-center items-center rounded-[50%] cursor-pointer active:scale-90 transition-all"
              onClick={() => console.log("Scissors")}>
              <div className="bg-white h-32 w-32 flex justify-center items-center rounded-[50%] select-none">
                <img src={scissors} alt="Paper Icon" />
              </div>
            </div>

            <div
              className="flex justify-center absolute -bottom-12 w-full cursor-pointer active:scale-90 transition-all"
              onClick={() => console.log("Rock")}>
              <div className="rockGradient h-44 w-44 flex self-start justify-center items-center rounded-[50%]">
                <div className="bg-white h-32 w-32 flex justify-center items-center rounded-[50%] select-none">
                  <img src={rock} alt="Paper Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
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

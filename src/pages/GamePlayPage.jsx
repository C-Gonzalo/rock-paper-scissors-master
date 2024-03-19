import paper from "../assets/images/icon-paper.svg";
import rock from "../assets/images/icon-rock.svg";
import scissors from "../assets/images/icon-scissors.svg";
import logo from "../assets/images/logo.svg";

const GamePlayPage = () => {
  return (
    <main className="pageBackground w-full min-h-screen flex justify-center p-10 select-none">
      <div>
        <header className="w-[700px] flex justify-between items-center px-6 py-4 rounded-xl">
          <div className="flex items-center select-none">
            <img src={logo} alt="Rock, Paper, Scissors logo" />
          </div>
          <div className="w-36 h-28 bg-white flex flex-col justify-center items-center rounded-md">
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
                <img src={paper} alt="Paper Logo" />
              </div>
            </div>

            <div
              className="scissorsGradient absolute -right-14 -top-14 h-44 w-44 flex self-start justify-center items-center rounded-[50%] cursor-pointer active:scale-90 transition-all"
              onClick={() => console.log("Scissors")}>
              <div className="bg-white h-32 w-32 flex justify-center items-center rounded-[50%] select-none">
                <img src={scissors} alt="Paper Logo" />
              </div>
            </div>

            <div
              className="flex justify-center absolute -bottom-12 w-full cursor-pointer active:scale-90 transition-all"
              onClick={() => console.log("Rock")}>
              <div className="rockGradient h-44 w-44 flex self-start justify-center items-center rounded-[50%]">
                <div className="bg-white h-32 w-32 flex justify-center items-center rounded-[50%] select-none">
                  <img src={rock} alt="Paper Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GamePlayPage;

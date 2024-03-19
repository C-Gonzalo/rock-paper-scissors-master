const GamePlayPage = () => {
  return (
    <main className="pageBackground w-full min-h-screen flex justify-center p-10">
      <div>
        <header className="w-[700px] flex justify-between items-center px-6 py-4 rounded-xl">
          <div className="text-white">
            <p className="text-4xl font-[700] h-[30px] flex items-center">ROCK</p>
            <p className="text-4xl font-[700] h-[30px] flex items-center">PAPER</p>
            <p className="text-4xl font-[700] h-[30px] flex items-center">SCISSORS</p>
          </div>
          <div className="w-36 h-28 bg-white flex flex-col justify-center items-center rounded-md">
            <p className="scoreText text-sm font-[600]">S C O R E</p>
            <p className="darkText text-6xl font-[700]">12</p>
          </div>
        </header>

        <div></div>
      </div>
    </main>
  );
};

export default GamePlayPage;

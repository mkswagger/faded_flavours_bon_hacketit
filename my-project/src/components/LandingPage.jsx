const LandingPage = () => {
  return (
    <div className="flex pt-52 min-h-screen  bg-white font-dmSans w-full">
      <div class="m-8 relative space-y-4 ">
        <h1 className="text-7xl  break-all pb-12 text-dullGrey ">
        Faded Flavours
        </h1>
        <p className="text-xl text-lightRed">
          Recipes Rediscovered, Memories Recovered, Timeless Flavors Uncovered
        </p>
      </div>
      <div class="relative w-full max-w-lg ">
        <div class="absolute top-0 -left-0 w-72 h-72 bg-rose-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div class="absolute top-0 -right-0 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-4 left-28 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
      </div>
    </div>
  );
};

export default LandingPage;

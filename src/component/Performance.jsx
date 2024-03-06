/* eslint-disable react/no-unescaped-entities */
const Performance = () => {
  return (
    <div className="pb-4">
      <span className="text-2xl font-bold text-left">Performance</span>
      <div className="flex  items-center gap-2  pt-4 text-gray-700">
        <div className="flex flex-col font-bold text-start pr-1">
          <span className="text-xs leading-5 pb-2">Today's Low</span>
          <span className="text-sm leading-6">46,930.22</span>
        </div>
        <div className="relative px-1 w-full">
          <div className="h-1  rounded-lg bg-gradient-to-r from-red-600 via-orange-400 to-green-600 bg-black"></div>
          <div className="absolute top-2 right-2 flex flex-col items-center justify-center">
            <div className="h-0 w-0 border-l-8 border-solid border-r-8 border-b-8 border-b-black border-transparent"></div>
            <span className="mt-2 text-sm">$48,637.83</span>
          </div>
        </div>
        <div className="flex flex-col font-bold pl-4 text-end">
          <span className="text-xs leading-5  pb-2">Today's High</span>
          <span className="text-sm leading-6">49,343.83</span>
        </div>
      </div>
      <div className="flex  items-center gap-3  pt-4 text-gray-700 mt-4">
        <div className="flex flex-col font-bold text-start ">
          <span className="text-xs leading-5 pb-2">52W Low</span>
          <span className="text-sm leading-6">16,930.22</span>
        </div>
        <div className="relative px-1 w-full">
          <div className="h-1  rounded-lg bg-gradient-to-r from-red-600 via-orange-400 to-green-600 bg-black"></div>
        </div>
        <div className="flex flex-col font-bold pl-4 text-end">
          <span className="text-xs leading-5  pb-2">52W High</span>
          <span className="text-sm leading-6">49,743.83</span>
        </div>
      </div>
    </div>
  );
};

export default Performance;

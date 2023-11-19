export default function Skeleton() {
  return (
    <div className="flex flex-col gap-4 text-center">
      <h1 className="text-white animate-pulse text-xl">
        Loading Fetching Data...
      </h1>
      <div className="mx-auto">
        <div className="border-solid border-gray-200 border-2 pt-8 pb-10 px-4 rounded-xl w-[225px] mr-8">
          <div className="bg-gray-200 rounded-md py-1 px-12 mt-5 animate-pulse"></div>
          <div className="bg-gray-200 rounded-md py-1 px-12 mt-6 animate-pulse"></div>
          <div className="bg-gray-200 rounded-md py-1 px-12 mt-6 animate-pulse"></div>
          <div className="bg-gray-200 rounded-md py-1 px-12 mt-6 animate-pulse"></div>
          <div className="bg-gray-200 rounded-md py-1 px-12 mt-6 animate-pulse"></div>
          <div className="bg-gray-200 rounded-md py-1 px-12 mt-6 animate-pulse"></div>
          <div className="bg-gray-200 rounded-md py-1 px-12 mt-6 animate-pulse"></div>
          <div className="bg-gray-200 rounded-md py-1 px-12 mt-6 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

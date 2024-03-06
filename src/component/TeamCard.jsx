const TeamCard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-left ">Team</h2>
      <p className="font-bold text-start text-base py-4">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>
      <div className="bg-blue-100 py-4 px-4 my-4 rounded-lg w-full">
        <div className="flex items-center flex-col md:flex-row w-full gap-8">
          <div className=" md:flex md:flex-col  md:items-center  ">
            <div className=" flex w-28 h-28 ">
              <img
                className=" w-full  object-cover mx-auto md:mx-0 rounded-lg "
                src="./assets/Alice.jpg
        "
                alt="alice image"
              />
            </div>
            <p className="font-bold text-sm text-center mt-4">Alice Waston</p>
            <p className="text-gray-500 font-bold text-xs text-center">
              Designer{" "}
            </p>
          </div>
          <div className="">
            <p className="font-bold md:font-normal md:text-left text-gray-500 text-sm mt-4 md:mt-0">
              Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
              fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
              in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
              nec neque sed pellentesque viverra. Consectetur proin amet ut id
              facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
              egestas dolor est ipsum. Malesuada etiam mi gravida praesent
              interdu
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-100 py-2 px-4 my-4 rounded-lg">
        <div className="flex items-center flex-col md:flex-row w-full gap-8">
          <div className=" md:flex md:flex-col  md:items-center  ">
            <div className=" flex w-28   ">
              <img
                className=" h-24 object-cover mx-auto max-w-full rounded-lg"
                src="./assets/Jone.jpg
        "
                alt="alice image"
              />
            </div>
            <p className="font-bold text-sm text-center mt-4"> Jack Gayel</p>
            <p className="text-gray-500 font-bold text-xs text-center">
              Software Engineer
            </p>
          </div>
          <p className="font-bold md:font-normal md:text-left text-gray-500 text-sm mt-4 md:mt-0">
            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
            fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
            in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
            nec neque sed pellentesque viverra. Consectetur proin amet ut id
            facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
            egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
          </p>
        </div>
      </div>
      <div className="bg-blue-100 py-2 px-4 my-4 rounded-lg">
        <div className="flex items-center flex-col md:flex-row w-full gap-8">
          <div className=" md:flex md:flex-col  md:items-center  ">
            <div className=" flex w-28   ">
              <img
                className="w-24 h-24 object-cover mx-auto max-w-full rounded-lg"
                src="./assets/saket.png
        "
                alt="alice image"
              />
            </div>
            <p className="font-bold text-sm text-center mt-4"> Jack Gayel</p>
            <p className="text-gray-500 font-bold text-xs text-center">
              Software Engineer
            </p>
          </div>
          <p className="font-bold md:font-normal md:text-left text-gray-500 text-sm mt-4 md:mt-0">
            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
            fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
            in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
            nec neque sed pellentesque viverra. Consectetur proin amet ut id
            facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
            egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

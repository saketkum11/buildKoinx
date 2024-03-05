const Sentiment = () => {
  return (
    <div>
      <span className="text-2xl font-bold text-left ">Sentiment</span>
      <div className="flex  items-center gap-2 text-xl font-bold text-left text-gray-600 pt-4">
        <span>Key Event</span>
        <div>
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_57_615)">
              <path
                d="M10.04 1.66675C5.44 1.66675 1.70667 5.40008 1.70667 10.0001C1.70667 14.6001 5.44 18.3334 10.04 18.3334C14.64 18.3334 18.3733 14.6001 18.3733 10.0001C18.3733 5.40008 14.64 1.66675 10.04 1.66675ZM10.8733 14.1667H9.20667V9.16675H10.8733V14.1667ZM10.8733 7.50008H9.20667V5.83341H10.8733V7.50008Z"
                fill="#ABB9BF"
              />
            </g>
            <defs>
              <clipPath id="clip0_57_615">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0.039978)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flex gap-2 overflow-x-auto py-4">
        <div className="flex bg-blue-100 p-3 gap-2 justify-start rounded-lg min-w-72">
          <div className="pt-1">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.59613"
                y="0.770996"
                width="30.7905"
                height="30.7905"
                rx="15.3952"
                fill="#0082FF"
              />
              <path
                d="M11.0929 18.4126V16.4532H13.0523V18.4126H11.0929ZM20.8899 11.059C20.8883 10.6703 20.7328 10.298 20.4574 10.0237C20.182 9.74935 19.8091 9.59533 19.4203 9.59534H9.54792C9.15817 9.59534 8.78438 9.75016 8.50879 10.0258C8.2332 10.3014 8.07837 10.6751 8.07837 11.0649V19.8822C8.07837 20.5317 8.33641 21.1547 8.79574 21.614C9.25506 22.0734 9.87803 22.3314 10.5276 22.3314H21.4552C22.1047 22.3314 22.7277 22.0734 23.187 21.614C23.6464 21.1547 23.9044 20.5317 23.9044 19.8822V14.004C23.9044 13.6142 23.7496 13.2404 23.474 12.9648C23.1984 12.6893 22.8246 12.5344 22.4349 12.5344H21.8696V19.6176C21.8696 19.7476 21.818 19.8722 21.7261 19.964C21.6342 20.0559 21.5096 20.1075 21.3797 20.1075C21.2498 20.1075 21.1252 20.0559 21.0333 19.964C20.9415 19.8722 20.8899 19.7476 20.8899 19.6176V11.059ZM10.1132 13.0243C10.1132 12.8944 10.1648 12.7698 10.2567 12.6779C10.3485 12.586 10.4731 12.5344 10.603 12.5344H18.4406C18.5705 12.5344 18.6951 12.586 18.787 12.6779C18.8789 12.7698 18.9305 12.8944 18.9305 13.0243C18.9305 13.1542 18.8789 13.2788 18.787 13.3707C18.6951 13.4625 18.5705 13.5141 18.4406 13.5141H10.603C10.4731 13.5141 10.3485 13.4625 10.2567 13.3707C10.1648 13.2788 10.1132 13.1542 10.1132 13.0243ZM15.5015 15.4735H18.4406C18.5705 15.4735 18.6951 15.5251 18.787 15.617C18.8789 15.7089 18.9305 15.8335 18.9305 15.9634C18.9305 16.0933 18.8789 16.2179 18.787 16.3097C18.6951 16.4016 18.5705 16.4532 18.4406 16.4532H15.5015C15.3716 16.4532 15.247 16.4016 15.1552 16.3097C15.0633 16.2179 15.0117 16.0933 15.0117 15.9634C15.0117 15.8335 15.0633 15.7089 15.1552 15.617C15.247 15.5251 15.3716 15.4735 15.5015 15.4735ZM15.0117 18.9025C15.0117 18.7725 15.0633 18.648 15.1552 18.5561C15.247 18.4642 15.3716 18.4126 15.5015 18.4126H18.4406C18.5705 18.4126 18.6951 18.4642 18.787 18.5561C18.8789 18.648 18.9305 18.7725 18.9305 18.9025C18.9305 19.0324 18.8789 19.157 18.787 19.2488C18.6951 19.3407 18.5705 19.3923 18.4406 19.3923H15.5015C15.3716 19.3923 15.247 19.3407 15.1552 19.2488C15.0633 19.157 15.0117 19.0324 15.0117 18.9025ZM10.603 15.4735H13.5421C13.6721 15.4735 13.7967 15.5251 13.8885 15.617C13.9804 15.7089 14.032 15.8335 14.032 15.9634V18.9025C14.032 19.0324 13.9804 19.157 13.8885 19.2488C13.7967 19.3407 13.6721 19.3923 13.5421 19.3923H10.603C10.4731 19.3923 10.3485 19.3407 10.2567 19.2488C10.1648 19.157 10.1132 19.0324 10.1132 18.9025V15.9634C10.1132 15.8335 10.1648 15.7089 10.2567 15.617C10.3485 15.5251 10.4731 15.4735 10.603 15.4735Z"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium pb-1">
              Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
              mattis enim.
            </p>
            <p className="text-gray-600 text-xs">
              Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
              faucibus metus quis. Amet sapien quam viverra adipiscing
              condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
              sit nisi viverra natoque lacinia libero enim.
            </p>
          </div>
        </div>
        <div className="flex bg-blue-100 p-3 gap-1 justify-start rounded-lg  min-w-72">
          <div className="pt-1">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.494507"
                y="0.770996"
                width="30.7905"
                height="30.7905"
                rx="15.3952"
                fill="#0FBA83"
              />
              <path
                d="M18.8505 12.0214H23.5875V16.7584"
                stroke="white"
                strokeWidth="1.18425"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23.5874 12.0214L16.8964 18.7124C16.7857 18.8209 16.6369 18.8816 16.4819 18.8816C16.3269 18.8816 16.1781 18.8209 16.0674 18.7124L13.3436 15.9886C13.2329 15.8801 13.0841 15.8193 12.9291 15.8193C12.7741 15.8193 12.6253 15.8801 12.5147 15.9886L8.19214 20.3111"
                stroke="white"
                strokeWidth="1.18425"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium pb-1">
              Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
              mattis enim.
            </p>
            <p className="text-gray-600 text-xs">
              Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
              faucibus metus quis. Amet sapien quam viverra adipiscing
              condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
              sit nisi viverra natoque lacinia libero enim.
            </p>
          </div>
        </div>
        <div className="flex bg-blue-100 p-3 gap-1 justify-start rounded-lg  min-w-72">
          <div className="pt-1">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.59613"
                y="0.770996"
                width="30.7905"
                height="30.7905"
                rx="15.3952"
                fill="#0082FF"
              />
              <path
                d="M11.0929 18.4126V16.4532H13.0523V18.4126H11.0929ZM20.8899 11.059C20.8883 10.6703 20.7328 10.298 20.4574 10.0237C20.182 9.74935 19.8091 9.59533 19.4203 9.59534H9.54792C9.15817 9.59534 8.78438 9.75016 8.50879 10.0258C8.2332 10.3014 8.07837 10.6751 8.07837 11.0649V19.8822C8.07837 20.5317 8.33641 21.1547 8.79574 21.614C9.25506 22.0734 9.87803 22.3314 10.5276 22.3314H21.4552C22.1047 22.3314 22.7277 22.0734 23.187 21.614C23.6464 21.1547 23.9044 20.5317 23.9044 19.8822V14.004C23.9044 13.6142 23.7496 13.2404 23.474 12.9648C23.1984 12.6893 22.8246 12.5344 22.4349 12.5344H21.8696V19.6176C21.8696 19.7476 21.818 19.8722 21.7261 19.964C21.6342 20.0559 21.5096 20.1075 21.3797 20.1075C21.2498 20.1075 21.1252 20.0559 21.0333 19.964C20.9415 19.8722 20.8899 19.7476 20.8899 19.6176V11.059ZM10.1132 13.0243C10.1132 12.8944 10.1648 12.7698 10.2567 12.6779C10.3485 12.586 10.4731 12.5344 10.603 12.5344H18.4406C18.5705 12.5344 18.6951 12.586 18.787 12.6779C18.8789 12.7698 18.9305 12.8944 18.9305 13.0243C18.9305 13.1542 18.8789 13.2788 18.787 13.3707C18.6951 13.4625 18.5705 13.5141 18.4406 13.5141H10.603C10.4731 13.5141 10.3485 13.4625 10.2567 13.3707C10.1648 13.2788 10.1132 13.1542 10.1132 13.0243ZM15.5015 15.4735H18.4406C18.5705 15.4735 18.6951 15.5251 18.787 15.617C18.8789 15.7089 18.9305 15.8335 18.9305 15.9634C18.9305 16.0933 18.8789 16.2179 18.787 16.3097C18.6951 16.4016 18.5705 16.4532 18.4406 16.4532H15.5015C15.3716 16.4532 15.247 16.4016 15.1552 16.3097C15.0633 16.2179 15.0117 16.0933 15.0117 15.9634C15.0117 15.8335 15.0633 15.7089 15.1552 15.617C15.247 15.5251 15.3716 15.4735 15.5015 15.4735ZM15.0117 18.9025C15.0117 18.7725 15.0633 18.648 15.1552 18.5561C15.247 18.4642 15.3716 18.4126 15.5015 18.4126H18.4406C18.5705 18.4126 18.6951 18.4642 18.787 18.5561C18.8789 18.648 18.9305 18.7725 18.9305 18.9025C18.9305 19.0324 18.8789 19.157 18.787 19.2488C18.6951 19.3407 18.5705 19.3923 18.4406 19.3923H15.5015C15.3716 19.3923 15.247 19.3407 15.1552 19.2488C15.0633 19.157 15.0117 19.0324 15.0117 18.9025ZM10.603 15.4735H13.5421C13.6721 15.4735 13.7967 15.5251 13.8885 15.617C13.9804 15.7089 14.032 15.8335 14.032 15.9634V18.9025C14.032 19.0324 13.9804 19.157 13.8885 19.2488C13.7967 19.3407 13.6721 19.3923 13.5421 19.3923H10.603C10.4731 19.3923 10.3485 19.3407 10.2567 19.2488C10.1648 19.157 10.1132 19.0324 10.1132 18.9025V15.9634C10.1132 15.8335 10.1648 15.7089 10.2567 15.617C10.3485 15.5251 10.4731 15.4735 10.603 15.4735Z"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium pb-1">
              Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
              mattis enim.
            </p>
            <p className="text-gray-600 text-xs">
              Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
              faucibus metus quis. Amet sapien quam viverra adipiscing
              condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
              sit nisi viverra natoque lacinia libero enim.
            </p>
          </div>
        </div>
      </div>
      <div className="flex  items-center gap-2 text-xl font-bold text-left text-gray-600 py-4">
        <span>Analyst Estimates</span>
        <div>
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_57_615)">
              <path
                d="M10.04 1.66675C5.44 1.66675 1.70667 5.40008 1.70667 10.0001C1.70667 14.6001 5.44 18.3334 10.04 18.3334C14.64 18.3334 18.3733 14.6001 18.3733 10.0001C18.3733 5.40008 14.64 1.66675 10.04 1.66675ZM10.8733 14.1667H9.20667V9.16675H10.8733V14.1667ZM10.8733 7.50008H9.20667V5.83341H10.8733V7.50008Z"
                fill="#ABB9BF"
              />
            </g>
            <defs>
              <clipPath id="clip0_57_615">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0.039978)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flex justify-start items-start gap-4">
        <div>
          <div className="h-28 w-28  flex justify-center items-center text-green-600 gap-3 bg-blue-100 rounded-full">
            <span className=" font-bold text-4xl">76 </span>
            <span className="text-base">%</span>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex items-center py-2 gap-4">
            <span className="pr-2 font-bold text-gray-500">Buy</span>
            <div className="flex items-center gap-2">
              <div className="h-3 w-32 rounded-sm bg-emerald-600"></div>
              <span className="text-gray-400 font-bold">76%</span>
            </div>
          </div>
          <div className="flex items-center py-2 gap-4">
            <span className="pr-1 font-bold text-gray-500">Hold</span>
            <div className="flex items-center gap-2">
              <div className="h-3 w-8 rounded-sm bg-gray-400"></div>
              <span className="text-gray-400 font-bold">10%</span>
            </div>
          </div>
          <div className="flex items-center  py-2 gap-4">
            <span className="pr-3 font-bold text-gray-500">Sell</span>
            <div className="flex items-center gap-2">
              <div className="h-3 w-10 rounded-sm bg-red-600"></div>
              <span className="text-gray-400 font-bold">16%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;

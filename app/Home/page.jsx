"use client";
import React, { useState } from "react";
import { IoLocationSharp, IoPerson } from "react-icons/io5";
import { IoIosAddCircleOutline, IoMdHome, IoMdSearch } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";

export default function Page() {
  const cityList = [
    "Dhaka",
    "Chittagong",
    "Sylhet",
    "Rajshahi",
    "Khulna",
    "Barishal",
    "Rangpur",
    "Mymensingh",
    "Dhanbad",
    "Ranchi",
    "New Delhi",
    "Old Delhi",
  ];
  const [searchData, setSearchData] = useState({
    location: cityList[0],
    checkIn: "",
    checkOut: "",
    rooms: 1,
    guest: 1,
  });

  const [roomsClick, setRoomsClick] = useState(false);

  const handleSearch = () => {
    console.log(searchData);
  };

  return (
    <section name="hero" className="mt-3 md:mt-5 ">
      {/* LARGE SCREEN */}
      <div className=" hidden w-[90%] h-[80vh] md:flex items-center justify-center ml-[5%]">
        <div className="w-1/2 h-[100%] rounded-tl-[50px] bg-[#e8ebea] flex-col">
          <p className="font-OpenSans font-semibold text-[50px] md:text-[64px] mt-20 ml-20  leading-[60px] md:leading-[80px] text-left bg-[#e8ebea]">
            Find your perfect place to stay
          </p>
          <p className="bg-[#e8ebea] text-[#555555] font-OpenSans font-normal text-[20px] leading-6 mt-5 mr-10  ml-20">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div
            className="h-14 w-1/3 bg-inherit rounded-full ml-20 mt-10 flex flex-row justify-center items-center cursor-pointer  "
            onClick={() => {
              alert("Watch Video");
            }}
          >
            <div className="bg-white h-10 w-10 rounded-full flex justify-center items-center ">
              <div className="  bg-black box-border h-5 w-5 rounded-s-md   border-solid border-2 border-l-[#24AB70] border-t-white border-b-white border-l-[20px]  border-r-0 border-t-[11px] border-b-[11px] animate-pulse   transition-transform  "></div>
            </div>
            <div>
              <p className="text-[#222222] font-OpenSans font-semibold text-[10px] md:text-[20px]  leading-30 pl-2 bg-[#e8ebea] ">
                Watch Video
              </p>
            </div>
          </div>
        </div>
        <div
          preload="true"
          className="w-1/2 h-[100%] rounded-tr-[50px] bg-[url('/hero/rightHero.jpeg')]  bg-cover"
        ></div>
      </div>

      <div className="hidden md:flex   justify-center items-center">
        <div className="flex flex-row h-24 w-2/3 -mt-48 rounded-full bg-[#FFFFFF] justify-center items-center ">
          <div className="flex flex-col    w-1/5 h-[80%] border-0 bg-inherit border-r-2 rounded-s-full   border-r-[#E8E8E8] ">
            <div className="bg-white pb-2  rounded-full  ml-3">
              <p className="text-center bg-inherit rounded-full"> Location</p>
            </div>
            <div className="flex flex-row justify-center items-center  bg-white rounded-full">
              <IoLocationSharp size={20} className="bg-white ml-8 mr-4 " />
              <select className="mr-5 bg-inherit">
                {cityList.map((city, index) => (
                  <option
                    key={index}
                    value={city}
                    onClick={(e) =>
                      setSearchData({ ...searchData, location: e.target.value })
                    }
                  >
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col w-1/5 h-[80%] border-0 bg-inherit border-r-2 border-r-[#E8E8E8]">
            <div className="bg-white pb-1">
              <p className="text-center bg-inherit"> Check In</p>
            </div>
            <div className="flex flex-row justify-center items-center bg-white">
              {/* <MdOutlineDateRange size={20} className='bg-white' /> */}
              <input
                type="date"
                className="bg-white "
                value={searchData.checkIn}
                onChange={(e) =>
                  setSearchData({ ...searchData, checkIn: e.target.value })
                }
              />
            </div>
          </div>

          <div className=" w-1/5 h-[80%] border-0 bg-inherit border-r-2 border-r-[#E8E8E8]">
            <div className="bg-white pb-1">
              <p className="text-center bg-inherit"> Check Out</p>
            </div>
            <div className="flex flex-row justify-center items-center bg-white">
              {/* <MdOutlineDateRange size={20} className='bg-white' /> */}
              <input
                type="date"
                className="bg-white "
                value={searchData.checkOut}
                onChange={(e) =>
                  setSearchData({ ...searchData, checkOut: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex flex-col w-1/5 h-[80%] bg-inherit">
            <div className="bg-white pb-2  rounded-full  ml-3">
              <p className="text-center bg-inherit rounded-full"> Rooms for</p>
            </div>
            <div
              className="flex flex-row justify-center items-center  bg-white rounded-full cursor-pointer"
              onClick={() => setRoomsClick(!roomsClick)}
            >
              <IoPerson size={20} className="bg-white ml-3 mr-4 " />
              <div className="bg-white">
                <p className="bg-white">
                  {searchData.rooms} rooms , {searchData.guest} guest
                </p>
              </div>
            </div>
            {roomsClick ? (
              <div className="flex flex-col   w-full  border-2 bg-inherit ">
                <div className="flex flex-col justify-center items-center h-[100px]  bg-white rounded-lg cursor-pointer">
                  <div className="flex flex-row bg-white  mb-4 ">
                    <IoMdHome size={20} className="bg-white ml-3 mr-4 " />

                    <IoIosAddCircleOutline
                      size={25}
                      onClick={() =>
                        setSearchData({
                          ...searchData,
                          rooms: searchData.rooms + 1,
                        })
                      }
                    />
                    <p className="bg-white mx-3">{searchData.rooms}</p>
                    <CiCircleMinus
                      size={25}
                      onClick={() =>
                        setSearchData({
                          ...searchData,
                          rooms: searchData.rooms - 1,
                        })
                      }
                    />
                  </div>
                  <div className="flex flex-row bg-white  ">
                    <IoPerson size={20} className="bg-white ml-3 mr-4 " />

                    <IoIosAddCircleOutline
                      size={25}
                      onClick={() =>
                        setSearchData({
                          ...searchData,
                          guest: searchData.guest + 1,
                        })
                      }
                    />
                    <p className="bg-white mx-3">{searchData.guest}</p>
                    <CiCircleMinus
                      size={25}
                      onClick={() =>
                        setSearchData({
                          ...searchData,
                          guest: searchData.guest - 1,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>

          <button
            className=" flex justify-center items-center w-1/5 h-full border-0 bg-[#24AB70]  rounded-full"
            onClick={() => handleSearch()}
          >
            <IoMdSearch size={25} className="bg-[#24AB70] mr-5 text-white" />
            <p className="bg-[#24AB70] font-OpenSans font-normal text-lg text-white">
              Search
            </p>
          </button>
        </div>
      </div>

      {/* SMALL SCREEN */}
      <div className="md:hidden w-[98%] h-[60vh] flex flex-col items-center justify-center ml-[1%]">
        <div className="w-full h-[100%] rounded-t-[50px] bg-[url('/hero/rightHero.jpeg')] bg-cover">
          <p className="font-OpenSans font-semibold text-[30px] mt-10 ml-5  leading-[40px] text-left bg-transparent">
            Find your perfect place to stay
          </p>
          <p className="bg-transparent text-[#2c2b2b] font-OpenSans font-normal text-[14px] leading-6 mt-5 mr-10  ml-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div
            className="h-14 w-1/3 bg-inherit rounded-full ml-1 mt-5 flex flex-row justify-start items-center cursor-pointer  "
            onClick={() => {
              alert("Watch Video");
            }}
          >
            <div className="bg-inherit h-10 w-10 rounded-full flex justify-center items-center ">
              <div className="  bg-in box-border h-5 w-5 rounded-s-md  border-solid border-2 border-l-[#24AB70] border-t-white border-b-white border-l-[20px]  border-r-0 border-t-[11px] border-b-[11px] animate-pulse  hover:animate-bounce   "></div>
            </div>
            <div>
              <p className="text-[#222222] font-OpenSans font-semibold text-[10px] md:text-[20px]  leading-30   bg-inherit">
                Watch Video
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden flex justify-center items-center bg-white ">
        <div className="flex h-auto flex-col w-[90%] -mt-32  rounded-xl bg-[#FFFFFF] justify-center items-center border-2 border-gray-100 ">

          <div className="flex flex-row  justify-center items-center mt-10 pb-10  bg-white rounded-t-full  border-0 border-b-2">

            <IoLocationSharp size={20} className="bg-white ml-8 mr-4 " />
            <p className="text-center bg-inherit rounded-full mr-5 ">
            
              Location
            </p>

            <select className="mr-5 bg-inherit">
            {cityList.map((city, index) => (
                  <option
                    key={index}
                    value={city}
                    onClick={(e) =>
                      setSearchData({ ...searchData, location: e.target.value })
                    }
                  >
                    {city}
                  </option>
                ))}
            </select>
          </div>

          <div className="mt-5 flex flex-row  border-0 border-b-2   pb-10 bg-white ">
            <div className="flex-col bg-white mr-1 ">
            <p className="text-center bg-inherit rounded-full mr-5 "> Check In</p>
            <input
              type="date"
              className="bg-white "
              value={searchData.checkIn}
              onChange={(e) =>
                setSearchData({ ...searchData, checkIn: e.target.value })
              }
            />
            </div>
            <div className="flex-col bg-white">
            <p className="text-center bg-inherit rounded-full mr-5 "> Check out</p>
            <input
              type="date"
              className="bg-white "
              value={searchData.checkOut}
              onChange={(e) =>
                setSearchData({ ...searchData, checkOut: e.target.value })
              }
            />
            </div>
            

          </div>
          <div className="flex flex-col w-[80%] mt-5  pb-10 border-0 border-b-2  h-[80%] bg-inherit">
            <div className="bg-white pb-2  rounded-full  ml-3">
              <p className="text-center bg-inherit rounded-full"> Rooms for</p>
            </div>
            <div
              className="flex flex-row justify-center items-center  bg-white rounded-full cursor-pointer"
              onClick={() => setRoomsClick(!roomsClick)}
            >
              <IoPerson size={20} className="bg-white ml-3 mr-4 " />
              <div className="bg-white">
                <p className="bg-white">
                  {searchData.rooms} rooms , {searchData.guest} guest
                </p>
              </div>
            </div>
            {roomsClick ? (
              <div className="flex flex-col   w-full  border-2 bg-inherit ">
                <div className="flex flex-col justify-center items-center h-[100px]  bg-white rounded-lg cursor-pointer">
                  <div className="flex flex-row bg-white  mb-4 ">
                    <IoMdHome size={20} className="bg-white ml-3 mr-4 " />

                    <IoIosAddCircleOutline
                      size={25}
                      onClick={() =>
                        setSearchData({
                          ...searchData,
                          rooms: searchData.rooms + 1,
                        })
                      }
                    />
                    <p className="bg-white mx-3">{searchData.rooms}</p>
                    <CiCircleMinus
                      size={25}
                      onClick={() =>
                        setSearchData({
                          ...searchData,
                          rooms: searchData.rooms - 1,
                        })
                      }
                    />
                  </div>
                  <div className="flex flex-row bg-white  ">
                    <IoPerson size={20} className="bg-white ml-3 mr-4 " />

                    <IoIosAddCircleOutline
                      size={25}
                      onClick={() =>
                        setSearchData({
                          ...searchData,
                          guest: searchData.guest + 1,
                        })
                      }
                    />
                    <p className="bg-white mx-3">{searchData.guest}</p>
                    <CiCircleMinus
                      size={25}
                      onClick={() =>
                        setSearchData({
                          ...searchData,
                          guest: searchData.guest - 1,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className=" flex justify-center items-center w-full   h-[100px]">
          <button
            className=" w-[100%] flex justify-center items-center  h-full border-0 bg-[#24AB70] rounded-b-xl "
            onClick={() => handleSearch()}
          >
            <IoMdSearch size={25} className="bg-[#24AB70] mr-5 text-white" />
            <p className="bg-[#24AB70] font-OpenSans font-normal text-lg text-white">
              Search
            </p>
          </button>
          </div>

        </div>
      </div>
    </section>
  );
}

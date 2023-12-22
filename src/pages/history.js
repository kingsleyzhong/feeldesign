import CollectionHistory from "@/Components/CollectionHistory/CollectionHistory";
import Header from "@/Components/Header/Header";
import React, { useEffect, useState } from "react";
import Signin from "@/Components/Auth/Signin";

const History = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/history")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  return (
    <div>
      <Header />
      <div className=" md:p-5 md:bg-slate-100">
        <div className=" bg-white md:p-5">
          <div className="md:border-2 border-[#FBE8D0]">
            {data.length == 0 && (
              <div className="flex flex-col items-center w-full px-4 py-2">
                <Signin />
              </div>
            )}

            {data.length > 0 && (
              <>
                <div className="flex flex-col items-end w-full px-4 py-2">
                  <Signin />
                </div>
                <div className="bg-[#F2F1EF] py-3 px-3 rounded-md font-semibold noto-sans text-md md:text-xl mt-4 mb-2 w-[85%] m-auto">
                  Your generation history
                </div>
                <CollectionHistory data={data} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;

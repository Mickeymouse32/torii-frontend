import React from "react";
import CreateForm from "../components/CreateForm";

const CreateProperty = () => {
  return (
    <div>
      <div className=" pt-4">
        <h1 className="w-full font-[500] font-[mona Sans] text-[22px] text-black capitalize mb-2">
          Property
        </h1>
        <div className="flex items-center  gap-2 capitalize text-[14px]">
          <h4 className="text-[#666666]">property</h4>
          <h3 className="text-[#666666]">.</h3>
          <h4 className="text-[#666666]">overview</h4>
          <h3 className="text-[#666666]">.</h3>
          <h3 className="text-black">Create new property</h3>
        </div>
      </div>
      <CreateForm />
    </div>
  );
};

export default CreateProperty;

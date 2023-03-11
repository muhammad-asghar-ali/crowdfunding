import React from "react";

const FormField = ({
  labelName,
  placeholder,
  inputType,
  value,
  handleChange,
  isTextArea
}) => {
  return (
    <label htmlFor="" className="flex-1 w-full flex flex-col ">
      {labelName && (
        <span className="font font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">
          {labelName}
        </span>
      )}
      {isTextArea ? (
        <textarea 
          required
          value={value}
          onChange={handleChange}
          rows={10}
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none broder-[1px] broder-[#3a3a43] bg-transparent font-apilogue text-white text-[14px] placeholder:text-[#4b5264 rounded-[10px] sm:min-w-[300px]"
        />
      ) : (
        <input
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          step="0.1"
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none broder-[1px] broder-[#3a3a43] bg-transparent font-apilogue text-white text-[14px] placeholder:text-[#4b5264 rounded-[10px] sm:min-w-[300px]"
        />
      )}
    </label>
  );
};

export default FormField;

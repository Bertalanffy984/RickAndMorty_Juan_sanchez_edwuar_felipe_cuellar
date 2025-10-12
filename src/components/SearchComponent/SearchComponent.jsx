import React from "react";

const SearchComponent = (props) => {
  const { value, onChange,placeholder} = props;
  return (
    <div className="w-full h-10 mb-7">
      <div className="flex h-full w-[300px] m-auto relative">
        <input
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none hover:border-slate-300 shadow-sm  focus:shadow-blue-300"
          style={{paddingLeft:'5px'}}
          placeholder={placeholder}
          type="text"
          value={value}
          onChange={onChange}
        />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="absolute w-5 h-full top-1.2 right-1 text-slate-600"
      >
        <path
          fill-rule="evenodd"
          d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
          clip-rule="evenodd"
        />
      </svg>
      </div>
    </div>
  );
};

export default SearchComponent;

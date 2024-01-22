import React, { useState } from "react";

const App = () => {
const [name, setname] = useState("");
  const [storevalue, setstorevalue] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    if (name !== "") {
      setstorevalue([...storevalue, name]);
      setname("");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full">
        <div>
          <form onSubmit={formSubmit} className="pt-5">
            <input className="outline" onChange={(e) => setname(e.target.value)} type="text" placeholder="name" value={name} />
            <input className="border bg-black rounded py-2 px-4 ml-3 text-white" type="submit" />
          </form>
          <ul className="pl-2 ">
            {storevalue.map((name, index) => (
              <li className={`${(index%2 === 0) ? "text-red-500 text-5xl":" text-blue-400 bg-red-300"}`} key={index}>{name}</li>
            //   <li className="last:text-red-500" key={index}>{name}</li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default App;

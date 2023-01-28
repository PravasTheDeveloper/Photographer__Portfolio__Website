import React from "react";

function Gallary() {
  return (
    <>
      <div className="w-full lg:h-screen h-auto lg:bg-slate-200" id="Gallary">
        <div className="container px-5 lg:px-0 h-full mx-auto flex flex-col">
          <h1 className="lg:pt-20 text-4xl mb-5 lg:mb-20 mt-10">Gallary</h1>
          <div className="lg:flex justify-between h-4/6">
            <div className=" lg:w-3/12 rounded-md">
              <img src="https://images.unsplash.com/photo-1610047520958-b42ebcd2f6cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="w-full h-full object-cover center duration-300 hover:ease-in rounded-lg"/>
            </div>
            <div className="lg:w-5/12 mt-5 lg:mt-0 w-full box-border justify-between flex lg:flex-col">
              <div className="mb-2 h-2/6 mr-2 w-full rounded-md">
                <img src="https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className="w-full h-full object-cover center duration-300 hover:ease-in rounded-lg" />
              </div>
              <div className="lg:mt-2 h-3/6 w-full rounded-md">
                <img src="https://images.unsplash.com/flagged/photo-1566150217714-ebfea356f885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className="w-full h-full object-cover center duration-300 hover:ease-in rounded-lg" />
              </div>
            </div>
            <div className="lg:w-3/12 lg:mt-0 mt-5 w-full box-border flex flex-col justify-between">
              <div className="mb-4 lg:mb-0 h-48 w-full  rounded-md">
                <img src="https://images.unsplash.com/photo-1627615891798-15c5d482086a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80" alt="" className="w-full h-full object-cover center duration-300 hover:ease-in rounded-lg" />
              </div>
              <div className="mb-4 lg:mb-0 h-48 w-full rounded-md">
              <img src="https://images.unsplash.com/photo-1627615275925-f597ef41988c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80" alt="" className="w-full h-full object-cover center duration-300 hover:ease-in rounded-lg" />
              </div>
              <div className="h-48 w-full rounded-md">
              <img src="https://images.unsplash.com/photo-1604152673192-ba4180a7d7e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className="w-full h-full object-cover center duration-300 hover:ease-in rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallary;

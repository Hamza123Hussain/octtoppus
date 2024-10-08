import React from 'react'

const Body: React.FC = () => {
  return (
    <div className="flex items-center justify-between h-screen">
      <div className="flex flex-col justify-center w-4/5 p-2">
        <h1 className="text-6xl font-bold my-5 ">
          The <span className=" animate-colorChange">Octtoppus</span> Way
        </h1>
        <h6 className="text-xl ml-2">
          Where tech innovation meets strategic vision
        </h6>
      </div>
      <div className="">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          src="https://firebasestorage.googleapis.com/v0/b/octtoppusadmin-62082.appspot.com/o/services%20(1).mp4?alt=media&token=72c45b89-8c93-4018-8ea5-cd2459c2028e"
        ></video>
      </div>
    </div>
  )
}

export default Body

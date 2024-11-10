import React from "react";
import mind1 from "../../assets/mind1.jpg";
import mind2 from "../../assets/mind2.jpg";
import mind3 from "../../assets/mind3.jpg";
import mind4 from "../../assets/mind4.jpg";
import mind5 from "../../assets/mind5.jpg";
import mind6 from "../../assets/mind6.jpg";

const MindMapGallary = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-4 gallery-item py-10 px-5">
        <img src={mind1} class=" w-full h-80  " alt="" />
        <img src={mind2} class=" w-full h-80   " alt="" />

        <img src={mind3} class=" w-full h-80  " alt="" />
        <img src={mind4} class=" w-full h-80 " alt="" />

        <img src={mind5} class=" w-full h-80 " alt="" />
        <img src={mind6} class=" w-full h-80  " alt="" />

        {/* <img src={mind1} class=" w-full h-80  " alt="" />
         <img src={mind5} class=" w-full h-80  " alt="" />
         <img src={mind1} class=" w-full h-80  " alt="" /> */}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-5 py-5">
        <div className="flex justify-center">
          <iframe
            className="rounded-xl w-full h-64 sm:h-80 lg:h-96"
            src="https://www.youtube.com/embed/m-m6F__cL1Q"
            title="MindMap l S1 EP2 l Dr. Zahiruddin Mahmud l Kotha Nahian l Health l Podcast l 2024 I HCAHBD"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex justify-center">
          <iframe
            className="rounded-xl w-full h-64 sm:h-80 lg:h-96"
            src="https://www.youtube.com/embed/51WGcEkKoJc"
            title="MindMap l S1 EP2 l Dr. Zahiruddin Mahmud l Kotha Nahian l Health l Podcast l 2024 I HCAHBD"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex justify-center">
          <iframe
            className="rounded-xl w-full h-64 sm:h-80 lg:h-96"
            src="https://www.youtube.com/embed/W8uWR4I7pok"
            title="MindMap l S1 EP2 l Dr. Zahiruddin Mahmud l Kotha Nahian l Health l Podcast l 2024 I HCAHBD"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

         
      </div>
    </div>
  );
};

export default MindMapGallary;

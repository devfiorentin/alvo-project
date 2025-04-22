import { AlvoData } from "./interface/AlvoData";
import { Card } from "./components/card/Card";
import { useAlvoData } from "./hooks/useAlvoData";
import { useState } from "react";
import { CreateModal } from "./components/create-modal/create-modal";
import { GiTargetShot } from "react-icons/gi";
import { BsPersonFillAdd } from "react-icons/bs";

function App() {
  const { data } = useAlvoData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="justify-center items-center h-screen bg-[#070707] ">
      <nav className="flex">
        <div className="px-40 py-8 flex w-full justify-between items-center shadow-lg bg-[#0e0e0e] ">
          <div className="flex items-center justify-center">
            
            <a href="/" className="flex items-center">
            <GiTargetShot className="text-[32px] text-white mr-2" />
            <h1 className="font-bold text-[28px] text-white"> Alvo </h1>
            </a>
          </div>

          {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
          <button
            className="cursor-pointer font-semibold  text-white  ml-4"
            onClick={handleOpenModal}
          >
         
            <BsPersonFillAdd className="text-[30px]" />
          </button>
        </div>
      </nav>

      <div className="flex flex-wrap px-40 mt-15 justify-between gap-y-13 items-center">
        {data?.map((alvoData: AlvoData) => (
          <Card
            key={alvoData.id}
            id={alvoData.id?.toString() || ""}
            name={alvoData.name}
            userSocial={alvoData.userSocial}
            dateExecute={alvoData.dateExecute}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

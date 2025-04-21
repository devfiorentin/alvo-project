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
    <div className="justify-center items-center h-screen bg-black p-10">
      <nav className="mt-5 flex">
        <div className="py-5 px-20 mx-18 flex w-full justify-between items-center  bg-[#292728] ">
          <div className="flex items-center justify-center">
            <GiTargetShot className="text-[40px] mr-2" />
            <h1 className="font-bold text-[30px] text-black"> Alvo </h1>
          </div>

          {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
          <button
            className="cursor-pointer font-semibold  text-black  ml-4"
            onClick={handleOpenModal}
          >
         
            <BsPersonFillAdd className="text-[33px]" />
          </button>
        </div>
      </nav>

      <div className="flex flex-wrap gap-12 mt-15 justify-center items-center">
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

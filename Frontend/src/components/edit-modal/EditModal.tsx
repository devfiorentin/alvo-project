import { useEffect, useState } from "react";
import { AlvoData } from "../../interface/AlvoData";
import { useAlvoDataUpdate } from "../../hooks/useAlvoDataUpdate";

interface InputProps {
  value: string;
  updateValue(value: any): void;
  type?: string;
}

interface EditModalProps {
  alvo: AlvoData;
  closeModal(): void;
}

const Input = ({ type, value, updateValue }: InputProps) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(event) => updateValue(event.target.value)}
      className="mt-1 w-full p-2 border text-[#A7A5A6] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A7A5A6]"
    />
  );
};

export function EditModal({ alvo, closeModal }: EditModalProps) {
  const [name, setName] = useState(alvo.name);
  const [userSocial, setUserSocial] = useState(alvo.userSocial);
  const [dateExecute, setDateExecute] = useState(
    new Date(alvo.dateExecute).toISOString().split("T")[0]
  );

  const { mutate: updateAlvo, isSuccess

   } = useAlvoDataUpdate();

  useEffect(() => {
    if (isSuccess) {
      closeModal();
    }
  }, [isSuccess]);

  const handleSubmit = () => {
    const updatedData: AlvoData = {
      id: alvo.id, 
      name,
      userSocial: userSocial.toLowerCase(),
      dateExecute: new Date(dateExecute),
    };

    updateAlvo(updatedData, {
      onSuccess: () => {
        window.location.reload();
      }
    });
  };

  return (
    <div className="fixed inset-0 bg-[#070707] bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#0e0e0e] rounded-lg shadow-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-[#A7A5A6] mb-4">Editar Alvo</h2>
        <form className="space-y-4">
          <label htmlFor="" className="text-white">Edite o nome</label>
          <Input value={name} updateValue={setName} />
          <label htmlFor="" className="text-white">Edite a Rede Social</label>
          <Input value={userSocial} updateValue={setUserSocial} />
          <label htmlFor="" className="text-white">Edite a data de execução</label>
          <Input type="date" value={dateExecute} updateValue={setDateExecute} />
        </form>
        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-[#4E4C4D] text-white rounded-md hover:bg-[#7B797A] transition-colors duration-200 cursor-pointer"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-md text-[#151314] bg-[#A7A5A6] duration-200 cursor-pointer"
          >
            {"Salvar"}
          </button>
        </div>
      </div>
    </div>
  );
}

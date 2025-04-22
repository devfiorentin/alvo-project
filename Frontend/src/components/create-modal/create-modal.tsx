import { useEffect, useState } from "react";
import { AlvoData } from "../../interface/AlvoData";
import { useAlvoDataMutate } from "../../hooks/useAlvoDataMutade";

interface InputProps {
  value: string;
  updateValue(value: any): void;
  type?: string;
}

interface ModalProps {
  closeModal(): void;
}

const Input = ({ type, value, updateValue }: InputProps) => {
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={(event) => updateValue(event.target.value)}
        className="mt-1 w-full p-2 border border-gray-300  text-[#A7A5A6] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></input>
    </>
  );
};

export function CreateModal({ closeModal }: ModalProps) {
  const [name, setName] = useState("");
  const [userSocial, setUserSocial] = useState("");
  const [dateExecute, setDateExecute] = useState("");
  const { mutate, isSuccess, isLoading } = useAlvoDataMutate();

  useEffect(() => {
    if (isSuccess) {
      closeModal();
    }
  }, [isSuccess]);

  const submit = () => {
    const alvoData: AlvoData = {
      name: name,
      userSocial: userSocial.toLowerCase(),
      dateExecute: new Date(dateExecute),
    };

    console.log("Enviando para o backend:", alvoData);
    mutate(alvoData, {
      onSuccess: () => {
        console.log("Sucesso ao enviar!");
        closeModal();
      },
      onError: (error) => {
        console.error("Erro ao enviar:", error);
      },
    });
  };

  return (
    <div className="fixed inset-0 bg-[#151314] bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#191718]   rounded-lg shadow-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-[#A7A5A6] mb-4">Adicionar um Alvo</h2>
        <form className="space-y-4">
          <label htmlFor="" className="text-white">Nome do Alvo</label>
          <Input value={name} updateValue={setName} />
          <label htmlFor="" className="text-white">Rede Social do Alvo</label>
          <Input value={userSocial} updateValue={setUserSocial} />
          <label htmlFor="" className="text-white">Data de execução</label>
          <Input type="date" value={dateExecute} updateValue={setDateExecute} />
        </form>
        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-[#A7A5A6] text-[#191718] rounded-md hover:bg-gray-400 transition-colors duration-200 cursor-pointer"
          >
            Cancelar
          </button>
          <button
            onClick={submit}
            disabled={isLoading}
            className={`px-4 py-2 rounded-md text-white cursor-pointer ${
              isLoading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } transition-colors duration-200`}
          >
            {isLoading ? "Postando..." : "Postar"}
          </button>
        </div>
      </div>
    </div>
  );
}
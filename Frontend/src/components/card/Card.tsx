
import { useAlvoDataDelete } from "../../hooks/useAlvoDataDelete";

import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


import { EditModal } from "../edit-modal/EditModal";
import { useState } from "react";

interface CardProps {
  id: string;
  name: string;
  userSocial: string;
  dateExecute: string | Date;
}

export function Card({ id, name, userSocial, dateExecute }: CardProps) {
  // const { mutate: updateAlvo } = useAlvoDataUpdate();
  const { mutate: deleteAlvo } = useAlvoDataDelete();

  const [isEditing, setIsEditing] = useState(false);

  const date = new Date(dateExecute);
  date.setHours(date.getHours() + 3);

  const socialWithoutAt = userSocial.startsWith("@")
    ? userSocial.slice(1)
    : userSocial;
    

  const handleDelete = () => {
    deleteAlvo(id, {
      onSuccess: () => {
        window.location.reload();
      }
    });
  };

  return (
    <div className="bg-[#f4f4f5] rounded-xl shadow-lg p-4 w-[350px] justify-center">
      <h2 className="text-xl font-semibold text-[22px] text-[#070707] mb-2">{name}</h2>
      <a
        href={`https://www.instagram.com/${socialWithoutAt}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline text-[17px] mb-2 block "
      >
        @{userSocial}
      </a>

      <div className="flex items-center space-x-2 mb-2 w-full justify-between">
        <p className="text-gray-700 text-[17px]">
          Inicia em: {date.toLocaleDateString("pt-BR")}
        </p>

        <div className="botoes flex">
          <button
            onClick={() => setIsEditing(true)}
            className=" text-white mx-2 py-0 cursor-pointer"
          >
            <FaUserEdit className="text-gray-700 text-[20px]" />
          </button>
          <button
            onClick={handleDelete}
            className=" text-white mx-2 py-0 cursor-pointer rounded transition-colors"
          >
            <MdDelete className="text-gray-700 text-[20px]" />
          </button>
        </div>
      </div>

      <div className="mt-4 flex space-x-2">
        {isEditing && (
          <EditModal
            alvo={{
              id: Number(id),
              name,
              userSocial,
              dateExecute: new Date(dateExecute),
            }}
            closeModal={() => setIsEditing(false)}
          />
        )}
      </div>
    </div>
  );
}

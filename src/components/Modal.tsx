import { CloseCircle } from "iconsax-react";

interface ModalProps {
  toggle: () => void;
  children: React.ReactNode;
  modalVisibility: boolean;
}

export default function Modal({
  children,
  modalVisibility,
  toggle,
}: ModalProps) {
  return (
    <>
      {modalVisibility && (
        <div className="flex w-screen h-screen items-center justify-center fixed bg-[#25252590] z-30">
          <div className="flex flex-col items-center justify-center h-fit py-6 w-fit px-12 rounded-xl bg-white gap-6">
            <button onClick={toggle} className="w-full flex justify-end">
              <CloseCircle size={24} />
            </button>

            {children}
          </div>
        </div>
      )}
    </>
  );
}

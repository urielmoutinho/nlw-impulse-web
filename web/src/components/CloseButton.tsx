import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";
import { ReactNode } from "react";

function CloseButton() {
  return (
    <>
      <Popover.Button
        className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100"
        title="Fechar formulário "
      >
        <X weight="bold" className="w-4 h-4" />
      </Popover.Button>
    </>
  );
}

export default CloseButton;

import { Modal as ModalUI, useModal, Button, Text } from "@nextui-org/react";

interface ModalProps {
  handleConfirm: () => void;
  handleCancel: () => void;
  content: any;
  title?: string;
  open: boolean;
}
/*hola*/
export const Modal = ({
  handleConfirm,
  handleCancel,
  content,
  title,
  open,
}: ModalProps) => {
  const { bindings } = useModal();
console.log(open)
  const handleConfirmButton = () => {
    handleConfirm();
  };

  const handleCloseButton = () => {
    handleCancel();
  };

  return (
    <div>
      <ModalUI
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
    
        {...bindings}
        open={open}
      >
        <ModalUI.Header>
          <Text id="modal-title" size={18}>
            {title || "Bienvenido A EL APP!"}
          </Text>
        </ModalUI.Header>
        <ModalUI.Body>
          <Text id="modal-description">
            Esta dispuesto que explote su computadora luego de tocar el boton Agree?
          </Text>
        </ModalUI.Body>
        <ModalUI.Footer>
          <Button auto flat color="error" onPress={handleCloseButton}>
            Close
          </Button>
          <Button auto onPress={handleConfirmButton}>
            Agree
          </Button>
        </ModalUI.Footer>
      </ModalUI>
    </div>
  );
};
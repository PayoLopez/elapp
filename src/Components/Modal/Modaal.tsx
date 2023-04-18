import { Modal, useModal, Button, Text } from "@nextui-org/react";

interface ModaalProps{
  handleConfirm: ()=> void
  handleCancel: ()=>void
  content: any;

}


export const Modaal=({handleConfirm,handleCancel,content}:ModaalProps)=>{

  const { setVisible, bindings } = useModal();
  return (
    <div>
      <Button auto shadow color="secondary" onPress={() => setVisible(true)}>
        Open modal
      </Button>
      <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Bienvenido A EL APP!
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description">
        Esta dispuesto que explote su computadora luego de tocar el boton Agree? 
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={() => setVisible(false)}>
            Close
          </Button>
          <Button auto onPress={() => setVisible(false)}>
            Agree
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

   

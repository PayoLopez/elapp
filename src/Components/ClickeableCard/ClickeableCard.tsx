import { Card, Text } from "@nextui-org/react";

interface ClickeableCardProps{
    handleClick: ()=> void;
    title: string;
    status: 'EMPTY' | 'FULL';
}


export const ClickeableCard = ({handleClick,title,status}:ClickeableCardProps)=> {

 const isPressable = status == 'EMPTY';
 const bgColor = status == 'EMPTY' ?  "white" : "green";
   

    return (
        <Card
        isPressable={isPressable}
        isHoverable
        variant="bordered"
        onClick={handleClick}
        css={{ mw: "400px", bgColor}}
      >
        <Card.Body>
          <Text>{title}</Text>
        </Card.Body>
      </Card>
    );
      
    
}
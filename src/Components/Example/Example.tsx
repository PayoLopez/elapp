import {Button} from '@nextui-org/react';


interface ExampleProps {
  title: string;
  handleClick: () => void;
  disabled:boolean
}

export const Example = ({handleClick,title,disabled}:ExampleProps) => {
    return(
        <Button onClick={handleClick} disabled={disabled}>{title}</Button>
    )
};

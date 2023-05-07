import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface DateProps {
  handleChange: (e: any) => void;
}

export const DateInput = ({ handleChange }: DateProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        onChange={handleChange}
        sx={{
          border: "solid 1px white",
          borderRadius:'10px',
          '.MuiInputBase-input':{
            color:'white'
          }
        }}
      />
    </LocalizationProvider>
  );
};

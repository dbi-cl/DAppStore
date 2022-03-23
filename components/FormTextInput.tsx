import { Control, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { formType } from "../types";
import styles from "../pages/submit/submit.module.scss";

type InputProps = {
  label: string;
  required?: boolean;
  name: keyof formType;
  control: Control<formType, any>;
};

export function FormTextInput({
  label,
  name,
  control,
  required = false,
}: InputProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          className={styles.textArea}
          variant="standard"
          label={label}
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
        />
      )}
      rules={
        required
          ? { required: `${label.substring(0, label.length - 1)} is required!` }
          : {}
      }
    />
  );
}

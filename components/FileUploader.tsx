import { Button } from "@mui/material";
import { useState, useRef, useCallback, ChangeEvent } from "react";
import { Control, Controller, UseFormRegisterReturn } from "react-hook-form";
import { formType } from "../types";
import { toBase64 } from "../utils";

type file = {
  name: string;
  lastModified: number;
};

type FileInputProps = {
  label: string;
  required?: boolean;
  name: keyof formType;
  register?: UseFormRegisterReturn;
  control?: Control<formType, any>;
};

export function FileUploader({ label, name, control }: FileInputProps) {
  const [files, setFiles] = useState<file[]>([]);
  const [base64, setBase64] = useState<string[]>([]);
  const base64Ref = useRef<string[]>([]);
  const inputEle = useRef<HTMLInputElement>(null);
  base64Ref.current = base64;

  const onChange = useCallback(
    async (event: ChangeEvent<HTMLInputElement>, field: any) => {
      const inputFiles = event.target?.files;
      if (inputFiles) {
        const base64arr = await toBase64(inputFiles);
        setFiles(
          files.concat(
            Array.from(inputFiles ?? []).map((file) => ({
              name: file.name,
              lastModified: file.lastModified,
            }))
          )
        );
        setBase64(base64.concat(base64arr) as string[]);
        field.onChange(base64Ref.current);
      }
    },
    [files, base64]
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <>
            <input
              accept="image/*"
              ref={inputEle}
              multiple
              type="file"
              hidden
              onChange={async (e) => {
                await onChange(e, field);
              }}
            />
            <Button
              variant="contained"
              onClick={() => inputEle.current?.click()}
              sx={{ width: 300, margin: "0 auto" }}
            >
              {label}
            </Button>
            <div style={{ display: "flex", width: "80%", margin: "0 auto" }}>
              {base64.map((src, index) => (
                <div
                  key={index}
                  style={{
                    backgroundImage: `url(${src})`,
                    height: 200,
                    width: 200,
                  }}
                ></div>
              ))}
            </div>
          </>
        );
      }}
    />
  );
}

import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { DataContext } from "../App";
import {
  emptyFields,
  fields,
  labels,
  registerProps,
  validationSchema,
} from "../../constants";
import { isEmptyObject } from "../../utils";

export const Form = () => {
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { data, update } = useContext(DataContext);

  const submit = (formValues) => {
    update(formValues);
    reset(emptyFields);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      {fields.map((field) => (
        <div key={field}>
          <TextField
            name={field}
            label={labels[field]}
            type="number"
            inputRef={register(registerProps)}
            defaultValue={data?.[0]?.[field]}
            error={Boolean(errors[field])}
            helperText={errors[field]?.message}
          />
        </div>
      ))}

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!isEmptyObject(errors)}
        disableElevation
      >
        Отправить
      </Button>
    </form>
  );
};

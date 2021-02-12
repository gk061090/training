import * as yup from "yup";

// exercise names for training
export const pushUps = "push_ups";
export const squats = "squats";
export const plank = "plank";

export const fields = [pushUps, squats, plank];
export const labels = {
  [pushUps]: "Отжимания",
  [squats]: "Приседания",
  [plank]: "Планка (сек.)",
};
export const emptyFields = fields.reduce(
  (prev, field) => ({ ...prev, [field]: null }),
  {}
);

export const registerProps = { required: true };

export const validationSchema = yup.object().shape(
  fields.reduce(
    (obj, field) => ({
      ...obj,
      [field]: yup
        .number()
        .positive(`Поле "${labels[field]}" должно быть положительным числом`)
        .integer(`Поле "${labels[field]}" должно быть целым числом`)
        .required(`Поле "${labels[field]}" обязательно`)
        .typeError(`Поле "${labels[field]}" должно быть числом`),
    }),
    {}
  )
);

export const localStorageKey = "training";

export const errorMessage = (touched?: boolean, error?: string) => {
  return {
    error: Boolean(touched && error),
    helperText: touched && error
  };
};

export interface SignInFormState {
  login: string;
  password: string;
}

export interface UpdatePasswordFormState {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface UpdateLoginFormState {
  login: string;
}

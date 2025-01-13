export const validateName = (name: string) => {
  if (name.trim() === "") {
    throw new Error("Please provide a name");
  } else if (name.length < 3) {
    throw new Error("Name must be atlist 3 characters long");
  } else if (name.length > 35) {
    throw new Error("Name must be less than 35 characters long");
  } else if (!/^[a-zA-Z ]+$/.test(name)) {
    throw new Error("Name must not contain special characters and numbers");
  } else return;
};

export const validateEmail = (email: string) => {
  if (email.trim() === "") {
    throw new Error("Please provide an email address");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Please provide a valid email address");
  } else return;
};

export const validatePassword = (password: string) => {
  if (password.trim() === "") {
    throw new Error("Password fiels shold not be empty");
  } else if (password.length < 6) {
    throw new Error("Password must be atlist 6 characters long");
  }
  if (!/[a-z]/.test(password)) {
    throw Error("Password must contain at least one lowercase letter.");
  } else if (!/[A-Z]/.test(password)) {
    throw Error("Password must contain at least one uppercase letter.");
  } else if (!/[0-9]/.test(password)) {
    throw Error("Password must contain at least one number.");
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    throw Error("Password must contain at least one special character.");
  } else return;
};

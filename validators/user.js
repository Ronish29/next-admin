import Joi from "joi";

const userValidator = Joi.object({
  user_name: Joi.string().trim().min(2).max(40).required().messages({
    "string.empty": "User Name is required field",
    "string.min": "User Name must be greater then 2 character",
    "string.max": "User Name must be less then 40 character",
  }),
  name: Joi.string().trim().min(2).max(40).required().messages({
    "string.empty": "Name is required field",
    "string.min": "Name must be greater then 2 character",
    "string.max": "Name must be less then 40 character",
  }),
  email: Joi.string().trim().email().required().messages({
    "string.email": "Email must be in valid format",
    "string.empty": "Email is required",
  }),
  mobile: Joi.string().trim().min(10).max(12).required().messages({
    "string.empty": "Phone Number is required field",
    "string.min": "Phone Number must be greater then 10 character",
    "string.max": "Phone Number must be less then 12 character",
  }),
  password: Joi.string().trim().min(8).max(40).required().messages({
    "string.empty": "Password is required field",
    "string.min": "Password must be greater then 8 character",
    "string.max": "Password must be less then 40 character",
  }),
  isSuperAdmin: Joi.boolean().optional(),
  roleId: Joi.number(),
});

export default userValidator;

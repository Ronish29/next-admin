import Joi from "joi";

const contactValidator = Joi.object({
  firstName: Joi.string().trim().min(2).max(40).required().messages({
    "string.empty": "First Name is required field",
    "string.min": "First Name must be greater then 2 character",
    "string.max": "First Name must be less then 40 character",
  }),
  lastName: Joi.string().trim().min(2).max(40).required().messages({
    "string.empty": "Name is required field",
    "string.min": "Name must be greater then 2 character",
    "string.max": "Name must be less then 40 character",
  }),
  email: Joi.string().trim().email().required().messages({
    "string.email": "Email must be in valid format",
    "string.empty": "Email is required",
  }),
  message: Joi.string().trim().min(2).max(255).required().messages({
    "string.empty": "Message is required field",
    "string.min": "Message must be greater then 2 character",
    "string.max": "Message must be less then 40 character",
  }),
  phone_number: Joi.string().trim().min(10).max(12).required().messages({
    "string.empty": "Phone Number is required field",
    "string.min": "Phone Number must be greater then 10 character",
    "string.max": "Phone Number must be less then 12 character",
  }),
  subject: Joi.string().trim().min(2).max(40).required().messages({
    "string.empty": "Subject is required field",
    "string.min": "Subject must be greater then 2 character",
    "string.max": "Subject must be less then 40 character",
  }),
});

export default contactValidator;

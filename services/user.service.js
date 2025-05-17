import sendResponse from "@/utils/sendResponse";
import sendErrorResponse from "@/utils/sendErrorResponse";
import prisma from "@/lib/prisma";
import userValidator from "../validators/user";
import bcrypt from "bcrypt";
import { create_user, delete_user, find_user, get_all_user, update_user } from "../repositories/user";

export const createUser = async (req, res, model) => {
  const data = req.body;
  console.log(req.body, "req.body======");

  try {
    const { error, value } = userValidator.validate(data);

    if (error) {
      console.log(error);
      return sendErrorResponse(res, error.message, 400);
    }

    const existing = await prisma[model].findFirst({
      where: {
        email: value.email,
      },
    });

    if (existing)
      return sendErrorResponse(
        res,
        "User already filled form with thid email id, try using another email",
        401
      );

    const hashedPassword = await bcrypt.hash(value.password, 10);

    const member = await create_user({ ...value, password: hashedPassword })

    sendResponse(res, member, 201);
  } catch (err) {
    console.log(err, "error=========");
    return sendErrorResponse(res, err.message, 400);
  }
};

export const getAllUser = async (req, res, model) => {
  try {
    // Validate query params
    const { currPage = 1, records = 10, searchTerm = "" } = req.query;

    const page = parseInt(currPage, 10);
    const limit = parseInt(records, 10);
    const offset = (page - 1) * limit;

    const filter = searchTerm
      ? {
        OR: [
          {
            user_name: {
              contains: searchTerm
            },
          },
          {
            email: {
              contains: searchTerm
            },
          },
        ],
      }
      : {};

    const { users, total } = await get_all_user({ where: filter, skip: offset, take: limit })

    return sendResponse(res, { users, total }, 200);
  } catch (err) {
    console.error("Error fetching contacts:", err);
    return sendErrorResponse(res, "Server Error", 500);
  }
};

export const getSingleUser = async (req, res, model) => {
  const { id } = req.query;

  try {
    const singleContct = find_user({ id });

    if (!singleContct) {
      sendErrorResponse(res, "Member not found!", 404);
    }

    sendResponse(res, singleContct, 200);
  } catch (err) {
    console.log(err, "error=========");
    sendErrorResponse(res, err.message, 400);
  }
};

export const updateUser = async (req, res, model) => {
  const { id } = req.query;
  const data = req.body;

  try {
    const { error, value } = userValidator.validate(data);

    if (error) {
      console.log(error);

      return sendErrorResponse(res, error.message, 400);
    }

    const existing = await prisma[model].findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (existing)
      return sendErrorResponse(
        res,
        "User already filled form with thid email id, try using another email",
        401
      );

    const member = await update_user({ ...value, password: hashedPassword, id })

    sendResponse(res, member, 200);
  } catch (err) {
    console.log(err, "error=========");
    return sendErrorResponse(res, err.message, 400);
  }
};

export const deleteUser = async (req, res, model) => {
  const { id } = req.query;

  try {
    const singleContct = await find_user({ id })

    if (!singleContct) {
      sendErrorResponse(res, "Member not found!", 404);
    }

    const deleted = delete_user({ id });

    sendResponse(res, deleted, 200);
  } catch (err) {
    console.log(err, "error=========");
    sendErrorResponse(res, err.message, 400);
  }
};

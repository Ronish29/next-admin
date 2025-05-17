import sendResponse from "@/utils/sendResponse";
import contactValidator from "../validators/contact";
import sendErrorResponse from "@/utils/sendErrorResponse";
import prisma from "@/lib/prisma";
import { create_role, delete_role, find_role, get_all_role, update_role } from "../repositories/role";

export const createRole = async (req, res, model) => {
  const { name, permissions, redirect_url } = req.body;
  console.log(req.body, "re.body======");

  try {

    if (!name)
      return sendErrorResponse(
        res,
        "role name is required",
        401
      );

    const existing = await prisma[model].findUnique({
      where: {
        name,
      },
    });

    if (existing)
      return sendErrorResponse(
        res,
        "role exist with this name, try another name",
        401
      );

    const role = await create_role({ name, permissions, redirect_url });

    sendResponse(res, role, 201);
  } catch (err) {
    console.log(err, "error=========");
    return sendErrorResponse(res, err.message, 400);
  }
};

export const getAllRole = async (req, res, model) => {
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
            firstName: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            lastName: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
        ],
      }
      : {};

    const { roles, total } = await get_all_role({ where: filter, skip: offset, take: limit })


    return sendResponse(res, { roles, total }, 200);
  } catch (err) {
    console.error("Error fetching contacts:", err);
    return sendErrorResponse(res, "Server Error", 500);
  }
};

export const getSingleRole = async (req, res, model) => {
  const { id } = req.query;

  try {
    const singleContct = await find_role({ id });

    if (!singleContct) {
      sendErrorResponse(res, "Member not found!", 404);
    }

    sendResponse(res, singleContct, 201);
  } catch (err) {
    console.log(err, "error=========");
    sendErrorResponse(res, err.message, 400);
  }
};

export const updateRole = async (req, res, model) => {
  const { id } = req.query;
  const { name, permissions, redirect_url } = req.body;

  try {

    if (!name)
      return sendErrorResponse(
        res,
        "role name is required",
        401
      );

    const existing = await prisma[model].findUnique({
      where: {
        name,
      },
    });

    if (existing)
      return sendErrorResponse(
        res,
        "role exist with this name, try another name",
        401
      );

    const member = await update_role({ name, permissions, redirect_url });

    sendResponse(res, member, 201);
  } catch (err) {
    console.log(err, "error=========");
    return sendErrorResponse(res, err.message, 400);
  }
};

export const deleteRole = async (req, res, model) => {
  const { id } = req.query;

  try {
    const singleContct = await find_role({ id });

    if (!singleContct) {
      sendErrorResponse(res, "Member not found!", 404);
    }

    const deleted = delete_role({ id });

    sendResponse(res, deleted, 201);
  } catch (err) {
    console.log(err, "error=========");
    sendErrorResponse(res, err.message, 400);
  }
};

import sendResponse from "@/utils/sendResponse";
import contactValidator from "../validators/contact";
import sendErrorResponse from "@/utils/sendErrorResponse";
import prisma from "@/lib/prisma";

export const createContact = async (req, res, model) => {
  const data = req.body;
  console.log(req.body, "re.body======");

  try {
    const { error, value } = contactValidator.validate(data);

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

    const member = await prisma[model].create({
      data: value,
    });

    sendResponse(res, member, 201);
  } catch (err) {
    console.log(err, "error=========");
    return sendErrorResponse(res, err.message, 400);
  }
};

export const getAllContact = async (req, res, model) => {
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

    const data = await prisma[model].findMany({
      skip: offset,
      take: limit,
      where: filter,
    });

    const totalRecords = await prisma[model].count({
      where: filter,
    });

    return sendResponse(res, { data, totalRecords }, 200);
  } catch (err) {
    console.error("Error fetching contacts:", err);
    return sendErrorResponse(res, "Server Error", 500);
  }
};

export const getSingleContact = async (req, res, model) => {
  const { id } = req.query;

  try {
    const singleContct = await prisma[model].findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!singleContct) {
      sendErrorResponse(res, "Member not found!", 404);
    }

    sendResponse(res, singleContct, 201);
  } catch (err) {
    console.log(err, "error=========");
    sendErrorResponse(res, err.message, 400);
  }
};

export const updateContact = async (req, res, model) => {
  const { id } = req.query;
  const data = req.body;

  try {
    const { error, value } = contactValidator.validate(data);

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

    const member = await prisma[model].create({
      data: value,
    });

    sendResponse(res, member, 201);
  } catch (err) {
    console.log(err, "error=========");
    return sendErrorResponse(res, err.message, 400);
  }
};

export const deleteContact = async (req, res, model) => {
  const { id } = req.query;

  try {
    const singleContct = await prisma[model].findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!singleContct) {
      sendErrorResponse(res, "Member not found!", 404);
    }

    await prisma[model].delete({
      where: {
        id: parseInt(id),
      },
    });

    sendResponse(res, singleContct, 201);
  } catch (err) {
    console.log(err, "error=========");
    sendErrorResponse(res, err.message, 400);
  }
};

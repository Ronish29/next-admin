import prisma from "@/lib/prisma";

export async function create_user(input) {
  const { user_name, name, email, password, isSuperAdmin, roleId, mobile } =
    input;

  const user = await prisma.user.create({
    data: {
      user_name,
      email,
      mobile,
      name,
      isSuperAdmin,
      password,
      roleId
    },
    include: {
      role: true,
    },
  });

  return user;
}


export async function update_user(input) {
  const {
    user_name,
    name,
    email,
    password,
    isSuperAdmin,
    roleId,
    mobile,
    id,
  } = input;

  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      user_name,
      email,
      mobile,
      name,
      isSuperAdmin,
      password,
      roleId
    },
    include: {
      role: true,
    },
  });

  return user;
}

export async function delete_user(input) {
  const { id } = input;

  const deletedUser = await prisma.user.delete({
    where: { id: parseInt(id) },
  });

  return deletedUser;
}

export async function find_user(input) {
  const { id } = input;
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });

  return user;
}

export async function get_all_user(input) {
  const { where = {}, skip = 1, take = 10 } = input;
  const [users, total] = await Promise.all([
    prisma.user.findMany({
      where: where,
      skip,
      take: take,
      include: {
        role: true
      }
    }),
    prisma.user.count({ where: where }),
  ]);

  return { users, total };
}

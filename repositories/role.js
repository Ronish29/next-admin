import prisma from "@/lib/prisma";

export async function create_role(input) {
  const { name, permissions, redirect_url } = input;
  const role = await prisma.role.create({
    data: {
      name,
      permissions,
      redirect_url,
    },
  });

  return role;
}

export async function update_role(input) {
  const { id, name, permissions, redirect_url } = input;

  const role = await prisma.role.update({
    where: { id },
    data: {
      ...(name && { name }),
      ...(permissions && { permissions }),
      ...(redirect_url && { redirect_url }),
    },
  });

  return role;
}


export async function delete_role(input) {
  const { id } = input;

  const deletedRole = await prisma.role.delete({
    where: { id },
  });

  return deletedRole;
}

export async function find_role(input) {
  const { id } = input;
  const role = await prisma.role.findUnique({
    where: { id },
  });

  return role;
}

export async function get_all_role(input) {
  const { where = {}, skip = 1, take = 10 } = input;
  const [roles, total] = await Promise.all([
    prisma.role.findMany({
      where: where,
      skip,
      take: take,
    }),
    prisma.role.count({ where: where }),
  ]);

  return { roles, total };
}

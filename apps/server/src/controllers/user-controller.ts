import { Context } from 'hono';
import { createPrismaClient } from '../db/db_index';
import { Env } from "../types/env.d"

const registerUser = async (c: Context<{ Bindings: Env }>) => {
    try {
        const body = await c.req.json();
        const prisma = createPrismaClient(c.env)
        const user = await prisma.user.create({
            data: {
                email: body.email,
                firstname: body.firstname,
                lastname: body.lastname,
                password: body.password
            }
        });

        return c.json({
            success: true,
            message: "user created successfully",
            data: user
        }, 201);
    } catch (error) {
        console.error("error while creating user", error);
        return c.json({
            success: false,
            error: "failed to create user"
        }, 500)
    }
}

export { registerUser };

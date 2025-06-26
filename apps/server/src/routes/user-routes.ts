import { Hono } from "hono";
import { registerUser } from "../controllers/user-controller";
import { Env } from "../types/env.d"
const userRoutes = new Hono<{ Bindings: Env }>()

userRoutes.post('/register', registerUser)

export default userRoutes

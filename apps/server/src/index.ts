import { Hono } from "hono";
import { cors } from "hono/cors"
import userRoutes from "./routes/user-routes";
import { Env } from "./types/env.d"
const app = new Hono<{ Bindings: Env }>();

app.use('*', cors());


app.get('/', (c) => {
    return c.json({ message: 'API is running' })

})

app.route('/users', userRoutes)

export default app;

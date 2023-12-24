import { z } from "zod";


export const registerSchema = z.object({
    email: z.string().email(),
    name: z.string().min(3, {message: "Your name cannot be that short"}).max(244),
    password: z.string().min(6).max(30),
    cpassword: z.string().min(6).max(30)
})
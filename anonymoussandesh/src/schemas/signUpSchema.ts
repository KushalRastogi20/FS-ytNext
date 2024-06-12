import { z } from "zod";
 
export const usernameValidation= z
            .string()
            .min(4,"Username must be atleast 4 charecter")
            .max(8,"Username must not exceed 8 charecters")
            .regex(/^[a-zA-Z0-(_])]+$/,"Username must not conatin special charecter")

export const signUpSchema=z.object({
    username: usernameValidation,
    email:z.string().email({message:"Invalid email"}),
    password:z.string().min(6,{message:"Must be atleast 6 charecters"})
})            
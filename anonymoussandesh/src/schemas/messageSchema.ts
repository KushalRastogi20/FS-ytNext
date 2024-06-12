import { z } from "zod";

 export const messageSchema=z.object({
    content:z.string().min(10,{message: "Not sufficient"}).max(300,"Exceeding limits"),
    
})
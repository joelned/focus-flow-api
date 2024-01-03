import jwt from "jsonwebtoken";

interface UserPayLoad{
    id: number
}

//bad practice=> should be stored in env but for some reason envs in vs code & typescript are confusing 
export const private_key = "werfdfgfhdtgfdvbsgnhaedsfgbfdvgshy234567yhgvc"

export function createjwt(userpayload: UserPayLoad): string {
    const expiresIn = "1h"

    const token = jwt.sign(userpayload,private_key, {expiresIn})
    return token;
}
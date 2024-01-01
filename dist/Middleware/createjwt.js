import jwt from "jsonwebtoken";
//bad practice=> should be stored in env but for some reason envs in vs code & typescript are confusing 
export const private_key = "werfdfgfhdtgfdvbsgnhaedsfgbfdvgshy234567yhgvc";
export function createjwt(userpayload) {
    const expiresIn = "1h";
    const token = jwt.sign(userpayload, private_key, { expiresIn });
    return token;
}
//# sourceMappingURL=createjwt.js.map
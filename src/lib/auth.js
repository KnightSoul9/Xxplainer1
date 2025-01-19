import { parseCookies } from "../utils/helper";

export const  getAuthUserFromCookie = (ctx) => {
    let user;
    const data = parseCookies(ctx);
    user = (data.user && JSON.parse(data.user)) || null;
    return user;
}
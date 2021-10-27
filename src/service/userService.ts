import {postJson} from "./apiService";
import {USER_ENDPOINT} from "../model/Endpoint";
import {User} from "../model/User";

export const findUserById = (id: string): Promise<User> =>
    postJson(USER_ENDPOINT, {id});

export const getUserId = () => "michael.d.robideau@gmail.com";
import { LoginRequest } from "../models/types/loginRequest";
import { LoginResponse } from "../models/types/loginResponse";
import { postAsync } from "../../../shared/api/axios";
import { SIGN_IN_PATH } from "../../../shared/config/api";

export const login = async (request: LoginRequest) =>
    await postAsync<LoginRequest, LoginResponse>(SIGN_IN_PATH, request);

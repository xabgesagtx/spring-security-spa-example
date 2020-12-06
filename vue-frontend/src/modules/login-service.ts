import {Unauthorized} from "@/types/unauthorized";
import {Forbidden} from "@/types/forbidden";

export class LoginService {
    async login(username: string, password: string): Promise<{ username: string; message: string }> {
        const urlencoded = new URLSearchParams();
        urlencoded.append("username", username);
        urlencoded.append("password", password);
        const response = await fetch('/api/login', {method: 'POST', body: urlencoded})
        if (response.status === 403) {
            throw new Forbidden('Forbidden: Maybe bad credentials?')
        } else if (response.status === 401) {
            throw new Unauthorized('User is not authorized')
        } else {
            return await response.json()
        }
    }
}
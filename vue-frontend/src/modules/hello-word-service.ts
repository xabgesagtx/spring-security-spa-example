import {Unauthorized} from "@/types/unauthorized";

export class HelloWordService {
    async getMessage(): Promise<{hello: string}> {
        const response = await fetch('/api/hello')
        if (response.status === 401) {
            throw new Unauthorized('User is not authorized')
        } else {
            return await response.json()
        }
    }
}
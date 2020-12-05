export class UserInfoService {
    async userInfo(username: string, password: string): Promise<{ name: string }> {
        const headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));
        const response = await fetch('/api/user', { headers })
        if (response.ok) {
            return await response.json()
        } else {
            throw Error('Failed to login: ' + response.status)
        }
    }
}

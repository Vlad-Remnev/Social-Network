import axios from 'axios'

const instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        data: {},
        headers: {
            'API-KEY': 'cbcee176-7eb2-4a97-9122-df66bf35b024'
        }
    });

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => response.data)
    },
    followUser(id: number) {
        return instance.post(`follow/${id}`)
    },
    unFollowUser(id: number) {
        return instance.delete(`follow/${id}`)
    },
}

export const profileAPI = {
    changeUserTemplate(userId: string) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    }
}

export const userMainAPI = {
    auth() {
        return instance.get('auth/me')
            .then((response) => response.data)
    },
    changeUserTemplate(userId: string) {
        // console.warn('Obsolete method! Please use profileAPI.changeUserTemplate')
        return profileAPI.changeUserTemplate(userId)
    },
    login(email: string, password: string) {
        return instance.post('auth/login')
    }
}


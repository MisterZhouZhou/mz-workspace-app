import api from "./api"

export const userApi = {
  /**
   * 获取用户信息
   * @param id 用户id 
   * @returns 
   */
  getUser(id: number | string): Promise<any> {
    return api.get(`user/${id}`)
  },
  /**
   * 创建用户
   * @param data 
   * @returns 
   */
  createUser(data: any): Promise<any> {
    return api.post('user', data)
  }
}
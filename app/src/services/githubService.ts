import fetch from 'node-fetch'

import GithubUser from '../models/github/user'

class GithubService {
  private baseUrl: string

  constructor() {
    this.baseUrl = 'https://api.github.com'
  }

  /**
   * Githubのユーザーを複数取得する
   * @returns Promise
   */
  async getGithubUsers(): Promise<GithubUser[] | null> {
    const response = await fetch(this.baseUrl + '/users')
      .then((res) => res)
      .catch((error) => {
        console.error(error)
        return null
      })

    if (response === null) {
      return null
    }

    const jsonResponse = await response
      .json()
      .then((json) => json)
      .catch((error) => {
        console.error(error)
        return null
      })

    if (jsonResponse === null) {
      return null
    }
    const result: GithubUser[] = []
    for (let i = 0; i < jsonResponse.length; i++) {
      const targetData = jsonResponse[i]
      const githubUser: GithubUser = {
        id: targetData.id,
        userName: targetData.login,
        nodeId: targetData.node_id,
      }
      result.push(githubUser)
    }
    return result
  }
}

export default new GithubService()

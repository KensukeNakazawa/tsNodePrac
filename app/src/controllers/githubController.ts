import BaseController from './baseController'

import GithubUser from '../models/github/user'
import githubService from '../services/githubService'

class GithubController extends BaseController {
  /**
   * @returns Promise
   */
  getUsers = async (): Promise<GithubUser[] | null> => {
    return await githubService.getGithubUsers()
  }
}

export default new GithubController()

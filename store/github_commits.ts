import { GetterTree, ActionTree, MutationTree } from 'vuex'
import axios from 'axios'

const repoOwner = 'ehoraizon'
const ghApiRepoCommits = `https://api.github.com/repos/${repoOwner}/vue-commits/commits`

export type Commit = {
  authorName: string
  authorDate: string
  authorLink: string
  authorAvatar: string
  commiterName: string
  commiterDate: string
  commiterLink: string
  commiterAvatar: string
  message: string
  verified: boolean
  html_url: string
}

export const state = () => ({
  commits: [] as Commit[],
})

export type RootState = ReturnType<typeof state>
export const getters: GetterTree<RootState, RootState> = {
  commits: (state) => state.commits,
}
export const mutations: MutationTree<RootState> = {
  SET_COMMITS: (state, commits: Commit[]) => (state.commits = commits),
}
export const actions: ActionTree<RootState, RootState> = {
  async getCommits({ commit }) {
    let commits = [] as Commit[]
    try {
      commits = (await axios.get(ghApiRepoCommits)).data?.map((val: any) => ({
        authorName: val?.commit?.author?.name ?? repoOwner,
        authorDate: val?.commit?.author?.date ?? '',
        authorLink: val?.author?.html_url ?? '',
        authorAvatar: val?.author?.avatar_url ?? '',
        committerName: val?.commit?.committer?.name ?? repoOwner,
        committerDate: val?.commit?.committer?.date ?? '',
        committerLink: val?.committer?.html_url ?? '',
        committerAvatar: val?.committer?.avatar_url ?? '',
        message: val?.commit?.message ?? '',
        verified: val?.verification?.verified ?? false,
        html_url: val?.html_url ?? '',
      }))
    } catch (e) {
      console.log(e)
    }
    commit('SET_COMMITS', commits)
  },
}

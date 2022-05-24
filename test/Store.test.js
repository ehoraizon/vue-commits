import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { state, getters, mutations, actions } from '@/store/github_commits'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/github_commits', () => {
  let store

  beforeAll(async () => {
    store = new Vuex.Store({state, getters, mutations, actions})
  })

  describe("commits", () => {
    let commits

    beforeAll(async () => {
      await store.dispatch('getCommits')
    })

    beforeEach(() => {
      commits = store.getters['commits']
    })

    test("commits is an array", () => {
      expect(Array.isArray(commits)).toBe(true)
    })

    test("commits is greater than 0", () => {
      expect(commits.length).toBeGreaterThan(0)
    })
  })
})

import { makeObservable, action, observable, computed } from 'mobx'

const sortByUpdatedAt = (a, b) => (a.updated_at > b.updated_at ? -1 : 0)

class ProjectStore {
  projects = []
  lastFetched = null

  constructor() {
    makeObservable(this, {
      projects: observable,
      lastFetched: observable,
      setProjects: action.bound,
      setLastFetched: action.bound,
      latestProjects: computed,
    })
  }

  setProjects(projects) {
    this.projects = projects
  }

  setLastFetched(lastFetched) {
    this.lastFetched = lastFetched
  }

  get latestProjects() {
    return this.projects.slice().sort(sortByUpdatedAt).slice(0, 10)
  }
}

const store = new ProjectStore()

export default store

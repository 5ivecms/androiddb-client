import type { Application } from './application.model'

export interface Developer {
  applications?: Application[]
  id: number
  name: string
}

export interface DeveloperSearch {
  id?: number
  name?: string
}

export interface DeveloperUpdateDto {
  applicationIds: number[]
  name: string
}

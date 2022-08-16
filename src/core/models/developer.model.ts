import { Application } from './application.model'

export interface Developer {
  id: number
  name: string
  applications?: Application[]
}

export interface DeveloperSearch {
  id?: number
  name?: string
}

export interface DeveloperUpdateDto {
  name: string
  applicationIds: number[]
}

export interface Application {
  id: number
  title: string
  thumb: string
  shortDescription: string
  description: string
  pdalifeUrl: string
  googlePlayUrl: string
  lang?: string
  parsingStatus: number

  developer: any
  categories: any
  tags: any
  screenshots: any
  applicationVersions: any
}

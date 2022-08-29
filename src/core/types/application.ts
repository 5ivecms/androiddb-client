export enum ParsingStatus {
  UNCOMPLETED = 1,
  PROCESS = 2,
  COMPLETED = 3
}

export type ParsingStatusType =
  | ParsingStatus.COMPLETED
  | ParsingStatus.PROCESS
  | ParsingStatus.UNCOMPLETED

export enum ParsingStatusText {
  COMPLETED = 'Завершен',
  PROCESS = 'В процессе',
  UNCOMPLETED = 'Новый'
}

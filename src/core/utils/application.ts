import { ParsingStatus, ParsingStatusType } from '../types/application'

export const getParsingStatusText = (parsingStatus: ParsingStatusType) => {
  switch (parsingStatus) {
    case ParsingStatus.COMPLETED: {
      return 'Завершен'
    }

    case ParsingStatus.PROCESS: {
      return 'В процессе'
    }

    case ParsingStatus.UNCOMPLETED: {
      return 'Новый'
    }
  }
}

import type { ParsingStatusType } from '../types/application'
import { ParsingStatus, ParsingStatusText } from '../types/application'

export const getParsingStatusText = (
  parsingStatus: ParsingStatusType
): ParsingStatusText => {
  switch (parsingStatus) {
    case ParsingStatus.COMPLETED: {
      return ParsingStatusText.COMPLETED
    }

    case ParsingStatus.PROCESS: {
      return ParsingStatusText.PROCESS
    }

    case ParsingStatus.UNCOMPLETED: {
      return ParsingStatusText.UNCOMPLETED
    }

    default:
      return ParsingStatusText.UNCOMPLETED
  }
}

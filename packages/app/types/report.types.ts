import { TTask } from 'app/types/task.types'
import { TUser } from 'app/types/user.types'

export type TReport={
  "id": 1,
  "title": "какой то отчет",
  "location": "какая то локация",
  "description": "какой то отчет",
  "userList": TUser[],
  "task": TTask
  "taskId": 0
}
export type TReportPayload=Partial<Omit<TReport, 'id' | 'taskId'>> & {taskId:number}

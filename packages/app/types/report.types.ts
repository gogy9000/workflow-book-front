import { TTask } from 'app/types/task.types'
import { TUser } from 'app/types/user.types'

export type TReport={
  "id": number,
  "title": string,
  "location":string,
  "description": string,
  "userList": TUser[],
  "task": TTask|undefined
  "taskId": number
  createdAt: string
  updatedAt:string
  'phase':"creation"|"ready"
  'author':TUser|null
  'authorId':number|null

}
export type TReportPayload=Partial<Omit<TReport, 'id' | 'taskId'|'userList'>> & {
  taskId:number,
  userList:number[]
}

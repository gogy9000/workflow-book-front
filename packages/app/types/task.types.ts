import { TUser } from 'app/types/user.types'
import { TReport } from 'app/types/report.types'

export type TTask={
  "id": number,
  "title": string,
  "location": string,
  "description": string,
  "userList": TUser[],
  "report": {}
  "createdAt":string,
  "updatedAt":string
}

export type TTaskResponse=TTask

export type TTaskInput=Omit<TTask,'createdAt'|'updatedAt'|'id'|'userList'>&{
  userList:number[]
}

export type TTaskPayload=Partial<{
  "title": string,
  "location": string,
  "description": string,
  "userList": number[],
  "report": TReport
}>


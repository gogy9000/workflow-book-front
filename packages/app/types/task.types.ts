import { TUser } from 'app/types/user.types'

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

export type TTaskPayload=Partial<{
  "title": string,
  "location": string,
  "description": string,
  "userList": number[],
  "report": {}
}>

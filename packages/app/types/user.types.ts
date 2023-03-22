import { TTask } from 'app/types/task.types'

export type TUser={
  "id": number
  "email": string
  "banned": boolean
  "banReason": string,
  tasks:TTask[]
}
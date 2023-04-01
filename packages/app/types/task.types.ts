import { TUser } from 'app/types/user.types'
import { TReport } from 'app/types/report.types'

export type TTask = {
  'id': number,
  'title': string,
  'location': string,
  'description': string,
  'userList': TUser[],
  'report': TReport | null,
  reportOfficer: TUser | null
  reportOfficerId: number | null
  'author': TUser | null
  'authorId': number | null,
  'createdAt': string,
  'updatedAt': string
  'phase': 'creation' | 'ready'
}

export type TTaskResponse = TTask

export type TTaskInput = Omit<TTask, 'createdAt' | 'updatedAt' | 'id' | 'userList' | 'reportOfficerId'> & {
  'userList': number[]
  'reportOfficerId': number
}

export type TTaskPayload = Partial<{
  'title': string,
  'location': string,
  'description': string,
  'userList': number[],
  'reportOfficerId': number|null,
  'phase': 'creation' | 'ready'
}>


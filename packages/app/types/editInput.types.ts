

export type TEditInput={
  "title": string,
  "location": string,
  "description": string,
  "userList": number[]
  "reportOfficerId"?:number|null
}

export type TEditTaskInput= TEditInput&{
  "reportOfficerId":number|null
}
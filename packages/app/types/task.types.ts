export type TTaskResponse={
  "id": number,
  "title": string,
  "location": string,
  "description": string,
  "userList": [],
  "report": {}
  "createdAt":string,
  "updatedAt":string
}
export type TTaskPayload=Partial<Omit<TTaskResponse, 'createdAt'|'updatedAt'|'id'>>

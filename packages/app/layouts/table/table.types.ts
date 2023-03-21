import { ReactElement } from 'react'

export type CellType = string | ReactElement
export type RowType = Array<CellType>
export type BodyType = Array<RowType>

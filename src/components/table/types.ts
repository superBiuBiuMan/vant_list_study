import {Ref} from "vue";

export type Align = 'left' | 'right' | 'center'
export interface ColumnProps {
    slot?:boolean
    width?:string
    headerTitle: string
    headerAlign?:Align
    contentAlign?:Align
    key:string
}

export type SetData = (data:any[]) => void
export type SetColumns = (data:ColumnProps[]) => void
export type UseTable = () => {
    columns: Ref<ColumnProps[]>
    rows: Ref<any[]>

    setColumns: SetColumns
    setData: SetData
}
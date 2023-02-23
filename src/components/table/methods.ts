import {ColumnProps, SetColumns, SetData, UseTable} from "./types";
import {ref} from "vue";

export const useTable:UseTable = () => {
    const columns = ref<ColumnProps[]>([])

    const rows = ref<any[]>([])
    const setColumns: SetColumns = (data) => columns.value = data
    const setData: SetData = (data) => rows.value = data

    return {
        columns,
        rows,
        setColumns,
        setData
    }
}
export interface ColumnInterface {
    label: String,
    dataIndex: String
}

export interface ColDataInterface {
    data: Array<any>
}

export interface GridInterface {
    columns: Array<ColumnInterface>
}
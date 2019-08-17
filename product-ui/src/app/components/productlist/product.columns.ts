import { ActionsColumn } from "./ActionsColumnComponent";

export const PRODUCT_COLUMN_CONFIG = [{
    label: 'Product Name',
    dataIndex: 'prod_name'
},{
    label: 'Comments',
    dataIndex: 'comments'
},{
    label: 'Created By',
    dataIndex: 'created'
},{
    label: 'Actions',
    render: ActionsColumn
}];
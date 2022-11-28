import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import api from '../http'
import { ModuleRegistry } from '@ag-grid-community/core'
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model'
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping'
import style from '../styles/login.module.css'
ModuleRegistry.registerModules([ClientSideRowModelModule, RowGroupingModule])


const cellEditorSelector = (params) => {
    console.log(params.colDef?._params)
    if (params.colDef._params) {
        return {
            component: 'agSelectCellEditor',
            params: {
                values: params.colDef._params,
            },
            popup: false,
        }
    }
}

function Table({ url, company_id }) {
    const gridRef = useRef()
    const [rowData, setRowData] = useState([])
    const [columnDefs, setColumnDefs] = useState()
    const [for_next_req, setFor_next_req] = useState([])
    const [gridApi, setGridApi] = useState(null)
    const [mainUrl, setMainUrl] = useState(url)
    const [companyId, setCompany_id] = useState(company_id)
    const [gridFilter, setGridFilter] = useState({})
    useEffect(() => {
        setCompany_id(company_id)
        setMainUrl(url)
        console.log('company_id', company_id)
    }, [company_id])
    class WildMiddleService {
        static async getAll(data) {
            return api.post(`/${mainUrl}/data`, data)
        }
        static async allFields() {
            console.log('qwe', mainUrl)
            return api.get(`/${mainUrl}/fields`)
        }
        static async delete(_id) {
            return api.delete(`/${mainUrl}/${_id}`)
        }
        static async change(data, _id) {
            return api.put(`/${mainUrl}/${_id}`, data)
        }
        static async add(data) {
            return api.post(`/${mainUrl}/`, data)
        }
    }

    const perPage = 20
    async function getRowData() {
        const data = {
            fields: for_next_req, //
            search: '',
            visibility: 0,
            sort_by: 'createdAt', //
            sort_dir: 'ASC', //
            commercial_category_id: [],
            company_id: 491058,
            language: 'RU',
            model_id: [],
            page: 1,
            page_size: perPage,
            from: 0, //
            limit: 100, //
            last_id: '',
        }
        const res = await WildMiddleService.getAll(data)
        console.log(res)
        if (res.status !== 200) {
            console.log('error')
        } else {
            setRowData(res.data)
        }
    }
    async function getColums() {
        const res = await WildMiddleService.allFields()
        console.log(res)
        if (res.status !== 200) {
            console.log('error')
            return false
        } else {
            if (res.data.fields[0].field === 'id') {
                res.data.fields[0].headerCheckboxSelection = function (params) {
                    return params.columnApi.getRowGroupColumns().length === 0
                }
            }
            setColumnDefs(res.data.fields)
            console.log('res.data', res.data.for_next_req)
            setFor_next_req(res.data.for_next_req)
            console.log('setFor_next_req', for_next_req)
            return res.data.for_next_req
        }
    }

    async function setDataRow() {
        if (gridApi) {
            gridApi.showLoadingOverlay()
            async function getDataRow() {
                const data = {
                    fields: await getColums(), //
                    search: '',
                    visibility: 0,
                    sort_by: gridFilter.sort_by ? gridFilter.sort_by : 'id', //
                    sort_dir: gridFilter.sort_dir ? gridFilter.sort_dir : 'asc', // DESC
                    commercial_category_id: [],
                    company_id: companyId,
                    language: 'RU',
                    model_id: [],
                    page: 0,
                    page_size: 50,
                    from: 0, //
                    limit: 120, //
                    last_id: '',
                }
                try {
                    const res = await WildMiddleService.getAll(data)
                    return await res.data
                } catch (e) {
                    console.log(e)
                    return {
                        length: 0,
                        data: [],
                    }
                }
            }
            let DS = await getDataRow()

            // await getColums()
            console.log('getColums', for_next_req)
            // добавить в в таблицу данные из DS через setRowData в начало таблицы
            await gridApi.setRowData(DS.data)   
        }
    }

    useEffect(() => {
        setDataRow()
    }, [gridApi, url, companyId])
    const onGridReady = (params) => {
        setGridApi(params.api)
    }
    const onSortChanged = (params) => {
        params.api.stopEditing()
        console.log(params)
        let sort = params.columnApi.getColumnState()
        let sortModel = []
        for (let i = 0; i < sort.length; i++) {
            if (sort[i].sort) {
                sortModel.push({
                    sort_by: sort[i].colId,
                    sort_dir: sort[i].sort,
                })
            }
        }
        console.log('sort', sort)
        console.log('sortModel', sortModel)
        if (sortModel.length > 0) {
            params.api.setFilterModel(null)
            setGridFilter(sortModel[0])
            setDataRow()
            // отменить все filter
            // params.columnApi.setColumnState({ state: [{ colId: 'athlete', sort: null }] })
        }

        // console.log('onSortChanged', params.api, )
    }
    // TODO АМаль
    const createANewRow = () => {
        let newId = '+1'
        let newRow = { id: newId }
        gridApi.getColumnDefs().map((colDef) => {
            let field = colDef.field
            console.log(field)
            if (field == 'amountVar' || field == 'amountUSD') {
                newRow[field] = 0.0
            } else {
                newRow[field] = 'new'
            }
            return colDef
        })
        return [newRow]
    }
    // Добавляем
    const onAdd = useCallback(() => {
        // gridRef.current.api.applyTransaction({add: [{}]})
        console.log('columnDefs', columnDefs)
        let list = Object.keys(columnDefs).reduce((acc, el) => {
            // console.log('el', columnDefs[el]?.default)
            acc[columnDefs[el].field] = columnDefs[el].default
            return acc
        }, {})
        list.newRow = true

        // добавить в начало таблицы строку с новым элементом и сделать ее редактируемой

        // gridApi.applyTransaction({add: [list]});
        // gridRef.current.api.applyTransaction({add: [list]})
        // gridRef.current.api.updateRowData({ add: list, addIndex: 1 });
        // gridApi.applyTransaction({ add: [list]});
        // gridRef.applyTransaction({ add: [list] })
        var transaction = {
            add: [list],
        }
        console.log('list', transaction)
        // gridApi.applyTransaction(transaction)
        // gridApi.setDatasource(transaction);
        // console.log(gridRef.current.api.applyTransaction(transaction));
        gridRef.current.api.applyTransaction(transaction)
        // gridRef.current.api.purgeServerSideCache()
        //   setRowData([list, ...rowData])
    })
    // Удаляем
    const onRemove = useCallback(async () => {
        // удаляем по id TODO для удаления выделенного
        //   const selectedRow = gridRef.current.api.getSelectedRows()
        //   console.log(selectedRow);
        const selectedNodes = gridRef.current.api.getSelectedNodes()
        const selectedId = selectedNodes.map((node) => node.data.id)
        // const data = rowData.filter((row) => selectedId.indexOf(row.id) < 0)
        // TODO сделать так что бы если при выборе нескольких значений всё равно удалялся бы один элемент
        const res = await WildMiddleService.delete(selectedId[0])
        setDataRow()
    })

    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            minWidth: 150,
            // filter: true,
            pagination: true,
            paginationPageSize: 10,
            // sortable: false,
            resizable: true,
            animateRows: true,

            wrapHeaderText: true,
            autoHeaderHeight: true,
            // wrapText: true,     // <-- HERE
            // autoHeight: true,   // <-- & HERE
            // enables editing
            // editable: true,
            // editable: (params) => {
            //   return isCellEditable(params);
            // },

            cellEditorSelector: cellEditorSelector,
        }
    }, [])

    const onCellValueChanged = useCallback(async (event) => {
        console.log('Data after change is', event.data)
        // TODO от Амаля нужны обязательные поля
        if (!event.data.newRow) {
            console.log('qwe')
            const colId = event.column.colId.toString()
            const data = {
                [colId]: event.newValue,
            }
            console.log(data)
            const res = await WildMiddleService.change(data, event.data.id)
            getRowData()
        } else {
            let b = Object.keys(event.data).reduce((acc, key) => {
                if (event.data[key] && key !== 'id') {
                    if (key === 'filter_words')
                        acc[key] = event.data[key].split(',')
                    else acc[key] = event.data[key]
                }
                return acc
            }, {})
            console.log(b)
            const res = await WildMiddleService.add(b)
            getRowData()
        }
        // else if (event.data.item_id !== '' && event.data.filter_words !== '' && event.data.stars !== '' && event.data.answer !== '') {
        //   console.log('add', event.data)
        //   const res = await WildMiddleService.add({
        //     item_id: event.data.item_id,
        //     filter_words: event.data.filter_words,
        //     stars: event.data.stars,
        //     answer: event.data.answer
        //   })
        //   getRowData()
    }, [])

    // const getRowId = useCallback((params)=>{
    //   // console.log(params)
    //   return params.data.id
    // })
    return (
        <>
            <div className="example-header" style={{ display: 'flex', marginBottom: '1rem', columnGap: '14px' }}>
                <button style={{ color: 'green' }} className={style._button} onClick={onAdd}>
                    Добавить
                </button>
                <button style={{ color: 'red' }} className={style._button} onClick={onRemove}>
                    Удалить
                </button>
            </div>
            <div className="ag-theme-alpine" style={{ height: 500 }}>
                <AgGridReact
                    ref={gridRef}
                    // rowData={rowData}
                    // getRowId={getRowId}
                    columnDefs={columnDefs}
                    //updateRowData() only works with ClientSideRowModel. Working with InfiniteRowModel was deprecated in v23.1 and removed in v24.1

                    // rowModelType={'infinite'} //  Working with InfiniteRowModel was deprecated in v23.1 and removed in v24.1
                    // rowModelType={'clientSide'} //  Working with InfiniteRowModel was deprecated in v23.1 and removed in v24.1

                    rowModelType={'clientSide'}
                    onGridReady={onGridReady}
                    onSortChanged={onSortChanged}
                    paginationPageSize={perPage}
                    cacheBlockSize={perPage}
                    defaultColDef={defaultColDef}
                    // rowSelection={'single'} // Выделяем всю строку при нажатии
                    rowSelection={'multiple'} // Выделяем несколько строк
                    onCellValueChanged={onCellValueChanged}
                    pagination={true}
                    // paginationAutoPageSize={true}
                    // enableRangeSelection={true}
                    // enableFillHandle={true}
                ></AgGridReact>
            </div>
        </>
    )
}

export default Table

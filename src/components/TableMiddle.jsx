import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
// import WildMiddleService from "../services/WildMiddleService";
import api from '../http';
const cellEditorSelector = (params) => {
  console.log(params.colDef?._params)
  if (params.colDef._params){
    return {
      component: 'agSelectCellEditor',
      params: {
        values: params.colDef._params,
      },
      popup: false,
    };
  }
};

// function TableMiddle() {
//   const gridRef = useRef();
//   const [rowData, setRowData] = useState([])
//   const [columnDefs, setColumnDefs] = useState()
//   const [for_next_req, setFor_next_req] = useState()
//   const [gridApi, setGridApi] = useState(null);
//   const perPage = 20;
//   async function getRowData(){
//     const data = {
//       "fields": for_next_req,//
//       "search": "",
//       "visibility": 0,
//       "sort_by": "createdAt",//
//       "sort_dir": "ASC",//
//       "commercial_category_id": [],
//       "company_id": 491058,
//       "language": "RU",
//       "model_id": [],
//       "page": 1,
//       "page_size": 50,
//       "from": 0,//
//       "limit": 100,//
//       "last_id": ""
//     }
//     const res = await WildMiddleService.getAll(data)
//     console.log(res)
//     if (res.status !== 200){
//       console.log('error')
//     } else{
//       setRowData(res.data)
//     }
//   }
//   async function getColums(){
//     const res = await WildMiddleService.allFields()
//     console.log(res)
//     if (res.status !== 200){
//       console.log('error')
//     } else{
//       if (res.data.fields[0].field === 'id'){
//         res.data.fields[0].headerCheckboxSelection= function (params) {
//           return params.columnApi.getRowGroupColumns().length === 0;
//         }
//       }
//       setColumnDefs(res.data.fields)
//       setFor_next_req(res.data.for_next_req)
//     }
//   }
//   // useEffect(()=>{
//   //
//   //   // getRowData()
//   // }, [])
//   useEffect(() => {

//     if (gridApi) {
//       const dataSource = {
//         getRows: async (params) => {
//           gridApi.showLoadingOverlay();
//           // const page = params.endRow / perPage;
//           console.log('params.endRow', params.endRow, perPage)
//           const sort = params.sortModel[0]
//           console.log('sort', sort, params.sortModel)
//           const data = {
//             "fields": for_next_req,//
//             "search": "",
//             "visibility": 0,
//             "sort_by": sort ? sort.colId : 'id',//
//             "sort_dir": sort ? sort.sort : 'asc',// DESC
//             "commercial_category_id": [],
//             "company_id": 491058,
//             "language": "RU",
//             "model_id": [],
//             "page": 0,
//             "page_size": 50,
//             "from": params.endRow-perPage,//
//             "limit": params.endRow,//
//             "last_id": ""
//           }
//           try{
//             const res = await WildMiddleService.getAll(data)
//             if (!res.data.data.length) {
//               gridApi.showNoRowsOverlay();
//             } else {
//               gridApi.hideOverlay();
//               console.log(res.data.count)
//               params.successCallback(res.data.data, res.data.count);
//             }
//           } catch (err) {
//               gridApi.showNoRowsOverlay();
//               params.successCallback([], 0);
//           }
//         }
//       }
//       getColums()
//       gridApi.setDatasource(dataSource);
//     }
//   }, [gridApi]);
//   const onGridReady = (params) => {
//     setGridApi(params.api);
//   };

//   // Добавляем
//   const onAdd = useCallback(()=>{
//     // gridRef.current.api.applyTransaction({add: [{}]})
//     console.log(columnDefs)
//     let list = Object.keys(columnDefs).reduce((acc, el) => {
//       console.log('el', columnDefs[el]?.default)
//       acc[columnDefs[el].field] = columnDefs[el].default
//       return acc
//     }, {})
//     list.newRow = true
//     console.log(list);
//     setRowData([list, ...rowData])
//   })
//   // Удаляем
//   const onRemove = useCallback(async ()=>{
//     // удаляем по id
//     const selectedNodes = gridRef.current.api.getSelectedNodes()
//     const selectedId = selectedNodes.map(node=>node.data.id)
//     const data = rowData.filter(row=>selectedId.indexOf(row.id)<0)
//     // TODO сделать так что бы если при выборе нескольких значений всё равно удалялся бы один элемент
//     setRowData(data)
//     console.log(selectedId[0])
//     const res = await WildMiddleService.delete(selectedId[0])
//   })

//   const defaultColDef = useMemo(() => {
//     return {
//       flex: 1,
//       minWidth: 150,
//       // filter: true,
//       pagination: true,
//       paginationPageSize: 10,
//       // sortable: false,
//       resizable: true,
//       animateRows: true,
//       // wrapText: true,     // <-- HERE
//       // autoHeight: true,   // <-- & HERE
//       // enables editing
//       // editable: true,
//       // editable: (params) => {
//       //   return isCellEditable(params);
//       // },

//       cellEditorSelector: cellEditorSelector
//     };
//   }, []);

//   const onCellValueChanged = useCallback(async (event) => {
//     console.log('Data after change is', event.data);
//     // TODO от Амаля нужны обязательные поля
//     if (!event.data.newRow){
//       console.log('qwe')
//       const colId = (event.column.colId).toString()
//       const data = {
//         [colId]: event.newValue
//       }
//       console.log(data)
//       const res = await WildMiddleService.change(data, event.data.id)
//       getRowData()
//     } else {
//       let b = Object.keys(event.data).reduce((acc, key) => {
//         if (event.data[key] && key !== 'id') {
//           if (key==='filter_words') acc[key] = event.data[key].split(',')
//           else acc[key] = event.data[key]

//         }
//         return acc
//       }, {})
//       console.log(b)
//       const res = await WildMiddleService.add(b)
//       getRowData()
//     }
//     // else if (event.data.item_id !== '' && event.data.filter_words !== '' && event.data.stars !== '' && event.data.answer !== '') {
//     //   console.log('add', event.data)
//     //   const res = await WildMiddleService.add({
//     //     item_id: event.data.item_id,
//     //     filter_words: event.data.filter_words,
//     //     stars: event.data.stars,
//     //     answer: event.data.answer
//     //   })
//     //   getRowData()



//   }, []);

//   // const getRowId = useCallback((params)=>{
//   //   // console.log(params)
//   //   return params.data.id
//   // })
//   return (
//     <>
//       <div className="example-header">
//         <button onClick={onRemove}>Удалить</button>
//         <button onClick={onAdd}>Добавить</button>
//       </div>
//       <div className="ag-theme-alpine" style={{height: 500}}>
//         <AgGridReact
//           ref={gridRef}
//           // rowData={rowData}
//           // getRowId={getRowId}
//           columnDefs={columnDefs}
//           rowModelType={'infinite'}
//           onGridReady={onGridReady}
//           paginationPageSize={perPage}
//           cacheBlockSize={perPage}
//           defaultColDef={defaultColDef}
//           // rowSelection={'single'} // Выделяем всю строку при нажатии
//           rowSelection={'multiple'} // Выделяем несколько строк
//           onCellValueChanged={onCellValueChanged}
//           pagination={true}
//           // paginationAutoPageSize={true}
//           // enableRangeSelection={true}
//           // enableFillHandle={true}
//         >
//         </AgGridReact>
//       </div>
//     </>
//   );
// }

function TableMiddle({url} ) {
  const gridRef = useRef();
  const [rowData, setRowData] = useState([])
  const [columnDefs, setColumnDefs] = useState()
  const [for_next_req, setFor_next_req] = useState()
  const [gridApi, setGridApi] = useState(null);
  const [mainUrl, setMainUrl] = useState('qwe')

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

  const perPage = 20;
  async function getRowData(){
    const data = {
      "fields": for_next_req,//
      "search": "",
      "visibility": 0,
      "sort_by": "createdAt",//
      "sort_dir": "ASC",//
      "commercial_category_id": [],
      "company_id": 491058,
      "language": "RU",
      "model_id": [],
      "page": 1,
      "page_size": 50,
      "from": 0,//
      "limit": 100,//
      "last_id": ""
    }
    const res = await WildMiddleService.getAll(data)
    console.log(res)
    if (res.status !== 200){
      console.log('error')
    } else{
      setRowData(res.data)
    }
  }
  async function getColums(){
    const res = await WildMiddleService.allFields()
    console.log(res)
    if (res.status !== 200){
      console.log('error')
    } else{
      if (res.data.fields[0].field === 'id'){
        res.data.fields[0].headerCheckboxSelection= function (params) {
          return params.columnApi.getRowGroupColumns().length === 0;
        }
      }
      setColumnDefs(res.data.fields)
      setFor_next_req(res.data.for_next_req)
    }
  }
  useEffect(() => {
    setMainUrl(url)  
    console.log('mainUrl', mainUrl)
  }, [])

  useEffect(() => {

    if (gridApi) {
      const dataSource = {
        getRows: async (params) => {
          gridApi.showLoadingOverlay();
          // const page = params.endRow / perPage;
          console.log('params.endRow', params.endRow, perPage)
          const sort = params.sortModel[0]
          console.log('sort', sort, params.sortModel)
          const data = {
            "fields": for_next_req,//
            "search": "",
            "visibility": 0,
            "sort_by": sort ? sort.colId : 'id',//
            "sort_dir": sort ? sort.sort : 'asc',// DESC
            "commercial_category_id": [],
            "company_id": 491058,
            "language": "RU",
            "model_id": [],
            "page": 0,
            "page_size": 50,
            "from": params.endRow-perPage,//
            "limit": params.endRow,//
            "last_id": ""
          }
          try{
            const res = await WildMiddleService.getAll(data)
            if (!res.data.data.length) {
              gridApi.showNoRowsOverlay();
            } else {
              gridApi.hideOverlay();
              console.log(res.data.count)
              params.successCallback(res.data.data, res.data.count);
            }
          } catch (err) {
              gridApi.showNoRowsOverlay();
              params.successCallback([], 0);
          }
        }
      }
      getColums()
      gridApi.setDatasource(dataSource);
    }
  }, [gridApi]);
  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  // Добавляем
  const onAdd = useCallback(()=>{
    // gridRef.current.api.applyTransaction({add: [{}]})
    console.log(columnDefs)
    let list = Object.keys(columnDefs).reduce((acc, el) => {
      console.log('el', columnDefs[el]?.default)
      acc[columnDefs[el].field] = columnDefs[el].default
      return acc
    }, {})
    list.newRow = true
    console.log(list);
    setRowData([list, ...rowData])
  })
  // Удаляем
  const onRemove = useCallback(async ()=>{
    // удаляем по id
    const selectedNodes = gridRef.current.api.getSelectedNodes()
    const selectedId = selectedNodes.map(node=>node.data.id)
    const data = rowData.filter(row=>selectedId.indexOf(row.id)<0)
    // TODO сделать так что бы если при выборе нескольких значений всё равно удалялся бы один элемент
    setRowData(data)
    console.log(selectedId[0])
    const res = await WildMiddleService.delete(selectedId[0])
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
      // wrapText: true,     // <-- HERE
      // autoHeight: true,   // <-- & HERE
      // enables editing
      // editable: true,
      // editable: (params) => {
      //   return isCellEditable(params);
      // },

      cellEditorSelector: cellEditorSelector
    };
  }, []);

  const onCellValueChanged = useCallback(async (event) => {
    console.log('Data after change is', event.data);
    // TODO от Амаля нужны обязательные поля
    if (!event.data.newRow){
      console.log('qwe')
      const colId = (event.column.colId).toString()
      const data = {
        [colId]: event.newValue
      }
      console.log(data)
      const res = await WildMiddleService.change(data, event.data.id)
      getRowData()
    } else {
      let b = Object.keys(event.data).reduce((acc, key) => {
        if (event.data[key] && key !== 'id') {
          if (key==='filter_words') acc[key] = event.data[key].split(',')
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



  }, []);

  // const getRowId = useCallback((params)=>{
  //   // console.log(params)
  //   return params.data.id
  // })
  return (
    <>
      <div className="example-header">
        <button onClick={onRemove}>Удалить</button>
        <button onClick={onAdd}>Добавить</button>
      </div>
      <div className="ag-theme-alpine" style={{height: 500}}>
        <AgGridReact
          ref={gridRef}
          // rowData={rowData}
          // getRowId={getRowId}
          columnDefs={columnDefs}
          rowModelType={'infinite'}
          onGridReady={onGridReady}
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
        >
        </AgGridReact>
      </div>
    </>
  );
}
export default TableMiddle
// import {useCallback, useMemo, useRef, useState} from "react";
// import WildMiddleService from "../services/WildMiddleService";
// // import WildMiddleService from "./WildMiddleService";
//
//
// // class CreateTable{
// //   constructor(props) {
// //     this.state = {
// //       gridRef: null,
// //       rowData: [],
// //       columnDefs: null,
// //       nextReq: null,
// //       gridApi: null,
// //       perPage: null
// //     };
// //   }
//
// const cellEditorSelector = (params) => {
//   console.log(params.colDef?._params)
//   if (params.colDef._params){
//     return {
//       component: 'agSelectCellEditor',
//       params: {
//         values: params.colDef._params,
//       },
//       popup: false,
//     };
//   }
// };
//
// class CreateTable{
//   // const gridRef = useRef();
//   // const [rowData, setRowData] = useState([])
//   // const [columnDefs, setColumnDefs] = useState()
//   // const [for_next_req, setFor_next_req] = useState()
//   // const [gridApi, setGridApi] = useState(null);
//   // const perPage = 20;
//
//
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
// }
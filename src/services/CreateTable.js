// import {useCallback, useMemo, useRef, useState} from "react";
// // import WildMiddleService from "./WildMiddleService";
//
//
// class CreateTable{
//   constructor(props) {
//     this.state = {
//       gridRef: null,
//       rowData: [],
//       columnDefs: null,
//       nextReq: null,
//       gridApi: null,
//       perPage: null
//     };
//   }
//     // const gridRef = useRef();
//     // const [rowData, setRowData] = useState([])
//     // const [columnDefs, setColumnDefs] = useState()
//     // const [for_next_req, setFor_next_req] = useState()
//     // const [gridApi, setGridApi] = useState(null);
//     // const perPage = 20;
//
//   cellEditorSelector = (params) => {
//     console.log(params.colDef?._params)
//     if (params.colDef._params){
//       return {
//         component: 'agSelectCellEditor',
//         params: {
//           values: params.colDef._params,
//         },
//         popup: false,
//       };
//     }
//   };
//
// }
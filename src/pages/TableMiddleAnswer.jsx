import Menu from '../components/Menu'
// import TableMiddle from '../components/TableMiddle'
import Table from '../utils/GenerateTable'
import { useEffect, useState } from 'react'
import MessageMiddleService from '../services/MessageMiddleService'
import style from '../styles/login.module.css'

function TableMiddleAnswer() {
    const [CompanyId, setCompanyId] = useState();
    const [supplier, setSupplier] = useState();
    // console.log(table_url);
    useEffect(() => {
        async function getData() {
            const res = await MessageMiddleService.getAccountslData()
            setSupplier(res.data.data)
            setCompanyId(res.data.data[0].id || 0)
        }
        getData()
    }, []);
    return (
        <>
            <div className={`container`} style={{ display: 'flex' }}>
                <Menu />
                <div style={{ width: '100%' }}>
                    {/* <TableMiddle url={'template_text'} /> */}

                    <div
                        style={{
                            width: '100%',
                            position: 'inherit',
                            overflow: 'auto',
                            overflowY: 'unset',
                            marginTop: '1rem',
                            padding: '0 3rem',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'nowrap',
                                width: 'maxContent',
                                marginBottom: '1.5rem',
                            }}
                        >
                            {/* фор supplier */}
                            {supplier &&
                                supplier.map((el) => (
                                    <button className={style._button}
                                        onClick={() => setCompanyId(el.id)}
                                        style={{
                                            background: 'none',
                                            margin: '0 1rem',
                                            color: 'inherit',
                                            paddingBottom: '0px',
                                            borderRadius: '2px',
                                            borderBottom: el.id === CompanyId ? '0.2rem solid green' : 'none',
                                            minWidth: 'fit-content'
                                        }}
                                    >
                                        {el.supplier_name} ({el.id})
                                    </button>
                                ))}
                        </div>
                    </div>
                    <Table url={'template_message'} company_id={CompanyId} />
                </div>
            </div>
        </>
    )
}
export default TableMiddleAnswer

import Menu from "../components/Menu";
import NewTable from "../components/NewTable";
import Table from "../utils/GenerateTable";

function Tables(){
  return (
    <>
      <div className="container" style={{display: 'flex'}}>
      <Menu/>
      <div style={{width: '100%'}}>
          {/* <NewTable/> */}
          <Table url={'template_text'} />
      </div>
      </div>
    </>
  )
}

export default Tables
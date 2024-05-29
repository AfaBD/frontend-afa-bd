import Navigation from "../navigation"
import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import api from "../../../service/api"

function QueryView(){

    const [result,setResult] = useState([])
    const {id} = useParams()

    async function fecthResult(){
        const res = await api.get(`/query/${id}`)
        setResult(res.data)
    }

    useEffect(()=>{
        fecthResult()
    },[id])

    return(
        <>
            <Navigation id={id}/>
            <div class="pcoded-main-container">
                <div class="pcoded-wrapper">
                    <div className="col-md-12" style={{marginBottom: '70px',textAlign: 'center',marginTop: '20px'}}>
                        <div className="page-header-title">
                            <h3 className="m-b-10">Query {id}</h3>
                        </div>
                        {
                            result.length>0?
                            <div className="pcoded-content">
                                <div className="pcoded-inner-content">
                                    <div className="main-body">
                                        <div className="page-wrapper">
                                            <div className="d-flex justify-content-center">
                                                <div className="col-xl-12">
                                                    <div className="card">
                                                        <div className="card-block table-border-style">
                                                            <div className="table-responsive">
                                                                <table className="table">
                                                                    <thead>
                                                                        <tr>
                                                                            {
                                                                                Object.keys(result[0]).map((key,index)=>{
                                                                                    return <th key={index}>{key}</th>;
                                                                                })
                                                                            }
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {
                                                                            result.map((row, rowIndex) => (
                                                                                <tr key={rowIndex}>
                                                                                    {Object.values(row).map((value, colIndex) => (
                                                                                        <td key={colIndex}>
                                                                                            {Array.isArray(value) ? 'list' : value}
                                                                                        </td>
                                                                                    ))}
                                                                                </tr>
                                                                            ))
                                                                        }
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <h5>No result</h5>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default QueryView
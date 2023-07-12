import React,{useState} from 'react'
import styles from './globalCss.min.css'
import BetModal from './BetModal'

const Bet2 = ({section2Data,market}) => {
    // console.log(section2Data[0])
    const [isRowsVisible, setIsRowsVisible] = useState(false);
    const [isRowsVisible2, setIsRowsVisible2] = useState(false);
    const [isRowsVisible3, setIsRowsVisible3] = useState(false);
    const [color, setColor] = useState("");

    function convertToShortFormat(number) {
        if(number===undefined || number===0 || typeof number !== "number"){
            return 0
        }
        const suffixes = ['', 'k', 'M', 'B', 'T']; // Customize suffixes as needed
        const suffixIndex = Math.floor(Math.log10(Math.abs(number)) / 3);
        const shortNumber = (number / Math.pow(10, suffixIndex * 3)).toFixed(1);
        // if(typeof number !== 'number'){
        //     return ''
        // }
        return shortNumber + suffixes[suffixIndex];
      }
    const toggleRowsVisibility = (color) => {
        setColor(color);
        if(isRowsVisible===false){
            setIsRowsVisible2(false);
            setIsRowsVisible3(false);
        }
        setIsRowsVisible(!isRowsVisible);
      };
    const toggleRowsVisibility2 = (color) => {
        setColor(color);
        if(isRowsVisible2===false){
            setIsRowsVisible3(false);
            
            setIsRowsVisible(false);
        }
        setIsRowsVisible2(!isRowsVisible2);
      };
    const toggleRowsVisibility3 = (color) => {
        setColor(color);
        if(isRowsVisible3===false){
            setIsRowsVisible2(false);
            setIsRowsVisible(false);
        }
        setIsRowsVisible3(!isRowsVisible3);
      };
    return (

        <div >
            
            <div style={{ display: "flex" }}>
  <div
    style={{
      background: "black",
      padding: "10px",
      borderTopRightRadius: "30px",
      textAlign: "center",
      color: "white",
      fontSize: "14px" // Adjust the font size as desired
    }}
  >
    Series Winner 2023 (Bookmarker) <i className="fa fa-info-circle"></i>
  </div>
  <div
    style={{
      textAlign: "right",
      padding: "10px",
      fontSize: "small",
      fontWeight: "500"
    }}
  >
    Matched <a style={{ fontWeight: "bold" }}>€ 509.7K </a>
  </div>
</div>
        
        
            <table className="table table-responsive" style={{minHeight: "5px"}}>
                <thead>
                    <tr className={styles.globalTh} style={{ border: "1px solid #000" ,background:"#fff1c1"}}>
                        <th className={styles.globalTh} style={{ height: "50%", width: "50%",background:"#fff1c1" }}>
                            
                        </th>
                        <th className={styles.globalTh} style={{ width: "20%", textAlign: "center", 
                        color: "rgb(0, 0, 0)",background:"#fff1c1"  }} >
                        
                            <a style={{ fontWeight: "bold" }}>Back</a>
                        </th>
                        <th className={styles.globalTh} style={{ width: "20%", textAlign: "center",background:"#fff1c1", color: "rgb(0, 0, 0)",  }}>
                            <a style={{ fontWeight: "bold" }}>Lay</a>
                        </th>
                    </tr>
                </thead>
            </table>
        
            <div className="position-relative">
            {(!section2Data ||!section2Data[0]?.runners[0]?.RunnerName || section2Data[0]?.status==='SUSPENDED' ||section2Data[0]?.status==='CLOSED') &&
    <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center bg-dark opacity-75">
       <span className=" font-weight-bold" style={{ color: 'red' }}><b>Suspended</b></span>
    </div>}
           
            <table className="table table-responsive">
                <thead>
                    <tr className={styles.globalTh} style={{ border: "1px solid #000" }}>
                        <th className={styles.globalTh} style={{ width: "50%",background:"#fff1c1" }}>
                            <div style={{ width: '60%', fontWeight: 'bold' }}><a>{section2Data[0]?.runners[0].RunnerName ||'Not Available'}</a><br /><a style={{ color: 'red' }}>→ 1.22</a></div>
                        </th>
                        <th className={styles.globalTh} style={{ width: "20%", textAlign: "center", color: "rgb(0, 0, 0)", backgroundColor: "#72bbef" }}
                        onClick={()=>toggleRowsVisibility("#72bbef")}>
                            <div><a style={{ fontWeight: 'bold' }}>{section2Data[0]?.runners[0]?.ex?.availableToBack[0]?.price}</a><br /><a style={{ fontWeight: 'normal' }}>{convertToShortFormat(section2Data[0]?.runners[0]?.ex?.availableToBack[0]?.size)}</a></div>
                        </th>
                        <th className={styles.globalTh} style={{ width: "20%", textAlign: "center", color: "rgb(0, 0, 0)", backgroundColor: "#faa9ba" }}
                        onClick={()=>{toggleRowsVisibility("#de92a4")}}>
                            <div><a style={{ fontWeight: 'bold' }}>{section2Data[0]?.runners[0]?.ex?.availableToLay[0]?.price}</a><br /><a style={{ fontWeight: 'normal' }}>{convertToShortFormat(section2Data[0]?.runners[0]?.ex?.availableToLay[0]?.size)}</a></div>
                        </th>
                    </tr>
                </thead>
            </table>
            </div>
            {isRowsVisible && <BetModal color={color} visibility={toggleRowsVisibility}/>}
            <div className="position-relative">
            {(!section2Data ||!section2Data[0]?.runners[1]?.RunnerName || section2Data[0]?.status==='SUSPENDED'|| section2Data[0]?.status==='CLOSED') &&
    <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center bg-dark opacity-75">
       <span className=" font-weight-bold" style={{ color: 'red' }}><b>Suspended</b></span>
    </div>}
            <table className="table table-responsive">
                <thead>
                    <tr className={styles.globalTh} style={{ border: "1px solid #000" }}>
                        <th className={styles.globalTh} style={{ width: "50%" ,background:"#fff1c1"}}>
                            <div style={{ width: '60%', fontWeight: 'bold' }}><a>{section2Data[0]?.runners[1].RunnerName || "Not Available"}</a><br /><a style={{ color: 'red' }}>→ 1.22</a></div>
                        </th>
                        <th className={styles.globalTh} style={{ width: "20%", textAlign: "center", color: "rgb(0, 0, 0)", backgroundColor: "#72bbef" }}
                        onClick={()=>toggleRowsVisibility2("#72bbef")}>
                        <div><a style={{ fontWeight: 'bold' }}>{section2Data[0]?.runners[0]?.ex?.availableToBack[0]?.price}</a><br /><a style={{ fontWeight: 'normal' }}>{convertToShortFormat(section2Data[0]?.runners[0]?.ex?.availableToBack[0]?.size)}</a></div>
                        </th>
                        <th className={styles.globalTh} style={{ width: "20%", textAlign: "center", color: "rgb(0, 0, 0)", backgroundColor: "#faa9ba" }}
                        onClick={()=>{toggleRowsVisibility2("#de92a4")}}>
                            <div><a style={{ fontWeight: 'bold' }}>{section2Data[0]?.runners[1]?.ex?.availableToLay[0]?.price}</a><br /><a style={{ fontWeight: 'normal' }}>{convertToShortFormat(section2Data[0]?.runners[1]?.ex?.availableToLay[0]?.size)}</a></div>
                        </th>
                    </tr>
                </thead>
            </table>
            </div>
            {isRowsVisible2 && <BetModal color={color} visibility={toggleRowsVisibility2}/>}

            <div className="position-relative">
                {(!section2Data ||!section2Data[0]?.runners[2]?.RunnerName || section2Data[0]?.status==='SUSPENDED' || section2Data[0]?.status==='CLOSED') &&
    <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center bg-dark opacity-75">
       <span className=" font-weight-bold" style={{ color: 'red' }}><b>Suspended</b></span>
    </div>}
            <table className="table table-responsive">
                <thead>
                    <tr className={styles.globalTh} style={{ border: "1px solid #000" }}>
                        <th className={styles.globalTh} style={{ width: "50%",background:"#fff1c1" }}>
                            <div style={{ width: '60%', fontWeight: 'bold' }}><a>{section2Data[0]?.runners[2]?.RunnerName || 'Not Available'}</a><br /><a style={{ color: 'red' }}>→ 1.22</a></div>
                        </th>
                        <th className={styles.globalTh} style={{ width: "20%", textAlign: "center", color: "rgb(0, 0, 0)", backgroundColor: "#72bbef" }}
                        onClick={()=>toggleRowsVisibility3("#72bbef")}>
                            <div><a style={{ fontWeight: 'bold' }}>{section2Data[0]?.runners[2]?.ex?.availableToBack[0]?.price}</a><br /><a style={{ fontWeight: 'normal' }}>{convertToShortFormat(section2Data[0]?.runners[2]?.ex?.availableToBack[0]?.size)}</a></div>
                        </th>
                        <th className={styles.globalTh} style={{ width: "20%", textAlign: "center", color: "rgb(0, 0, 0)", backgroundColor: "#faa9ba" }}
                        onClick={()=>{toggleRowsVisibility3("#de92a4")}}>
                            <div><a style={{ fontWeight: 'bold' }}>{section2Data[0]?.runners[2]?.ex?.availableToLay[0]?.price}</a><br /><a style={{ fontWeight: 'normal' }}>{convertToShortFormat(section2Data[0]?.runners[2]?.ex?.availableToLay[0]?.size)}</a></div>
                        </th>
                    </tr>
                </thead>
            </table>
            </div>
            {isRowsVisible3 && <BetModal color={color} visibility={toggleRowsVisibility3}/>}

          
        </div>


    )
}

export default Bet2
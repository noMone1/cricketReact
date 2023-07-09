import React,{useState} from 'react'
import styles from './globalCss.min.css'
import BetModal from './BetModal'
import { Spinner } from 'react-bootstrap';


const Bet1 = ({section1Data,market}) => {   
    // console.log("========",section1Data[0]?.runners[2])
    const [isRowsVisible, setIsRowsVisible] = useState(false);
    const [isRowsVisible2, setIsRowsVisible2] = useState(false);
    const [isRowsVisible3, setIsRowsVisible3] = useState(false);
    const [color, setColor] = useState("");

    function convertToShortFormat(number) {
        const suffixes = ['', 'k', 'M', 'B', 'T']; // Customize suffixes as needed
        const suffixIndex = Math.floor(Math.log10(Math.abs(number)) / 3);
        const shortNumber = (number / Math.pow(10, suffixIndex * 3)).toFixed(1);
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
            <div style={{ padding: "5px", backgroundColor: "#bed5d8" ,height:"60%", width: "100%", overflowX: "auto", whiteSpace: "nowrap" }}>
                <div style={{ height: "50%", display: "flex" }}>
                    <div
                        style={{ background: "#fc9900", padding: "10px", borderRadius: "50%", textAlign: "center", color: "rgb(0, 0, 0)", fontWeight: "600" }}>
                        All </div>
                    <div style={{ background: "black", padding: "10px", borderRadius: "50px", textAlign: "center", color: "white" }}>Series
                        Winner 2023 </div>
                    <div style={{ background: "black", padding: "10px", borderRadius: "50px", textAlign: "center", color: "white" }}>Series
                        Winner 2023 (Bookmarker)</div>
                    <div style={{ background: "black", padding: "10px", borderRadius: "50px", textAlign: "center", color: "white" }}>
                        England common only 1 Win in 5 matches</div>
                    <div style={{ background: "black", padding: "10px", borderRadius: "50px", textAlign: "center", color: "white" }}>Draw
                        common only 1 Win in 5 matches</div>
                </div>

            </div>
            <div style={{ display: "flex" }}>
                <div
                    style={{ background: "black", padding: "10px", borderTopRightRadius: "30px",width:"60%",fontSize: "14px" ,textAlign: "center", color: "white" }}>
                    Series Winner 2023 <i className="fa fa-info-circle"></i></div>
                <div style={{ textAlign: "right", padding: "10px", fontSize: "small", fontWeight: "500" }}>Matched <a
                    style={{ fontWeight: "bold" }}>€ 509.7K </a></div>
            </div>

            <table className="table table-responsive">
                <thead>
                    <tr className={styles.globalTh} style={{ border: "1px solid #000" }}>
                        <th className={styles.globalTh} style={{ height: "50%", width: "50%" }}>
                            <div style={{ padding: "5px", backgroundColor: "#bed5d8", fontSize:"13px" }}>Min/Max 100-1000</div>
                        </th>
                        <th className={styles.globalTh} style={{ width: "20%", textAlign: "center", 
                        color: "rgb(0, 0, 0)", backgroundColor: "#72bbef" }} >
                        
                            <a style={{ fontWeight: "bold" }}>Back</a>
                        </th>
                        <th className={styles.globalTh} style={{ width: "20%", textAlign: "center", color: "rgb(0, 0, 0)", backgroundColor: "#faa9ba" }}>
                            <a style={{ fontWeight: "bold" }}>Lay</a>
                        </th>
                    </tr>
                </thead>
            </table>
           
            <table className="table table-responsive">
                <thead>
                    <tr className={styles.globalTh} style={{ border: "1px solid #000" }}>
                        <th className={styles.globalTh} style={{ width: "50%" }}>
                            <div style={{ width: '60%', fontWeight: 'bold' }}><a>{market.Runners[0]?.RunnerName}</a><br /><a style={{ color: 'red' }}>→ 0.00</a></div>
                        </th>
                        <th className={styles.globalTh} style={{ width: "20%", textAlign: "center", color: "rgb(0, 0, 0)", backgroundColor: "#72bbef" }}
                        onClick={()=>toggleRowsVisibility("#72bbef")}>
                            <div><a style={{ fontWeight: 'bold' }}>{section1Data[0]?.runners[0]?.ex?.availableToBack[0]?.price}</a><br />
                           <a style={{ fontWeight: 'normal' }}> {convertToShortFormat(section1Data[0]?.runners[0]?.ex?.availableToBack[0]?.size)}</a></div>
                        </th>
                        <th className={styles.globalTh} style={{ width: "20%", textAlign: "center", color: "rgb(0, 0, 0)", backgroundColor: "#faa9ba" }}
                        onClick={()=>{toggleRowsVisibility("#de92a4")}}>
                            <div><a style={{ fontWeight: 'bold' }}>{section1Data[0]?.runners[0]?.ex?.availableToLay[0]?.price}</a><br />
                            <a style={{ fontWeight: 'normal' }}> {convertToShortFormat(section1Data[0]?.runners[0]?.ex?.availableToLay[0]?.size)}</a></div>
                        </th>
                    </tr>
                </thead>
            </table>
            {isRowsVisible && <BetModal color={color} visibility={toggleRowsVisibility}/>}
            <table className="table table-responsive">
                <thead>
                    <tr className={styles.globalTh} style={{ border: "1px solid #000" }}>
                        <th className={styles.globalTh} style={{ width: "50%" }}>
                            <div style={{ width: '60%', fontWeight: 'bold' }}><a>{market.Runners[1]?.RunnerName}</a><br /><a style={{ color: 'red' }}>→ 0.00</a></div>
                        </th>
                        <th className={styles.globalTh} style={{ width: "20%", textAlign: "center", color: "rgb(0, 0, 0)", backgroundColor: "#72bbef" }}
                        onClick={()=>toggleRowsVisibility2("#72bbef")}>
                            <div><a style={{ fontWeight: 'bold' }}>{section1Data[0]?.runners[1]?.ex?.availableToBack[0]?.price}</a><br />
                            <a style={{ fontWeight: 'normal' }}> {convertToShortFormat(section1Data[0]?.runners[1]?.ex?.availableToBack[0]?.size)}</a></div>
                        </th>
                        <th className={styles.globalTh} style={{ width: "20%", textAlign: "center", color: "rgb(0, 0, 0)", backgroundColor: "#faa9ba" }}
                        onClick={()=>{toggleRowsVisibility2("#de92a4")}}>
                            <div><a style={{ fontWeight: 'bold' }}>{section1Data[0]?.runners[1]?.ex?.availableToLay[0]?.price}</a><br />
                            <a style={{ fontWeight: 'normal' }}> {convertToShortFormat(section1Data[0]?.runners[1]?.ex?.availableToLay[0]?.size)}</a></div>
                        </th>
                    </tr>
                </thead>
            </table>
            {isRowsVisible2 && <BetModal color={color} visibility={toggleRowsVisibility2}/>}
            <table className="table table-responsive">
                <thead>
                    <tr className={styles.globalTh} style={{ border: "1px solid #000" }}>
                        <th className={styles.globalTh} style={{ width: "50%" }}>
                            <div style={{ width: '60%', fontWeight: 'bold' }}><a>{market.Runners[2]?.RunnerName}</a><br /><a style={{ color: 'red' }}>→ 0.00</a></div>
                        </th>
                        <th className={styles.globalTh} style={{ width: "20%", textAlign: "center", color: "rgb(0, 0, 0)", backgroundColor: "#72bbef" }}
                        onClick={()=>toggleRowsVisibility3("#72bbef")}>
                            <div><a style={{ fontWeight: 'bold' }}>{section1Data[0]?.runners[2]?.ex?.availableToBack[0]?.price}</a><br />
                            <a style={{ fontWeight: 'normal' }}> {convertToShortFormat(section1Data[0]?.runners[2]?.ex?.availableToBack[0]?.size)}</a></div>
                        </th>
                        <th className={styles.globalTh} style={{ width: "20%", textAlign: "center", color: "rgb(0, 0, 0)", backgroundColor: "#faa9ba" }}
                        onClick={()=>{toggleRowsVisibility3("#de92a4")}}>
                            <div><a style={{ fontWeight: 'bold' }}>{section1Data[0]?.runners[2]?.ex?.availableToLay[0]?.price}</a><br />
                            <a style={{ fontWeight: 'normal' }}> {convertToShortFormat(section1Data[0]?.runners[1]?.ex?.availableToLay[0]?.size)}</a></div>
                        </th>
                    </tr>
                </thead>
            </table>
            {isRowsVisible3 && <BetModal color={color} visibility={toggleRowsVisibility3}/>}

          
        </div>


    )
}

export default Bet1
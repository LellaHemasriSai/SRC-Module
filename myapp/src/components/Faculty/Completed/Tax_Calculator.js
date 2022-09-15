import React,{useState,useEffect} from "react";
import "./tax.css";
import { MainNav } from '../../App';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function Tax_Calculator(props)
{ 
    const [click,setClick] = useState(false);
    const [cardinfo, setCardInfo] = useState([])

  console.log("Submitted")
  // Retrieves necessary data from server
  useEffect(() => {
    axios.post('http://localhost:3001/pending')
      .then(res => {
        console.log('Data: ', res.data.data)
        setCardInfo(res.data.data)

      })
      .catch(err => {
        console.log(err);
      })
  }, [])
   console.log(cardinfo);
    var taxval = cardinfo.sanctionFund;
    taxval=taxval*(12/100);
    var finalval = cardinfo.sanctionFund + taxval;
   
return (
<>
<div div className="wrapper hover_collapse" >
      <MainNav></MainNav>
      <div className="main_container">
<div class="container">
<Card style={{width: "40rem",height: "40rem",marginLeft: "35%"}}>
  <form id="taxCalc" action="#">
    <h1 class="h1">Tax Calculator</h1>
    <div class="tax-input-container">
      <div class="tax-input tax-input--income">
        <label class="lab">Amount</label>
        <input id="income" type="number" placeholder="Sanction Fund" value={cardinfo.sanctionFund}/>
      </div>
      <div class="tax-input tax-input--ser">
        <label class="lab">Tax </label>
        <input type="text" readonly="true" id="service-tax" step="0.01" placeholder="12%"/>
      </div>
      <div class="tax-input tax-input--ser">
        <label class="lab">Tax Amount</label>
        <input type="number" id="service-tax-amount"  placeholder="Tax Amount" value={click? taxval: "0"}/>
      </div>
      <div class="tax-input tax-input--ser">
        <label class="lab">Gross Amount</label>
        <input type="number" id="service-tax-amount"  placeholder="Gross value" value={click? finalval: "0"}/>
      </div>
    </div>

    <div class="tax-input-container">
      <Button type="submit" className="forbutt" variant="primary" onClick={() => setClick(true)}>Calculate</Button>
    </div>
  </form>
  </Card>
</div>
</div>
</div>
</>
)

}
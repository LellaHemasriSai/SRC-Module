import React,{useState} from "react";
import "./tax.css";
import { MainNav } from '../../App';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Tax_Calculator(props)
{ 
    var cost = 10000;
    var taxval = cost;
    taxval=taxval*(12/100);
    var finalval = cost + taxval;
    const [click,setClick] = useState(false);
   
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
        <input id="income" type="number" placeholder="125000" value={cost}/>
      </div>
      <div class="tax-input tax-input--ser">
        <label class="lab">Tax </label>
        <input type="text" readonly="true" id="service-tax" step="0.01" placeholder="12%"/>
      </div>
      <div class="tax-input tax-input--ser">
        <label class="lab">Tax Amount</label>
        <input type="number" id="service-tax-amount"  placeholder="100" value={click? taxval: "0"}/>
      </div>
      <div class="tax-input tax-input--ser">
        <label class="lab">Gross Amount</label>
        <input type="number" id="service-tax-amount"  placeholder="1000" value={click? finalval: "0"}/>
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
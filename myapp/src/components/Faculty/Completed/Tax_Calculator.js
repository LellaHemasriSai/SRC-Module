import React from "react";
import "./tax.css";

export default function Tax_Calculator(props){ 

    var taxval = props.cost;
    taxval=taxval*(12/100);
    var finalval = props.cost + taxval;

<div id="calculatorWrap">
    <form action="service-tax-calculator-india.php" method="post" class="calculatorForm" id="CalculatorForm" name="CalculatorForm" onsubmit="calculateButtonWorking()">
        <div itemprop="name" class="calculatorTitle">India Service Tax</div>
        <div class="calculatorInputs">
            <div class="table commonTable">
                <div class="row">
                    <div class="cell">
                        <label for="amount">Amount Rs.:</label>
                    </div>
                    <div class="cell">
                        <input name="amount" id="amount" value={props.cost} class="nmbr_real real" type="text" title="positive real number" placeholder="amount" required autofocus />
                    </div>
                </div>
                <div class="row">
                    <div class="cell">
                        <input type="checkbox" name="inclusive" id="inclusive" />
                    </div>
                    <div class="cell">
                        <label for="inclusive"><span class="note">Amount includes taxes</span></label>
                    </div>
                </div>
            </div>
            <fieldset>
                <legend>Tax Rates</legend>
                <div class="table commonTable">
                    <div class="row">
                        <div class="cell">
                            <label for="service">Service Tax:</label>
                        </div>
                        <div class="cell">
                            <input name="service" id="service" value="12" class="nmbr_real real" type="text" title="0 or positive real number" placeholder="Service Tax" /> %
                        </div>
                    </div>
            
                </div>
            </fieldset>
        </div>
                                    <div class="calculatorButton floatRight" id="actionCalculate">
            <input type="submit" value="Calculate" class="btn" name="calculateButton" id="calculateButton"/>
        </div>
        <div class="calculatorButton floatLeft" id="actionClear">
            <input type="reset" name="reset" value="Clear" class="btn" onclick="return resetCalculator(this.form);"/>
        </div>
        <div class="clearBoth"></div>
        <div id="calculatorAnswer">Answer:
            <br/>
            <div id="answer">
<div class="table prettytable centered">
<div class="row">
<div class="cell alignRight">Gross Value: </div>
<div class="cell alignRight">Rs. {props.cost}</div>
</div>
<div class="row">
<div class="cell alignLeft"><strong>Taxes</strong></div>
<div class="cell alignRight">&nbsp;</div>
</div>
<div class="row">
<div class="cell alignRight">Service Tax (12%): </div>
<div class="cell alignRight">{taxval}</div>
</div>
<div class="row">
<div class="cell alignRight"><strong>Gross Charge:</strong> </div>
<div class="cell alignRight"><strong>{finalval}</strong></div>
</div>

</div>
</div>
        </div>
        <input type="hidden" name="action" value="solve" />
        <input type="hidden" name="page_id" value="MTY2MzA4NDgwMg==" />
    </form>
    </div>

}
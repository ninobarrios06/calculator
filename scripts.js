function calculateMain() {
  const price = parseFloat(document.getElementById('price').value);
  const discount = parseFloat(document.getElementById('discount').value);

  if (isNaN(price) || isNaN(discount)) {
    alert("Please enter valid numbers");
    return;
  }

  const finalPrice = price - (price * (discount / 100));
  document.getElementById('finalPrice').value = finalPrice.toFixed(1);
}
function calculateMain2() {
  const price = parseFloat(document.getElementById('price2').value);
  const discount1 = parseFloat(document.getElementById('discount1').value);
  const discount2 = parseFloat(document.getElementById('discount2').value);

  if (isNaN(price) || isNaN(discount1) || isNaN(discount2)) {
    alert("Please enter valid numbers.");
    return;
  }

  const afterFirstDiscount = price - (price * (discount1 / 100));

  const finalPrice = afterFirstDiscount - (afterFirstDiscount * (discount2 / 100));

  const totalDiscount = ((1 - (finalPrice / price)) * 100).toFixed(1);

  document.getElementById('result').innerHTML = `
        Final Price: <strong>$${finalPrice.toFixed(1)}</strong><br>
        Total Discount: <strong>${totalDiscount}%</strong>
      `;
}
function calculateInitial() {
  const price = parseFloat(document.getElementById('price3').value);
  const initialPercent = parseFloat(document.getElementById('initialPercent').value);

  if (isNaN(price) || isNaN(initialPercent)) {
    alert("Por favor ingresa valores válidos.");
    return;
  }

  const initialPayment = price * (initialPercent / 100);
  const remaining = price - initialPayment;

  document.getElementById('result3').innerHTML = `
        <div>💵 Inicial a pagar: <strong>S/ ${initialPayment.toLocaleString(undefined, { minimumFractionDigits: 2 })}</strong></div>
        <div>📉 Saldo restante: <strong>S/ ${remaining.toLocaleString(undefined, { minimumFractionDigits: 2 })}</strong></div>
      `;
}
function calculateSimple() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2) || num2 === 0) {
    document.getElementById("resultado").value = "Error";
    document.getElementById("tablaNum1").textContent = "-";
    document.getElementById("tablaNum2").textContent = "-";
    document.getElementById("tablaResultado").innerHTML = "<math><mi>x</mi></math>";
    document.getElementById("formula").innerHTML = "";
    return;
  }

  const resultado = (num1 * num2) / 100;

  document.getElementById("resultado").value = resultado.toFixed(1);

  document.getElementById("tablaNum1").textContent = num1;
  document.getElementById("tablaNum2").textContent = num2;
  document.getElementById("tablaResultado").innerHTML = `<math><mi>x</mi></math>`;

  document.getElementById("formula").innerHTML = `
        <math display="block">
          <mi>x</mi>
          <mo>=</mo>
          <mfrac>
            <mrow>
              <mn>${num1}</mn>
              <mo>&#x22C5;</mo>
              <mn>${num2}</mn>
            </mrow>
            <mn>100</mn>
          </mfrac>
        </math>
        <math display="block" class="mt-3">
          <mi>x</mi>
          <mo>=</mo>
          <mn>${resultado.toFixed(1)}</mn>
        </math>
    `;
  const graphicSimplePercentage = document.querySelector(".graphicSimplePercentage");
  const graphicSimplePercentageTotal = document.querySelector(".graphicSimplePercentageTotal");
  const graphicSimplePercentage2 = document.querySelector(".graphicSimplePercentage2");
  const graphicSimplePercentageTotal2 = document.querySelector(".graphicSimplePercentageTotal2");
  const totalGraphic = document.querySelector(".totalGraphic");

  graphicSimplePercentage.style.width = "0%";
  graphicSimplePercentageTotal.style.width = "0%";
  setTimeout(() => {
    graphicSimplePercentage.style.width = `${num1}%`;
    graphicSimplePercentage2.style.width = `${num1}%`;
    graphicSimplePercentageTotal.style.width = `${100 - num1}%`;
    graphicSimplePercentageTotal2.style.width = `${100 - num1}%`;

    graphicSimplePercentage.textContent = `${num1}%`;
    graphicSimplePercentageTotal.textContent = `${100 - num1}%`;
    graphicSimplePercentage2.textContent = `${resultado}`;
    graphicSimplePercentageTotal2.textContent = `${(num2 - resultado).toFixed(1)}`;
    totalGraphic.textContent = `Total : ${num2}`;

  }, 100);
}




function calculateTotal() {
  const num1Total = parseFloat(document.getElementById("num1Total").value);
  const num2Total = parseFloat(document.getElementById("num2Total").value);
  const resulTotal = (num2Total * 100) / num1Total;

  const graphicSimplePercentageTotalTotal = document.querySelector('.graphicSimplePercentageTotalTotal');
  const graphicSimplePercentagetotal = document.querySelector('.graphicSimplePercentagetotal');
  const graphicSimplePercentageTotal2total = document.querySelector('.graphicSimplePercentageTotal2total');
  const totalGraphicTotal = document.querySelector('.totalGraphicTotal');
  const graphicSimplePercentageTotal2total1 = document.querySelector('.graphicSimplePercentageTotal2total1');

  document.getElementById("resulTotal").value = resulTotal.toFixed(1);
  document.getElementById("tablaNum1Total").textContent = num1Total;
  document.getElementById("tablaNum2Total").textContent = num2Total;
  document.getElementById("formulaTotal").innerHTML = `
      <math display="block">
        <mi>x</mi>
        <mo>=</mo>
        <mfrac>
          <mrow>
            <mn>${num2Total}</mn>
            <mo>&#x22C5;</mo>
            <mn>100</mn>
          </mrow>
          <mn>${num1Total}</mn>
        </mfrac>
      </math>
      <math display="block" class="mt-3">
        <mi>x</mi>
        <mo>=</mo>
        <mn>${resulTotal.toFixed(1)}</mn>
      </math>
  `;
  console.log(num1Total, "++++", num2Total, "++++", resulTotal);
  setTimeout(() => {
    graphicSimplePercentageTotal2total.style.width = `${100 - num1Total}%`;
    graphicSimplePercentageTotalTotal.style.width = `${100 - num1Total}%`;
    graphicSimplePercentagetotal.style.width = `${num1Total}%`;
    graphicSimplePercentageTotal2total1.style.width = `${num1Total}%`;

    graphicSimplePercentageTotal2total.textContent = `${(resulTotal - (((num1Total * resulTotal) / 100))).toFixed(1)}`;
    graphicSimplePercentageTotalTotal.textContent = `${100 - num1Total}%`;
    graphicSimplePercentagetotal.textContent = `${((num1Total * resulTotal) / 100).toFixed(1)}`;//--------
    graphicSimplePercentageTotal2total1.textContent = `${(num1Total).toFixed(1)}%`;
    totalGraphicTotal.textContent = `Total : ${resulTotal.toFixed(1)}`;
  }, 100);
}

function calculateAmount() {
  const amount1 = parseFloat(document.getElementById("amount1").value);
  const amount2 = parseFloat(document.getElementById("amount2").value);
  const amountResult = (amount2 * 100) / amount1;
  document.getElementById("formulaAmount1").textContent = amount2;
  document.getElementById("formulaAmount2").textContent = amount1;
  document.getElementById("amountResult").value = amountResult.toFixed(1);
  document.getElementById("formulaAmount").innerHTML = `
      <math display="block">
        <mi>x</mi>
        <mo>=</mo>
        <mfrac>
          <mrow>
            <mn>${amount2}</mn>
            <mo>&#x22C5;</mo>
            <mn>100</mn>
          </mrow>
          <mn>${amount1}</mn>
        </mfrac>
      </math>
      <math display="block" class="mt-3">
        <mi>x</mi>
        <mo>=</mo>
        <mn>${amountResult.toFixed(1)}%</mn>
      </math>
  `;
  const graphichAmount1 = document.querySelector('.graphichAmount1');
  const graphichAmount2 = document.querySelector('.graphichAmount2');
  const graphichAmount3 = document.querySelector('.graphichAmount3');
  const graphichAmount4 = document.querySelector('.graphichAmount4');
  const graphichAmount5 = document.querySelector('.graphichAmount5');

  graphichAmount1.textContent = `Total: ${amount1}`;
  graphichAmount2.textContent = `${amountResult.toFixed(1)}%`;
  graphichAmount3.textContent = `${(100 - amountResult).toFixed(1)}%`;
  graphichAmount4.textContent = `${((amountResult * amount1) / 100).toFixed(1)}`;
  graphichAmount5.textContent = `${(amount1 - amount2).toFixed(1)}`;

  graphichAmount2.style.width = `${amountResult}%`;
  graphichAmount3.style.width = `${100 - amountResult}%`;
  graphichAmount4.style.width = `${amountResult}%`;
  graphichAmount5.style.width = `${100 - amountResult}%`;


}

function calculateChange() {
  const change1 = parseFloat(document.getElementById("change1").value);
  const change2 = parseFloat(document.getElementById("change2").value);
  const change3 = parseFloat(document.getElementById("change3").value);
  const changeResult = (change2 * change3) / change1;
  console.log(change1, change2, change3, changeResult);
  document.getElementById("formulaChange1").textContent = change2;
  document.getElementById("formulaChange2").textContent = change1;
  document.getElementById("formulaChange3").textContent = change3;

  document.getElementById("resultChange").value = changeResult.toFixed(1);
  document.getElementById("formulaChange").innerHTML = `
      <math display="block">
        <mi>x</mi>
        <mo>=</mo>
        <mfrac>
          <mrow>
            <mn>${change2}</mn>
            <mo>&#x22C5;</mo>
            <mn>${change3}</mn>
          </mrow>
          <mn>${change1}</mn>
        </mfrac>
      </math>
      <math display="block" class="mt-3">
        <mi>x</mi>
        <mo>=</mo>
        <mn>${changeResult.toFixed(1)}%</mn>
      </math>
  `;
  const graphichChangue1 = document.querySelector('.graphichChangue1');
  const graphichChangue2 = document.querySelector('.graphichChangue2');
  const graphichChangue3 = document.querySelector('.graphichChangue3');
  const graphichChangue4 = document.querySelector('.graphichChangue4');
  const graphichChangue5 = document.querySelector('.graphichChangue5');
  graphichChangue1.textContent = `Total: ${((change2 * 100) / change1).toFixed(1)}`;
  graphichChangue2.textContent = `${change1.toFixed(1)}%`;
  graphichChangue3.textContent = `${change3.toFixed(1)}%`;
  graphichChangue4.textContent = `${change2.toFixed(1)}`;
  graphichChangue5.textContent = `${changeResult.toFixed(1)}`;


  graphichChangue2.style.width = `${change1}%`;
  graphichChangue3.style.width = `${change3}%`;
  graphichChangue4.style.width = `${change1}%`;
  graphichChangue5.style.width = `${change3}%`;


}


function calculates() {
  const num1 = parseFloat(document.getElementById("num10").value);
  const num2 = parseFloat(document.getElementById("num20").value);
  const resultEl = document.getElementById("resultCalculate");

  if (isNaN(num1) || isNaN(num2)) {
    resultEl.textContent = "⚠️ Please enter valid numbers.";
    resultEl.classList.remove("text-success");
    resultEl.classList.add("text-danger");
    return;
  }

  const result = (num1 * num2) / 100;
  resultEl.textContent = `${result.toFixed(1)}`;
  resultEl.classList.remove("text-danger");
  resultEl.classList.add("text-success");
}


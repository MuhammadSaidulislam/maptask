$(document).on('click.bs.dropup.data-api', '.dropup.keep-inside-clicks-open', function (e) {
    e.stopPropagation();
  });
  document.getElementById('12months').onclick = function () {
    document.getElementById("demo").innerText = '12-Months Forecast';
    document.getElementById("demo1").innerText = '12-Months Forecast';
    var checkboxes = document.getElementsByName('check1');
    for (var checkbox of checkboxes) {
      checkbox.checked = this.checked;
    }
    let indoCheckId = ['IndomedianIncome', 'indoavgIncome', 'indomedianNet', 'Indounemployment', 'indoavgNet', 'IndomedianDis', 'indoavgDis']
    for (let i = 0; i <= indoCheckId.length; i++) {
      document.getElementById(indoCheckId[i]).disabled = true;
    }
  }

  document.getElementById('24months').onclick = function () {
    document.getElementById("demo").innerText = '24-Months Forecast';
    document.getElementById("demo1").innerText = '24-Months Forecast';
    var checkboxes = document.getElementsByName('check1');
    for (var checkbox of checkboxes) {
      checkbox.checked = this.checked;
    }
    let indoCheckId = ['IndomedianIncome', 'indoavgIncome', 'indomedianNet', 'Indounemployment', 'indoavgNet', 'IndomedianDis', 'indoavgDis']
    for (let i = 0; i <= indoCheckId.length; i++) {
      document.getElementById(indoCheckId[i]).disabled = true;
    }
  }

  document.getElementById('36months').onclick = function () {
    document.getElementById("demo").innerText = '36-Months Forecast';
    document.getElementById("demo1").innerText = '36-Months Forecast';
    var checkboxes = document.getElementsByName('check1');
    for (var checkbox of checkboxes) {
      checkbox.checked = this.checked;
    }
    let indoCheckId = ['IndomedianIncome', 'indoavgIncome', 'indomedianNet', 'Indounemployment', 'indoavgNet', 'IndomedianDis', 'indoavgDis']
    for (let i = 0; i <= indoCheckId.length; i++) {
      document.getElementById(indoCheckId[i]).disabled = true;
    }
  }


  document.getElementById('M12months').onclick = function () {
    document.getElementById("demo").innerText = '12-Months Forecast';
    document.getElementById("demo1").innerText = '12-Months Forecast';
    var checkboxes = document.getElementsByName('check1');
    for (var checkbox of checkboxes) {
      checkbox.checked = this.checked;
    }
    let indoCheckId = ['MIndomedianIncome', 'MindoavgIncome', 'MindomedianNet', 'MIndounemployment', 'MindoavgNet', 'MIndomedianDis', 'MindoavgDis']
    for (let i = 0; i <= indoCheckId.length; i++) {
      document.getElementById(indoCheckId[i]).disabled = true;
    }

  }

  document.getElementById('M24months').onclick = function () {
    document.getElementById("demo").innerText = '24-Months Forecast';
    document.getElementById("demo1").innerText = '24-Months Forecast';
    var checkboxes = document.getElementsByName('check1');
    for (var checkbox of checkboxes) {
      checkbox.checked = this.checked;
    }
    let indoCheckId = ['MIndomedianIncome', 'MindoavgIncome', 'MindomedianNet', 'MIndounemployment', 'MindoavgNet', 'MIndomedianDis', 'MindoavgDis']
    for (let i = 0; i <= indoCheckId.length; i++) {
      document.getElementById(indoCheckId[i]).disabled = true;
    }
  }

  document.getElementById('M36months').onclick = function () {
    document.getElementById("demo").innerText = '36-Months Forecast';
    document.getElementById("demo1").innerText = '36-Months Forecast';
    var checkboxes = document.getElementsByName('check1');
    for (var checkbox of checkboxes) {
      checkbox.checked = this.checked;
    }
    let indoCheckId = ['MIndomedianIncome', 'MindoavgIncome', 'MindomedianNet', 'MIndounemployment', 'MindoavgNet', 'MIndomedianDis', 'MindoavgDis']
    for (let i = 0; i <= indoCheckId.length; i++) {
      document.getElementById(indoCheckId[i]).disabled = true;
    }
  }
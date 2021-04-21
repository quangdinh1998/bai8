function convert() {
    let From = +document.getElementById('from').value;
    let To = +document.getElementById('to').value;
    let amount = +document.getElementById('Amount').value;
    let ketqua = (amount * To) / From;
    document.getElementById('result').innerHTML = 'Result = ' + ketqua;
}
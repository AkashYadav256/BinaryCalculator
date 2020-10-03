var counter = {
    'add': 0,
    'sub': 0,
    'mul': 0,
    'div': 0
};

function zeroClicked() {
    document.getElementById('res').innerHTML = document.getElementById('res').innerHTML + '0';
}

function oneClicked() {
    document.getElementById('res').innerHTML = document.getElementById('res').innerHTML + '1';
}

function addClicked() {
    document.getElementById('res').innerHTML = document.getElementById('res').innerHTML + '+';
    counter['add'] += 1;
}

function subClicked() {
    document.getElementById('res').innerHTML = document.getElementById('res').innerHTML + '-';
    counter['sub'] += 1;
}

function mulClicked() {
    document.getElementById('res').innerHTML = document.getElementById('res').innerHTML + '*';
    counter['mul'] += 1;
}

function divClicked() {
    document.getElementById('res').innerHTML = document.getElementById('res').innerHTML + '/';
    counter['div'] += 1;
}

function clearScreen() {
    document.getElementById('res').innerHTML = '';
}

function equalsClicked() {
    const re = new RegExp('\\d+', 'g');
    var nums = document.getElementById('res').innerHTML.match(re);
    if (counter['add'] > 0) {
        document.getElementById('res').innerHTML = dec2bin(Number(Number(bin2dec(nums[0]))+Number(bin2dec(nums[1]))));
    }
    if (counter['sub'] > 0) {
        document.getElementById('res').innerHTML = dec2bin(Number(Number(bin2dec(nums[0]))-Number(bin2dec(nums[1]))));
    }
    if (counter['mul'] > 0) {
        document.getElementById('res').innerHTML = dec2bin(Number(Number(bin2dec(nums[0]))*Number(bin2dec(nums[1]))));
    }
    if (counter['div'] > 0) {
        document.getElementById('res').innerHTML = dec2bin(Number(Number(bin2dec(nums[0]))/Number(bin2dec(nums[1]))));
    }
}

function bin2dec(bin){
  return parseInt(bin, 2).toString(10);
}

function dec2bin(dec){
  return (dec >>> 0).toString(2);
}

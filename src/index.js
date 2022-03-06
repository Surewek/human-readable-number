module.exports = function toReadable (number) {
    const staticNumbers = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety'
    }

    const stringFromNumber = number.toString();
    const numberDigit = stringFromNumber.length;

    let result = '';

    function getDozens(dozens){
      if(+dozens <= 20 || dozens[1] == '0'){
            result += staticNumbers[dozens];
        } else {
            result += staticNumbers[dozens[0] + '0'] + ' ' + staticNumbers[dozens[1]];
        }
    }

    function getHundreds(hundreds){
        result += staticNumbers[hundreds[0]] + ' hundred';

        if(hundreds[1] != 0){
          result += ' ';
          getDozens(hundreds[1] + hundreds[2])
        }

        if(hundreds[1] == 0 && hundreds[2] != 0){
          result += ' ' + staticNumbers[hundreds[2]];
        }
    }

    switch(numberDigit){
        case 1:
            result = staticNumbers[stringFromNumber];
            break;
        case 2:
            getDozens(stringFromNumber)
            break;
        case 3:
            getHundreds(stringFromNumber)
            break;
    }

    return result;
}
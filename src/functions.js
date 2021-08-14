import * as data1 from '../data/test-board-1.json';
import * as data2 from '../data/test-board-2.json';
import * as dictionary from '../data/dictionary.json';

//alert(data.board[0]);
//alert(dictionary.words[0]);

export const loadData = (load1or2) => {
    const dataArray = [];
    let ii = 0;
    let jj = 0;

    var data = data2;

    if (load1or2) {
        data = data1;
    }

    data.board.map(value => {
        dataArray.push({ value: value, ii: ii, jj: jj, touch: false });
        jj++;
        if (jj == 4) {
            ii++;
            jj = 0;
        }
    });

    return dataArray;
}

export const validWord = (word) => {
    let pass = 'invalid';

    dictionary.words.map(value => {
        if (value == word.toLowerCase()) {
            pass = 'valid';
        }
    });

    return pass;
}

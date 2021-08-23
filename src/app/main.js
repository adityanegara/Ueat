import {numberOne, numberTwo, plusButton, result, alertMessage} from './element.js';
import checkNumber from './utils/checknumber.js';
import showElement from './utils/showElement.js';
import hideElement from './utils/hideElement.js';

export const main = () =>{
    plusButton.addEventListener('click', () =>{
        if(checkNumber(numberOne.value, numberTwo.value)){
            console.log("plus button true");
            result.innerText = parseInt(numberOne.value) + parseInt(numberTwo.value);
            hideElement(alertMessage);
        }else{
            console.log("plus button false");
            result.innerText = "";
            showElement(alertMessage);
        }
    });
}

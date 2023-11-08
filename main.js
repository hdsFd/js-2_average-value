const firstNumb = prompt("Please, enter the first number to calculate.");
if (!isNaN(firstNumb) && firstNumb !== "" && firstNumb !== null) {
    const secondNumb = prompt("Now the second number.");
    if (!isNaN(secondNumb) && secondNumb !== "" && secondNumb !== null) {
        const thirdNumb = prompt("And the third.");
        if (!isNaN(thirdNumb) && thirdNumb !== "" && thirdNumb !== null) {
            const averageNumb = (Number(firstNumb) + Number(secondNumb) + Number(thirdNumb)) / 3;
            alert(`Your number is '${averageNumb}'.`);
        } else if (thirdNumb === null) {
            alert("Calculation was canceled.")
        } else {
            alert("Calculation is not possible. Try again by entering numbers.");
        }
    } else if (secondNumb === null) {
        alert("Calculation was canceled.")
    } else {
        alert("Calculation is not possible. Try again by entering numbers.");
    }
} else if (firstNumb === null) {
    alert("Calculation was canceled.")
} else {
    alert("Calculation is not possible. Try again by entering numbers.");
}
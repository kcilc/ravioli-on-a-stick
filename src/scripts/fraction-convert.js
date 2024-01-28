const conversionTable = {
    "0.5": "½",
    "½": "0.5"
}

export function replaceFraction(input) {
    return conversionTable[input] || input;
}

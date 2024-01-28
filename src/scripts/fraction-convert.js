const conversionTable = {
    "0.12": "⅛",
    "0.25": "¼",
    "0.33": "⅓",
    "0.5": "½",
    "0.66": "⅔",
    "0.75": "¾",
}

export function replaceFraction(input) {
    const [int, dec] = input.split(".");
    if (!dec) return input;

    const extractedFraction = `0.${dec}`.substring(0, 4);

    if (conversionTable[input.substring(0, 4)]) {
        return conversionTable[input];
    }
    if (conversionTable[extractedFraction]) {
        return int + conversionTable[extractedFraction];
    }

    return input;
}

const conversionTable = {
    "0.5": "½",
    "0.25": "¼",
    "0.75": "¾",
}

export function replaceFraction(input) {
    const [int, dec] = input.split(".");
    if (!dec) return input;

    const extractedFraction = `0.${dec}`;

    if (conversionTable[input]) {
        return conversionTable[input];
    }
    if (conversionTable[extractedFraction]) {
        return int + conversionTable[extractedFraction];
    }

    return input;
}

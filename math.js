const tip = (total, tipPer) => {
    if (tipPer === undefined)
        tipPer = 0.2;
    const tip = total * tipPer;
    return tip
}

const fah = (temp) => {
    return (temp - 32) / 1.8
}

const cel = (temp) => {
    return (temp * 1.8) + 32
}

module.exports = {
    tip,
    fah,
    cel
}
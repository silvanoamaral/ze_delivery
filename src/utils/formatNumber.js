const formatNumber = number => "R$ " + number.toFixed(2).replace(".",",")

export default formatNumber
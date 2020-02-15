const formatNumber = number => {
  return "R$ " + number.toFixed(2).replace(".",",")
}

export default formatNumber
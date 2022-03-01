function processTransactions(transActions) {
  if (!transActions) {
    throw new Error("Undefined collection of transactions");
  }

  const txCount = {};

  transActions.forEach((item) =>
    txCount[item] ? (txCount[item] += 1) : (txCount[item] = 1)
  );

  return Object.keys(txCount)
    .sort((itemOne, itemTwo) => {
      return (
        txCount[itemTwo] - txCount[itemOne] ||
        itemOne > itemTwo ||
        -(itemOne < itemTwo)
      );
    })
    .map((item) => `${item} ${txCount[item]}`);
}

module.exports = processTransactions;

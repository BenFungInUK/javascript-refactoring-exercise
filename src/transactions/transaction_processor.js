function processTransactions(transActions) {
  if (!transActions) {
    throw new Error("Undefined collection of transactions");
  }

  let txCount = {};

  transActions.forEach((item) =>
    txCount[item] ? (txCount[item] += 1) : (txCount[item] = 1)
  );

  return sortByAmountThenName(txCount);
}

function sortByAmountThenName(txCount) {
  let sortedKeys = Object.keys(txCount).sort((itemOne, itemTwo) => {
    return (
      txCount[itemTwo] - txCount[itemOne] ||
      itemOne > itemTwo ||
      -(itemOne < itemTwo)
    );
  });

  return sortedKeys.map((item) => `${item} ${txCount[item]}`);
}

module.exports = processTransactions;

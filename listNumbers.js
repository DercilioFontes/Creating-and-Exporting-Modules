var listNumbers = {
  list: [],

  sortAscendent: function(ant, pos) {
    return ant - pos;
  }
};

module.exports = {

  storeNumber: function(number) {
    listNumbers.list.push(number);
    return true;
  },

  sortNumbers: function() {

    listNumbers.list.sort(listNumbers.sortAscendent);

    return listNumbers.list;
  }
};
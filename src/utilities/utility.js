const getStoredCard = () => {
  const storecard = localStorage.getItem("myTime");
  const readingTime = [];
  if (storecard) {
    readingTime = JSON.pars(storecard);
  } else {
    storecard = JSON.stringify("myTime", id);
  }
};

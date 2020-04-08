const covid19ImpactEstimator = (data) => {
  const { reportedCases } = data;
  const currentlyInfected1 = reportedCases * 10;
  const currentlyInfected2 = reportedCases * 50;
  //return output object
  return {
    data,
    impact: {
      currentlyInfected2,
      infectionsByRequestedTime: currentlyInfected1 * 1024
    },
    severeImpact: {
      currentlyInfected2,
      infectionsByRequestedTime: currentlyInfected2 * 1024
    }
  };
};
export default covid19ImpactEstimator;

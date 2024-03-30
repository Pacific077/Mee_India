const CountWords = (sentence) => {
  const words = sentence.trim().split(/\s+/);
  return words.length;
};

export default CountWords;

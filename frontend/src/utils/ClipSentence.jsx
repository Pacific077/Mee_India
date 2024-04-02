const ClipSentence =(sentence, wordCount)=> {
    const words = sentence.trim().split(/\s+/);
    if (words.length <= wordCount) {
      return sentence;
    }
    const clippedWords = words.slice(0, wordCount);
    const clippedSentence = clippedWords.join(' ');

    return clippedSentence;
  }

  export default ClipSentence
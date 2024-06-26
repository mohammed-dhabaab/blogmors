export const countWords = (text = "") => {
  // Remove any leading/trailing whitespace and split the text into an array of words
  return text === "" ? 0 : text.trim().split(/\s+/).length;
};

export const getWordCountFromPost = (post) => {
  if (!post || Object.keys(post).length === 0) {
    return 0;
  }
  let totalWordCount = 0;

  // Count the words in the intro
  // const introWordCount = countWords(post.intro);
  // totalWordCount += introWordCount;

  // const introWordCount = post.intro.forEach((paragraph) => {
  //   totalWordCount += countWords(paragraph);
  // });

  const introWordCount = post.intro.reduce(
    (accumulator, paragraph) => accumulator + countWords(paragraph),
    0,
  );
  totalWordCount += introWordCount;

  // Count the words in each section
  post.sections.forEach((section) => {
    const sectionTitleWordCount = countWords(section.title);
    // const sectionContentWordCount = countWords(section.content);
    const sectionContentWordCount = section.content.reduce(
      (accumulator, paragraph) => accumulator + countWords(paragraph),
      0,
    );
    totalWordCount += sectionTitleWordCount + sectionContentWordCount;
  });
  return totalWordCount;
};

export const getPostReadingEstimatedTime = (post) => {
  const wordCount = getWordCountFromPost(post);
  const wordsPerMinute = 200;
  const totalSeconds = Math.ceil((wordCount / wordsPerMinute) * 60);

  const minutes = Math.floor((totalSeconds % 3600) / 60);
  // const hours = Math.floor(totalSeconds / 3600);
  // const seconds = totalSeconds % 60;

  let readingTime = "";

  // if (hours > 0) {
  //   readingTime += `${hours} h `;
  // }

  if (minutes > 0) {
    readingTime += `${minutes} min`;
  } else {
    readingTime += `<1 min`;
  }

  // if (seconds > 0 || (hours === 0 && minutes === 0)) {
  //   readingTime += `${seconds} s`;
  // }

  readingTime += " read";

  return readingTime.trim();
};

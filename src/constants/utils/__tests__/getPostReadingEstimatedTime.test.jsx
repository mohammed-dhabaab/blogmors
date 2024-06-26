import {
  countWords,
  getWordCountFromPost,
  getPostReadingEstimatedTime,
} from "../getPostReadingEstimatedTime";
import { describe, it, expect } from "vitest";

describe("countWords", () => {
  it("should return 0 when text is an empty string", () => {
    const result = countWords("");
    expect(result).toBe(0);
  });

  it("should return the correct word count for a non-empty string", () => {
    const text = "This is a sample text.";
    const result = countWords(text);
    // The text contains 5 words ("This", "is", "a", "sample", "text.")
    expect(result).toBe(5);
  });

  it("should handle leading and trailing whitespace correctly", () => {
    const text = "   There    are    spaces   here.   ";
    const result = countWords(text);
    // The text contains 5 words ("There", "are", "spaces", "here.")
    expect(result).toBe(4);
  });

  it("should handle multiple consecutive spaces as word separators", () => {
    const text = "Multiple     spaces   between    words.";
    const result = countWords(text);
    // The text contains 4 words ("Multiple", "spaces", "between", "words.")
    expect(result).toBe(4);
  });

  it("should return 1 for a single word text", () => {
    const text = "One";
    const result = countWords(text);
    expect(result).toBe(1);
  });
});

describe("getWordCountFromPost", () => {
  it("should return 0 when the post is empty", () => {
    const post = {};
    const result = getWordCountFromPost(post);
    expect(result).toBe(0);
  });

  it("should return the correct word count for a non-empty post with one section", () => {
    const post = {
      intro: ["Testing improves our services quality!"],
      sections: [
        {
          id: 1,
          title: "Test Section 1",
          content: ["This is the 1 Section test"],
        },
      ],
    };
    const result = getWordCountFromPost(post);
    expect(result).toBe(14);
  });

  it("should return the correct word count for a non-empty post with more than one section", () => {
    const post = {
      intro: ["Testing improves our services quality!"],
      sections: [
        {
          id: 1,
          title: "Test Section 1",
          content: ["This is the 2 Section test"],
        },
        {
          id: 3,
          title: "Test Section 2",
          content: ["This is the 2 Section test"],
        },
      ],
    };
    const result = getWordCountFromPost(post);
    expect(result).toBe(23);
  });

  it("should handle leading and trailing whitespace correctly", () => {
    const post = {
      intro: ["     Testing    improves our services        quality!     "],
      sections: [
        {
          id: 1,
          title: "    Test    Section 1     ",
          content: ["This is the 1 Section test"],
        },
      ],
    };
    const result = getWordCountFromPost(post);
    expect(result).toBe(14);
  });

  it("should handle with empty intro", () => {
    const post = {
      intro: [],
      sections: [
        {
          id: 1,
          title: "    Test    Section 1     ",
          content: ["This is the 1 Section test"],
        },
      ],
    };
    const result = getWordCountFromPost(post);
    expect(result).toBe(9);
  });

  it("should handle with empty sections", () => {
    const post = {
      intro: ["Testing improves our services quality!"],
      sections: [],
    };
    const result = getWordCountFromPost(post);
    expect(result).toBe(5);
  });

  it("should handle with empty intro and sections", () => {
    const post = {
      intro: [],
      sections: [],
    };
    const result = getWordCountFromPost(post);
    expect(result).toBe(0);
  });
});

describe("getPostReadingEstimatedTime", () => {
  it(`should return "<1 min read" when the post is empty`, () => {
    const post = {};
    const result = getPostReadingEstimatedTime(post);
    expect(result).toBe("<1 min read");
  });

  it(`should return "<1 min read" when the post have less words for reading within 1 min`, () => {
    const post = {
      intro: ["Testing improves our services quality!"],
      sections: [
        {
          id: 1,
          title: "Test Section 1",
          content: ["This is the 1 Section test"],
        },
      ],
    };
    const result = getPostReadingEstimatedTime(post);
    expect(result).toBe("<1 min read");
  });

  it(`should return "1 min read" when the post have words that can be read within 1 min`, () => {
    const post = {
      intro: ["Testing improves our services quality!"],
      sections: [
        {
          id: 1,
          title: "Test Section 1",
          content: [
            "200-word Lorem Ipsum test: Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Integer quis turpis ac felis dignissim molestie at sed libero. Quisque tempus, nibh ac luctus interdum, mi mauris lobortis libero, non tincidunt elit justo id tortor. Sed odio justo, hendrerit id lacus et, consectetur tincidunt justo. Etiam nec sapien varius, ultricies magna at, dignissim tortor. Fusce id fermentum nisi. Nulla facilisi. Suspendisse in purus tincidunt, porttitor nunc sit amet, tristique odio. Nam id orci nec risus lacinia ultricies. Donec condimentum urna ut felis porta mattis. Cras dictum magna in justo fringilla, vel venenatis lorem gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean eget feugiat ex. Vestibulum sed eros quis libero cursus consequat. Sed auctor velit in urna dignissim, eget gravida purus cursus. Vivamus porta, magna sit amet viverra lobortis, mauris mauris tincidunt sapien, at ultricies enim justo convallis nulla. Proin tempor mi vel dui ullamcorper, ac ultrices purus sodales. Vivamus imperdiet diam a augue rutrum, at mattis elit efficitur. Quisque vitae accumsan neque. Aliquam erat volutpat. Aliquam erat volutpat. Nulla facilisi. Sed nec lacus ut justo vestibulum pulvinar",
          ],
        },
      ],
    };
    const result = getPostReadingEstimatedTime(post);
    expect(result).toBe("1 min read");
  });

  it(`should return "1 min read" when the post have words that can be read within 2 min`, () => {
    const post = {
      intro: ["Testing improves our services quality!"],
      sections: [
        {
          id: 1,
          title: "Test Section 1",
          content: [
            "200-word Lorem Ipsum test: Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Integer quis turpis ac felis dignissim molestie at sed libero. Quisque tempus, nibh ac luctus interdum, mi mauris lobortis libero, non tincidunt elit justo id tortor. Sed odio justo, hendrerit id lacus et, consectetur tincidunt justo. Etiam nec sapien varius, ultricies magna at, dignissim tortor. Fusce id fermentum nisi. Nulla facilisi. Suspendisse in purus tincidunt, porttitor nunc sit amet, tristique odio. Nam id orci nec risus lacinia ultricies. Donec condimentum urna ut felis porta mattis. Cras dictum magna in justo fringilla, vel venenatis lorem gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean eget feugiat ex. Vestibulum sed eros quis libero cursus consequat. Sed auctor velit in urna dignissim, eget gravida purus cursus. Vivamus porta, magna sit amet viverra lobortis, mauris mauris tincidunt sapien, at ultricies enim justo convallis nulla. Proin tempor mi vel dui ullamcorper, ac ultrices purus sodales. Vivamus imperdiet diam a augue rutrum, at mattis elit efficitur. Quisque vitae accumsan neque. Aliquam erat volutpat. Aliquam erat volutpat. Nulla facilisi. Sed nec lacus ut justo vestibulum pulvinar",
            "Another 200-word Lorem Ipsum test: Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Integer quis turpis ac felis dignissim molestie at sed libero. Quisque tempus, nibh ac luctus interdum, mi mauris lobortis libero, non tincidunt elit justo id tortor. Sed odio justo, hendrerit id lacus et, consectetur tincidunt justo. Etiam nec sapien varius, ultricies magna at, dignissim tortor. Fusce id fermentum nisi. Nulla facilisi. Suspendisse in purus tincidunt, porttitor nunc sit amet, tristique odio. Nam id orci nec risus lacinia ultricies. Donec condimentum urna ut felis porta mattis. Cras dictum magna in justo fringilla, vel venenatis lorem gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean eget feugiat ex. Vestibulum sed eros quis libero cursus consequat. Sed auctor velit in urna dignissim, eget gravida purus cursus. Vivamus porta, magna sit amet viverra lobortis, mauris mauris tincidunt sapien, at ultricies enim justo convallis nulla. Proin tempor mi vel dui ullamcorper, ac ultrices purus sodales. Vivamus imperdiet diam a augue rutrum, at mattis elit efficitur. Quisque vitae accumsan neque. Aliquam erat volutpat. Aliquam erat volutpat. Nulla facilisi. Sed nec lacus ut justo vestibulum pulvinar",
          ],
        },
      ],
    };
    const result = getPostReadingEstimatedTime(post);
    expect(result).toBe("2 min read");
  });
});

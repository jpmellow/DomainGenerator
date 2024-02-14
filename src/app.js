window.onload = function() {
  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let exts = [".com", ".net", ".org"];

  const domains = [];

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let ext of exts) {
          domains.push(`${pronoun}${adj}${noun}${ext}`);
        }
      }
    }
  }
  document.querySelector("div").innerHTML = domains.join("<br/>");
};

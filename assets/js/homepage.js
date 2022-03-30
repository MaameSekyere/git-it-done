var getUserRepos = function (response) {
  fetch("https://api.github.com/users/octocat/repos");
};
getUserRepos();

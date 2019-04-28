class GithubService {
    apiUrl = 'https://api.github.com';
    userContentApiUrl = 'https://raw.githubusercontent.com';
    username = 'slavabelaev';
    clientId = 'd3912c53bb6454449923';
    clientSecret = 'f8a18006358fc6e234dc42709ee89f93fa149efb';

    getProjects() {
        return fetch(`${this.apiUrl}/users/${this.username}/repos?client_id=${this.clientId}&client_secret=${this.clientSecret}`)
            .then(response => response.json());
    }

    getProjectInfo(projectName) {
        return fetch(`${this.userContentApiUrl}/${this.username}/${projectName}/master/package.json?client_id=${this.clientId}&client_secret=${this.clientSecret}`)
            .then(response => response.json());
    }

}

export default GithubService;

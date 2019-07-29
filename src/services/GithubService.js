class GithubService {
    apiUrl = 'https://api.github.com';
    userContentApiUrl = 'https://raw.githubusercontent.com';
    username = 'slavabelaev';
    clientId = 'd3912c53bb6454449923';
    clientSecret = 'f8a18006358fc6e234dc42709ee89f93fa149efb';

    getProjects() {
        return fetch(`${this.apiUrl}/users/${this.username}/repos?client_id=${this.clientId}&client_secret=${this.clientSecret}`)
            .then(response => response.json())
            .then(projects => {
                return !projects ? null : projects.sort(
                    (a, b) => new Date(a['created_at']) - new Date(b['created_at'])
                )
                .reverse();
            });
    }

    getProjectPreviews(projectName) {
        const imageBaseUrl = `${this.userContentApiUrl}/${this.username}/${projectName}/master/previews/`;
        return fetch(`${this.apiUrl}/repos/${this.username}/${projectName}/contents/previews`)
            .then(response => response.json())
            .then(files => {
                const fileNames = [];
                const images = [];

                files.forEach(file => {
                    let isFolder = !file.name.includes('.');

                    if (isFolder) return true;

                    const fileName = file.name.match(/.*?(?=\.)/)[0];
                    if (!fileNames.includes(fileName)) {
                        fileNames.push(fileName);

                        (fileName === 'index' || fileName === 'home' || fileName === 'start') ?
                            images.unshift(file.name) :
                            images.push(file.name);
                    }
                });

                return images.map(image => imageBaseUrl + image);
            });
    }

}

export default GithubService;

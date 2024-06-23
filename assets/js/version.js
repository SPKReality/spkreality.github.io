const releasesUrl = 'https://api.github.com/repos/Qbox-project/qbx_core/releases';

async function getLatestRelease() {
    try {
        const response = await axios.get(releasesUrl);
        if (response.data && response.data.length > 0) {
            const latestReleaseVersion = response.data[0].tag_name;
            document.getElementById('latestRelease').textContent = `${latestReleaseVersion}`;
        } else {
            document.getElementById('latestRelease').textContent = 'v1.0.0';
        }
    } catch (error) {
        document.getElementById('latestRelease').textContent = 'v1.0.0';
    }
}

window.onload = () => {
    getLatestRelease();
};
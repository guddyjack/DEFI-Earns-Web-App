document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Fetch Blogger Articles
const loadBloggerArticles = async () => {
    const url = 'https://defiearns.blogspot.com/feeds/posts/default?alt=json';
    try {
        const response = await fetch(url);
        const data = await response.json();
        const entries = data.feed.entry;
        
        const articlesContainer = document.querySelector('.articles-container');
        articlesContainer.innerHTML = ''; // Clear placeholder content

        entries.slice(0, 5).forEach(entry => {
            const title = entry.title.$t;
            const link = entry.link.find(l => l.rel === "alternate").href;
            
            // Create article card
            const articleCard = document.createElement('div');
            articleCard.classList.add('article-card');
            articleCard.innerHTML = `
                <h3>${title}</h3>
                <a href="${link}" target="_blank" class="earn-btn">Read & Earn</a>
            `;
            articlesContainer.appendChild(articleCard);
        });
    } catch (error) {
        console.error('Error fetching Blogger articles:', error);
    }
};

// Load articles when the page loads
document.addEventListener('DOMContentLoaded', loadBloggerArticles);

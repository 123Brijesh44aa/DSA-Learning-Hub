// Main application logic
class DSAHub {
    constructor() {
        this.searchTerm = '';
        this.topics = topics; // Imported from topics.js
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.filterAndDisplayTopics();
    }

    setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
            this.searchTerm = e.target.value.toLowerCase();
            this.filterAndDisplayTopics();
        });
    }

    filterAndDisplayTopics() {
        let filteredTopics = this.topics.filter(topic => {
            const matchesSearch = topic.title.toLowerCase().includes(this.searchTerm) ||
                topic.description.toLowerCase().includes(this.searchTerm) ||
                topic.tags.some(tag => tag.toLowerCase().includes(this.searchTerm));
            return matchesSearch;
        });

        // Sort by date (newest first)
        filteredTopics.sort((a, b) => new Date(b.date) - new Date(a.date));

        this.displayTopics(filteredTopics);
        this.updateTopicsCount(filteredTopics.length);
        this.toggleNoResultsMessage(filteredTopics.length === 0);
    }

    displayTopics(topicList) {
        const container = document.getElementById('topicsList');
        container.innerHTML = '';

        topicList.forEach(topic => {
            const topicCard = this.createTopicCard(topic);
            container.appendChild(topicCard);
        });
    }

    createTopicCard(topic) {
        const card = document.createElement('a');
        card.className = 'topic-card';
        card.href = topic.filename;
        card.target = '_blank'; // Open in new tab

        const isNew = this.isTopicNew(topic.date);

        card.innerHTML = `
    ${topic.completed || isNew ? `
        <div class="topic-status ${topic.completed ? 'completed' : 'new'}">
            ${topic.completed ? '✓' : 'NEW'}
        </div>
    ` : ''}
    
    <div class="topic-header">
        <span class="topic-icon">${topic.icon}</span>
        <div class="topic-title-section">
            <h2 class="topic-title">${topic.title}</h2>
            <div class="topic-meta">
                <span class="difficulty ${topic.difficulty}">${topic.difficulty}</span>
                <div class="topic-date">📅 ${this.formatDate(topic.date)}</div>
            </div>
        </div>
    </div>

    <div class="topic-description">${topic.description}</div>

    <div class="topic-tags">
        ${topic.tags.map(tag => `<span class="topic-tag">#${tag}</span>`).join('')}
    </div>

    <div class="topic-contributor">
    👤 <span class="contributor-name">${topic.contributorName}</span>
    (<a href="https://github.com/${topic.contributorGithub}" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="contributor-link">@${topic.contributorGithub}</a>)
    ${topic.owner ? `<span class="owner-badge">Owner</span>` : ''}
</div>

`;


        return card;
    }

    isTopicNew(dateString) {
        const topicDate = new Date(dateString);
        const threeDaysAgo = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000);
        return topicDate > threeDaysAgo;
    }

    formatDate(dateString) {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    }

    updateTopicsCount(count) {
        const countElement = document.getElementById('topicsCount');
        countElement.innerHTML = `<strong>${count}</strong> topic${count !== 1 ? 's' : ''} available`;
    }

    toggleNoResultsMessage(show) {
        const noResults = document.getElementById('noResults');
        const topicsList = document.getElementById('topicsList');

        if (show) {
            noResults.style.display = 'block';
            topicsList.style.display = 'none';
        } else {
            noResults.style.display = 'none';
            topicsList.style.display = 'grid';
        }
    }

    // Method to add new topic (for future use)
    addTopic(newTopic) {
        this.topics.unshift(newTopic); // Add to beginning of array
        this.filterAndDisplayTopics();
    }

    // Method to mark topic as completed
    markTopicCompleted(filename) {
        const topic = this.topics.find(t => t.filename === filename);
        if (topic) {
            topic.completed = true;
            this.filterAndDisplayTopics();
        }
    }

    // Method to get topic by filename
    getTopicByFilename(filename) {
        return this.topics.find(topic => topic.filename === filename);
    }

    // Method to get topics by difficulty
    getTopicsByDifficulty(difficulty) {
        return this.topics.filter(topic => topic.difficulty === difficulty);
    }

    // Method to get topics by tag
    getTopicsByTag(tag) {
        return this.topics.filter(topic =>
            topic.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
        );
    }

    // Method to get completed topics
    getCompletedTopics() {
        return this.topics.filter(topic => topic.completed);
    }

    // Method to get incomplete topics
    getIncompleteTopics() {
        return this.topics.filter(topic => !topic.completed);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.dsaHub = new DSAHub();
});

// Utility functions that can be used globally
const DSAUtils = {
    // Function to search topics
    searchTopics: (searchTerm) => {
        if (window.dsaHub) {
            window.dsaHub.searchTerm = searchTerm.toLowerCase();
            window.dsaHub.filterAndDisplayTopics();
        }
    },

    // Function to get all topics
    getAllTopics: () => {
        return window.dsaHub ? window.dsaHub.topics : [];
    },

    // Function to refresh topics display
    refreshDisplay: () => {
        if (window.dsaHub) {
            window.dsaHub.filterAndDisplayTopics();
        }
    }
};
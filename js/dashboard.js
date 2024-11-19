document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
    loadActivities();
    loadDeadlines();

    // Handle time range changes
    document.getElementById('timeRange').addEventListener('change', function() {
        updateDashboardData(this.value);
    });
});

function initializeCharts() {
    // Project Progress Chart
    const progressCtx = document.getElementById('projectProgress').getContext('2d');
    new Chart(progressCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Completed Projects',
                data: [12, 19, 15, 25, 22, 30],
                borderColor: '#4CAF50',
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: document.body.classList.contains('dark-theme') ? '#fff' : '#333'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: document.body.classList.contains('dark-theme') ? 
                            'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                    },
                    ticks: {
                        color: document.body.classList.contains('dark-theme') ? '#fff' : '#333'
                    }
                },
                x: {
                    grid: {
                        color: document.body.classList.contains('dark-theme') ? 
                            'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                    },
                    ticks: {
                        color: document.body.classList.contains('dark-theme') ? '#fff' : '#333'
                    }
                }
            }
        }
    });

    // Task Distribution Chart
    const taskCtx = document.getElementById('taskDistribution').getContext('2d');
    new Chart(taskCtx, {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'In Progress', 'Pending'],
            datasets: [{
                data: [45, 30, 25],
                backgroundColor: [
                    '#4CAF50',
                    '#2196F3',
                    '#FFC107'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: document.body.classList.contains('dark-theme') ? '#fff' : '#333'
                    }
                }
            }
        }
    });
}

function loadActivities() {
    const activities = [
        {
            type: 'completed',
            title: 'Project Completed',
            description: 'Website Redesign',
            time: '2 hours ago'
        },
        {
            type: 'update',
            title: 'Task Updated',
            description: 'Mobile App Development',
            time: '4 hours ago'
        },
        {
            type: 'new',
            title: 'New Project',
            description: 'E-commerce Platform',
            time: '1 day ago'
        }
    ];

    const activityList = document.querySelector('.activity-list');
    activityList.innerHTML = activities.map(activity => `
        <div class="activity-item">
            <div class="activity-icon ${activity.type}">
                <img src="../assets/icons/${activity.type}.svg" alt="${activity.type}">
            </div>
            <div class="activity-details">
                <h4>${activity.title}</h4>
                <p>${activity.description}</p>
                <span class="activity-time">${activity.time}</span>
            </div>
        </div>
    `).join('');
}

function loadDeadlines() {
    const deadlines = [
        {
            project: 'Website Launch',
            date: '2024-03-15',
            status: 'urgent'
        },
        {
            project: 'Client Presentation',
            date: '2024-03-20',
            status: 'upcoming'
        },
        {
            project: 'Phase 2 Development',
            date: '2024-03-25',
            status: 'normal'
        }
    ];

    const deadlineList = document.querySelector('.deadline-list');
    deadlineList.innerHTML = deadlines.map(deadline => `
        <div class="deadline-item">
            <h4>${deadline.project}</h4>
            <p>${deadline.date}</p>
            <span class="deadline-status ${deadline.status}">${deadline.status}</span>
        </div>
    `).join('');
} 
// Updates Manager - Easy JavaScript integration for UpdatesSection
// This file provides simple functions to manage updates from external scripts

class UpdatesManager {
    constructor() {
        this.updates = [];
        this.callbacks = [];
        this.isInitialized = false;
    }

    // Initialize the manager
    init() {
        if (this.isInitialized) return;

        // Wait for the component to be mounted
        const checkComponent = setInterval(() => {
            if (window.UpdatesSection) {
                this.isInitialized = true;
                clearInterval(checkComponent);
                console.log('UpdatesManager initialized successfully');
            }
        }, 100);

        // Timeout after 10 seconds
        setTimeout(() => {
            if (!this.isInitialized) {
                console.warn('UpdatesSection component not found. Make sure it is mounted.');
                clearInterval(checkComponent);
            }
        }, 10000);
    }

    // Add a new update
    addUpdate(updateData) {
        if (!this.isInitialized) {
            console.warn('UpdatesManager not initialized. Call init() first.');
            return false;
        }

        const newUpdate = {
            title: updateData.title || 'Nueva actualización',
            description: updateData.description || 'Descripción de la actualización',
            category: updateData.category || 'General',
            image: updateData.image || '/images/Wata/Menu-3.PNG',
            isNew: true
        };

        try {
            window.UpdatesSection.addUpdate(newUpdate);
            console.log('Update added successfully:', newUpdate);
            return true;
        } catch (error) {
            console.error('Error adding update:', error);
            return false;
        }
    }

    // Mark an update as read
    markAsRead(updateId) {
        if (!this.isInitialized) {
            console.warn('UpdatesManager not initialized. Call init() first.');
            return false;
        }

        try {
            window.UpdatesSection.markAsRead(updateId);
            console.log('Update marked as read:', updateId);
            return true;
        } catch (error) {
            console.error('Error marking update as read:', error);
            return false;
        }
    }

    // Get all current updates
    getUpdates() {
        if (!this.isInitialized) {
            console.warn('UpdatesManager not initialized. Call init() first.');
            return [];
        }

        try {
            return window.UpdatesSection.getUpdates();
        } catch (error) {
            console.error('Error getting updates:', error);
            return [];
        }
    }

    // Clear all updates
    clearUpdates() {
        if (!this.isInitialized) {
            console.warn('UpdatesManager not initialized. Call init() first.');
            return false;
        }

        try {
            window.UpdatesSection.setUpdates([]);
            console.log('All updates cleared');
            return true;
        } catch (error) {
            console.error('Error clearing updates:', error);
            return false;
        }
    }

    // Add multiple updates at once
    addMultipleUpdates(updatesArray) {
        if (!Array.isArray(updatesArray)) {
            console.error('Updates array must be an array');
            return false;
        }

        let successCount = 0;
        updatesArray.forEach(update => {
            if (this.addUpdate(update)) {
                successCount++;
            }
        });

        console.log(`Added ${successCount} out of ${updatesArray.length} updates`);
        return successCount === updatesArray.length;
    }

    // Update an existing update
    updateExisting(updateId, newData) {
        if (!this.isInitialized) {
            console.warn('UpdatesManager not initialized. Call init() first.');
            return false;
        }

        try {
            const currentUpdates = this.getUpdates();
            const updatedUpdates = currentUpdates.map(update =>
                update.id === updateId ? {...update, ...newData } : update
            );
            window.UpdatesSection.setUpdates(updatedUpdates);
            console.log('Update modified:', updateId);
            return true;
        } catch (error) {
            console.error('Error updating existing update:', error);
            return false;
        }
    }

    // Get updates by category
    getUpdatesByCategory(category) {
        const allUpdates = this.getUpdates();
        return allUpdates.filter(update => update.category === category);
    }

    // Get new updates only
    getNewUpdates() {
        const allUpdates = this.getUpdates();
        return allUpdates.filter(update => update.isNew);
    }

    // Subscribe to updates changes
    onUpdateChange(callback) {
        if (typeof callback === 'function') {
            this.callbacks.push(callback);
        }
    }

    // Notify subscribers
    notifySubscribers(action, data) {
        this.callbacks.forEach(callback => {
            try {
                callback(action, data);
            } catch (error) {
                console.error('Error in update callback:', error);
            }
        });
    }
}

// Create global instance
const updatesManager = new UpdatesManager();

// Auto-initialize when DOM is ready
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            updatesManager.init();
        });
    } else {
        updatesManager.init();
    }
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = updatesManager;
}

// Make available globally
if (typeof window !== 'undefined') {
    window.UpdatesManager = updatesManager;
}

// Example usage functions
window.addGameUpdate = (title, description, category = 'Gameplay') => {
    return updatesManager.addUpdate({
        title,
        description,
        category,
        image: '/images/Wata/Menu-3.PNG'
    });
};

window.addAudioUpdate = (title, description) => {
    return updatesManager.addUpdate({
        title,
        description,
        category: 'Audio',
        image: '/images/Wata/Menu-4.PNG'
    });
};

window.addTechnicalUpdate = (title, description) => {
    return updatesManager.addUpdate({
        title,
        description,
        category: 'Technical',
        image: '/images/Wata/Menu-5.PNG'
    });
};

window.addVisualUpdate = (title, description) => {
    return updatesManager.addUpdate({
        title,
        description,
        category: 'Visual',
        image: '/images/Wata/Menu-6.PNG'
    });
};

// Quick update functions for common scenarios
window.addBugFix = (description) => {
    return updatesManager.addUpdate({
        title: 'Corrección de errores',
        description,
        category: 'Technical',
        image: '/images/Wata/Menu-5.PNG'
    });
};

window.addFeatureUpdate = (title, description) => {
    return updatesManager.addUpdate({
        title,
        description,
        category: 'Gameplay',
        image: '/images/Wata/Menu-3.PNG'
    });
};

export default updatesManager;
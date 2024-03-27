// shared/utils.js

// Example utility function shared between backend and frontend
export const formatDate = (date) => {
  // Implement date formatting logic
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const generateSite = aboutText => {
    if (!aboutText) {
      return '';
    }
  
    return `
      ${aboutText}
    `;
  };


 // export function to generate entire page
module.exports = templateData => {
  // destructure page data by section
  const { projects, about, ...header } = templateData;

  return `
  read me is working
  `;
};
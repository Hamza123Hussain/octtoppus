export function updatePageMetadata(title, description) {
    // Change the page title
    document.title = title;
  
    // Change the meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }
  
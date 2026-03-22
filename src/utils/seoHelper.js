/**
 * SEO Helper Component
 * Use this component to manage meta tags for different pages
 * Install react-helmet-async package first: npm install react-helmet-async
 */

export const updatePageMeta = {
  home: {
    title: "Datta Gayatri Digital Color Labs - Professional Photography & Videography in Tanuku",
    description: "Professional photography and videography services in Tanuku. Capture your precious moments with cinematic quality for weddings, ceremonies, events, and special occasions.",
    keywords: "photography, videography, wedding photography, event photography, Tanuku, professional photographer",
    url: "https://dattagyatri.com/"
  },
  photography: {
    title: "Photo & Videography Services - Datta Gayatri Labs",
    description: "Explore our comprehensive photography and videography services. Specializing in weddings, ceremonies, birthdays, candid photography, and more.",
    keywords: "photography services, videography, wedding photography, event photography, candid photography, cinematography",
    url: "https://dattagyatri.com/photography"
  },
  services: {
    title: "Our Services - Photography & Videography",
    description: "Complete range of photography and videography services for all occasions. From weddings to ceremonies, birthdays to events.",
    keywords: "photography services, videography services, professional photographer",
    url: "https://dattagyatri.com/#services"
  },
  gallery: {
    title: "Photo Gallery - Datta Gayatri Labs",
    description: "View our portfolio of professional photography and videography work.",
    keywords: "photography portfolio, photo gallery, videography portfolio",
    url: "https://dattagyatri.com/#gallery"
  },
  testimonials: {
    title: "Client Testimonials & Reviews - Datta Gayatri Labs",
    description: "See what our clients say about our professional photography and videography services.",
    keywords: "photography reviews, client testimonials, professional photographer reviews",
    url: "https://dattagyatri.com/#testimonials"
  },
  contact: {
    title: "Contact Us - Datta Gayatri Digital Color Labs",
    description: "Get in touch with us for professional photography and videography services in Tanuku. Contact us for bookings and inquiries.",
    keywords: "contact photographer, photography booking, videography services contact",
    url: "https://dattagyatri.com/#contact"
  }
};

/**
 * Service-specific schema markup for structured data
 */
export const serviceSchema = {
  namingCeremony: {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Naming Ceremony Photography",
    "description": "Professional photography for naming ceremonies - capturing this precious milestone",
    "image": "url-to-image"
  },
  wedding: {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Wedding Photography & Videography",
    "description": "Professional cinematic wedding photography and videography services",
    "image": "url-to-image"
  },
  birthday: {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Birthday Photo & Video Services",
    "description": "Professional photography and videography for birthday celebrations",
    "image": "url-to-image"
  }
};

/**
 * Breadcrumb schema for better navigation understanding
 */
export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://dattagyatri.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Photography Services",
      "item": "https://dattagyatri.com/photography"
    }
  ]
};

/**
 * Organization schema markup
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Datta Gayatri Digital Color Labs",
  "alternateName": "Datta Gayatri Labs",
  "url": "https://dattagyatri.com",
  "logo": "https://dattagyatri.com/logo512.png",
  "description": "Professional photography and videography services in Tanuku",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Tanuku",
    "addressLocality": "Tanuku",
    "addressRegion": "Andhra Pradesh",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "telephone": "+91-XXXXXXXXXX"
  },
  "sameAs": [
    "https://www.facebook.com/dattagyatri",
    "https://www.instagram.com/dattagyatri",
    "https://www.youtube.com/dattagyatri"
  ]
};

/**
 * Function to update document title and meta tags manually
 * Use this if not using react-helmet
 */
export const setPageSEO = (pageName) => {
  const page = updatePageMeta[pageName];
  
  if (!page) {
    console.warn(`SEO metadata not found for page: ${pageName}`);
    return;
  }

  // Update title
  document.title = page.title;

  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', page.description);
  } else {
    metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = page.description;
    document.head.appendChild(metaDescription);
  }

  // Update or create meta keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords) {
    metaKeywords.setAttribute('content', page.keywords);
  } else {
    metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = page.keywords;
    document.head.appendChild(metaKeywords);
  }

  // Update canonical tag
  let canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', page.url);
  } else {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = page.url;
    document.head.appendChild(canonical);
  }
};

/**
 * Hook for React - useEffect hook to set page SEO
 * Usage: usePageSEO('photography');
 */
export const usePageSEO = (pageName) => {
  if (typeof window !== 'undefined') {
    setPageSEO(pageName);
  }
};

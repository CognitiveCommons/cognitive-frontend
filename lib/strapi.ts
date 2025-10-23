const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "https://cognitivecommons.ca";

interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export async function fetchAPI<T>(
  path: string,
  options: RequestInit = {}
): Promise<StrapiResponse<T>> {
  const url = `${STRAPI_URL}/api${path}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    next: {
      revalidate: 60, // Revalidate every 60 seconds
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch from Strapi: ${response.statusText}`);
  }

  return response.json();
}

// Courses
export async function getCourses(filters?: Record<string, unknown>) {
  const queryParams = new URLSearchParams();

  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      queryParams.append(`filters[${key}]`, String(value));
    });
  }

  queryParams.append("populate", "*");

  return fetchAPI(`/courses?${queryParams.toString()}`);
}

export async function getCourseBySlug(slug: string) {
  return fetchAPI(`/courses?filters[slug][$eq]=${slug}&populate=*`);
}

// Course Categories
export async function getCourseCategories() {
  return fetchAPI("/course-categories?populate=*");
}

// Blog Posts
export async function getBlogPosts(limit = 10) {
  return fetchAPI(`/blog-posts?populate=*&pagination[limit]=${limit}&sort=publishedAt:desc`);
}

export async function getBlogPostBySlug(slug: string) {
  return fetchAPI(`/blog-posts?filters[slug][$eq]=${slug}&populate=*`);
}

// Team Members
export async function getTeamMembers() {
  return fetchAPI("/team-members?populate=*&sort=order:asc");
}

// Testimonials
export async function getTestimonials() {
  return fetchAPI("/testimonials?populate=*&filters[featured][$eq]=true");
}

// Partners
export async function getPartners() {
  return fetchAPI("/partners?populate=*&sort=order:asc");
}

// FAQs
export async function getFAQs(category?: string) {
  const params = category
    ? `?filters[category][$eq]=${category}&sort=order:asc`
    : "?sort=order:asc";
  return fetchAPI(`/faqs${params}`);
}

// Homepage
export async function getHomepage() {
  return fetchAPI("/homepage?populate=deep");
}

// Helper to get image URL
export function getStrapiImageUrl(imageData: any): string | null {
  if (!imageData) return null;

  const url = imageData.data?.attributes?.url || imageData.url;

  if (!url) return null;

  // If it's already a full URL, return it
  if (url.startsWith("http")) return url;

  // Otherwise prepend Strapi URL
  return `${STRAPI_URL}${url}`;
}

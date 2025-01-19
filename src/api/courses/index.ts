import { BACKEND_API } from "@/src/config/backend";

// GET - api/v1/courses
export const getAllCourses = async () => {
  try {
    const response = await fetch(`${BACKEND_API}/courses`);
    const data = await response.json();
    return data;
  } catch (err) {
    return {
      error: true,
    };
  }
};

// GET - api/v1/courses/:slug
export const getCourseData = async (slug: string) => {
  if (!slug) return { error: true };

  try {
    const response = await fetch(`${BACKEND_API}/courses/${slug}`);
    const data = await response.json();
    return data;
  } catch (err) {
    return {
      error: true,
    };
  }
};

// GET - api/v1/courses/:slug/reviews
export const getCourseReviews = async (slug: string) => {
  if (!slug) return { error: true };

  try {
    const response = await fetch(`${BACKEND_API}/courses/${slug}/reviews`);
    const data = await response.json();
    return data;
  } catch (err) {
    return {
      error: true,
    };
  }
};

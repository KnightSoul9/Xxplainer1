import { getCoursePageInfo } from "@/src/utils/firebase";
import { useEffect, useState } from "react";
import useAuthService from "./useAuthService";

const useCourseAccess = (courseSlug) => {
  // console.log(courseSlug, "use");
  const [hasCourseAccess, setHasCourseAccess] = useState(false);
  const [courseId, setCourseId] = useState(null);

  const { currentUser } = useAuthService();

  useEffect(() => {
    const fetchData = async () => {
      const { hasCourseAccess, courseId } = await getCoursePageInfo({
        userId: currentUser?.uid,
        courseSlug,
      });
      setHasCourseAccess(hasCourseAccess);
      setCourseId(courseId);
    };

    fetchData();
  }, [courseSlug, currentUser?.uid]);

  return {
    hasCourseAccess,
    courseId,
  };
};

export default useCourseAccess;

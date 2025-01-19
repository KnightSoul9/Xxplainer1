import { firestoreDbRef } from "@/src/auth/firebase/Firebase.init";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { freeCourses } from "../config/course-config";

/** Fetch Detail of Single Course  by courseId & userId */
export const fetchCourseDetail = async ({ courseSlug, courseId }) => {
  if (!courseSlug && !courseId) return;

  try {
    let courseData = {};
    let q;
    const coursesRef = collection(firestoreDbRef, "courses");

    if (courseId && !courseSlug) {
      q = query(coursesRef, where("courseID", "==", courseId));
    } else {
      q = query(coursesRef, where("slug", "==", courseSlug));
    }

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (doc.id) {
        courseData = doc.data();
      }
    });

    return courseData;
  } catch (err) {
    throw err;
  }
};

export const validateSubscription = async (userId, courseId) => {
  let hasCourseAccess = false;

  if (!userId || !courseId) return false;

  try {
    const paymentRef = collection(firestoreDbRef, "user_courses");
    const q = query(
      paymentRef,
      where("user_id", "==", userId),
      where("course_id", "==", courseId)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (doc.id) {
        hasCourseAccess = true;
      }
    });

    return hasCourseAccess;
  } catch (err) {
    throw err;
  }
};

/** Course Details Page  */
export const getCoursePageInfo = async ({ userId, courseSlug }) => {
  try {
    const currentCourseData = await fetchCourseDetail({ courseSlug });
    const courseId = currentCourseData?.courseID;

    let hasCourseAccess = false;
    if (userId) {
      hasCourseAccess = await validateSubscription(userId, courseId);
    }

    // TODO - Add course access validation logic here
    if (freeCourses.includes(courseSlug)) {
      hasCourseAccess = true;
    }

    return {
      hasCourseAccess,
      currentCourseData,
      courseId,
    };
  } catch (err) {
    throw err;
  }
};

export const getClientReferenceId = (userID, courseID) => {
  if (userID && courseID) {
    return `${userID}-${courseID}`;
  }
};

export const getUserData = async (uid) => {
  try {
    const docRef = doc(firestoreDbRef, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    }
  } catch (err) {
    // console.log(err)
  }
};

/** Add User to users collection */
export const setUserData = async (user) => {
  if (!user?.uid) return;

  const currentUserData = await getUserData(user.uid);
  if (currentUserData) return;

  // Add a new document in collection "users"
  await setDoc(doc(firestoreDbRef, "users", user?.uid), user);
};

export const getAllCoursesByUserId = async (userId) => {
  try {
    const allCourses = [];

    const userCoursesRef = collection(firestoreDbRef, "user_courses");
    const q = query(userCoursesRef, where("user_id", "==", userId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      allCourses.push(doc.data());
    });

    return allCourses;
  } catch (err) {
    // console.log(err, 'ERR')
  }
};

// export const validateSubscription = async (userId, courseId) => {
//   let hasCourseAccess = false;

//   if (!userId || !courseId) return false;

//   try {
//     const client_ref_id = getClientReferenceId(userId, courseId);
//     const paymentRef = collection(firestoreDbRef, "payments");
//     const q = query(
//       paymentRef,
//       where("client_reference_id", "==", client_ref_id)
//     );
//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((doc) => {
//       if (doc.id) {
//         hasCourseAccess = true;
//       }
//     });

//     return hasCourseAccess;
//   } catch (err) {
//     throw err;
//   }
// };

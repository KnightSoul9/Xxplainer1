import CertificateForm from "@/src/components/v3/Certificate/CertificateForm";
import ProtectedLayout from "@/src/layout/ProtectedLayout";
import { getAuthUserFromCookie } from "@/src/lib/auth";
import { fetchCourseDetail, getAllCoursesByUserId } from "@/src/utils/firebase";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const DynamicCertificate = ({ allCourses }) => {
  const finalCertificate = useRef(null);
  const router = useRouter();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    if (
      allCourses &&
      allCourses.some((course) => course.slug === router.query.slug)
    ) {
      const courseDetail = allCourses.find(
        (course) => course.slug === router.query.slug
      );
      setDetail(courseDetail);
    }
  }, [router.query.slug, allCourses]);

  // console.log(detail);

  return (
    <div>
      <ProtectedLayout>
        <CertificateForm finalCertificate={finalCertificate} detail={detail} />
      </ProtectedLayout>
    </div>
  );
};

export default DynamicCertificate;

export const getServerSideProps = async ({ req, res }) => {
  // fetch cookie
  let user = null;
  let unlockedCourses = [];
  user = getAuthUserFromCookie(req);

  if (!user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const allCourseData = await getAllCoursesByUserId(user.uid);

  if (allCourseData) {
    await Promise.all(
      allCourseData.map(async (course, index) => {
        const courseId = course.course_id;
        //courseID
        const courseDetail = await fetchCourseDetail({ courseId });
        if (courseDetail?.courseID) {
          unlockedCourses.push(courseDetail);
        }
      })
    );
  }

  return {
    props: {
      user: user,
      allCourses: unlockedCourses,
    },
  };
};

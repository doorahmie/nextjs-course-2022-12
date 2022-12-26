// domain.com/news
import { useRouter } from "next/router";

function SomthingDynamicPage() {
  const router = useRouter();
  //   console.log(router.query.newsId);
  const newsId = router.query.newsId;
  console.log({ newsId });

  return <h1>The Something Dynamic Page</h1>;
}

export default SomthingDynamicPage;

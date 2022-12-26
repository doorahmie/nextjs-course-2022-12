// domain.com/news
import Link from "next/link";
import { Fragment } from "react";
function NewsPage() {
  return (
    /**
     * a 태그로 페이지 이동을 할 시,
     * spa의 장점을 모두 잃는다.
     * 새로운 페이지를 서버에 요청하는 것이기 때문이다.
     *
     * 또한 편한 예시를 들기 위해 li 태그를 하드코딩으로 작성했으나,
     * 이런 부분이 대표적으로 서버에서 불러오는 부분임을 기재한다.
     *
     */
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>NextJS IS A Great Framework</li>
        <Link href="/news/something-important">Something Important</Link>
        <li>Something else </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;

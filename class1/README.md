https://react.dev/learn/describing-the-ui

## 기록

<hr>

<h3><strong>export default</strong></h3>

App.js 파일에서

`export default function Gallery` 형태로 코드를 작성하고

index.js 에서

`import App from "./App";` 형태로 import 한 뒤에

App 키워드를 사용해도 정상적으로 코드가 작동되었다.

`export default` 는 파일당 하나만 존재할 수 있어서 어떤 개체를 가져올지 명확히 알 수 있기 때문에 이름이 중요하지 않다고 한다.

즉, import 할때는 이름을 마음대로 지을 수 있는 것 같다.

그러나 혼란을 방지하고 코드의 일관성을 유지하기 위해, 파일 이름과 동일한 이름을 사용하도록 하는게 좋은 것 같다.

<hr>

<h3><strong>Fragment 태그를 명시해야 할 때</strong></h3>

"<></>" 구문 대신에 Fragment를 정확히 써야하는 상황이 존재한다
반복문으로 여러 요소를 렌더링할 때, 각 요소에 key를 부여해야한다
만약 Fragment들을 순회한다면, key 속성을 넣기 위해서 일반적인 JSX 요소 구문으로 사용해야한다.

```jsx
import { Fragment } from "react";

function Blog() {
  return posts.map((post) => (
    <Fragment key={post.id}>
      <PostTitle title={post.title} />
      <PostBody body={post.body} />
    </Fragment>
  ));
}
```

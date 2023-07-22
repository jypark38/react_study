https://react.dev/learn/describing-the-ui

## 기록

### export default

App.js 파일에서

`export default function Gallery` 형태로 코드를 작성하고

index.js 에서

`import App from "./App";` 형태로 import 한 뒤에

App 키워드를 사용해도 정상적으로 코드가 작동되었다.

-> `export default` 는 파일당 하나만 존재할 수 있어서 어떤 개체를 가져올지 명확히 알 수 있기 때문에 이름이 중요하지 않다고 한다.

즉, import 할때는 이름을 마음대로 지을 수 있는 것 같다.

그러나 혼란을 방지하고 코드의 일관성을 유지하기 위해, 파일 이름과 동일한 이름을 사용하도록 하는게 좋은 것 같다.

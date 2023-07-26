/* @jsx createElement */
// 위 지시어를 넣으면 바벨이 컴파일할때 리액트라는 단어를 붙이지 않게 바뀐다
import {createElement, render} from "./react.js"

function Title(){
    return (
        <div>
            <h1 className="title">Hello react title</h1>
            <strong>gooooood!!!</strong>
        </div>
    )
}

console.log(Title())

render(<Title className="title"/>, document.querySelector("#root"))
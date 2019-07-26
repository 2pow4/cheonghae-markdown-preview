import React, { Component } from "react";
import Editor from "../Editor";
import Preview from "../Preview";
import "./index.css";

// 마크다운 에디터를 품고있는 메인 컴포넌트
class App extends Component {
    // 리액트 컴포넌트의 state
    state = {
        editor: "" // 관리되는 데이터인 editor.
    }

    componentWillMount() {

        if (window.localStorage.content) {
            this.setState({
                editor: window.localStorage.content  // 해당 데이터를 컴포넌트의 editor에 저장합니다.
            })
        }
    }

    // Editor 컴포넌트에 제공되는 메소드
    handleEditorInput(e) {
        this.setState({ editor: e.target.value }); // 사용자 입력값에 접근하여 해당 데이터를 App 컴포넌트의 state에 저장합니다.
        window.localStorage.setItem("content", e.target.value); // 또한 해당 데이터를 브라우저에 저장합니다. 브라우저 탭을 닫았다가 다시 켜도 내용이 사라지지 않기 위함입니다.
    }

    render() {
        return (
            <div className="app">
                <Header
                    title={"mark down editor!"}
                />
                <div className="editor-group">
                    <Editor
                        onInputChange={(e) => this.handleEditorInput(e)} // 메소드 제공
                        editorValue={this.state.editor} // 값 제공
                    />
                    <Preview
                        inputValue={this.state.editor} // 값 제공
                    />
                </div>
            </div>
        );
    }
}

export default App;

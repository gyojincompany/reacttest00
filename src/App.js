
import { Component, Fragment } from 'react';
import Navi1 from './Navi1';
import Content from './content/Content';
import './App.css';

// class Navi1 extends Component {
//   render(){
//     return(
//       <nav>
//         <h2>리액트 기본문법</h2>
//         <h2>리액트 컴포넌트 만들기</h2>
//         <h2>리액트 JSX 배우기</h2>
//       </nav>
//     );
//   }
// }

class Navi2 extends Component {
  render(){
    return(
      <nav>
        <ul>
          <li><a href='http://reactjs.org'><h2>리액트 props</h2></a></li>
          <li><h2>리액트 state</h2></li>
          <li><h2>리액트 create</h2></li>
        </ul>
      </nav>
    );
  }
}

// class Content extends Component {
//   render(){
//     return(
//       <article>
//         <h2>React</h2>
//         React! 최고의 프론트 도구
//       </article>
//     );
//   }
// }

class App extends Component {
  render() {
  return (
    <Fragment>
    <header className='App'>
      react를 배워 봅시다!!
      <Content></Content>
      <Navi1></Navi1>
      <Navi2></Navi2>
    </header>
    <Content></Content>
    </Fragment>
  );
}
}

export default App;

import * as React from "react";
import { Location } from "./typeExports";

window.setTimeout(() => {});
global.setTimeout(() => {});
(test as any).setTimeout();

class User extends React.Component {
  private handleClick = () => {
    const getUrl = () => {
        return "test123";
    }
 
    window.location.assign("testeter");
    window.location.assign(getUrl());

    window.top.location.assign(`test123`);
    location.assign("test123");

    const { location: test } = window;
    test.assign("test123");
    const test2 = (l: NodeJS.Timeout) => {}
    test2(setTimeout(() => {}));
    setTimeout(() => {}, 100);
    setInterval(() => {});

    (tst: Location) => {
      tst.href = "test";
      const handle = setTimeout(() => {});
    }

  };

  private handleClickNotPrivate = () => {
    class Wow {
      wow = () => {
        
      }
    }
  }

  private handleClickNotPrivate2 = function() {

  }

  handleClickNotPrivate3 = 1;

  private handleClickNotPrivate4() {

  }

  render() {
    return (
      <button data-testid="redirect" onClick={this.handleClick}>
        Redirect
      </button>
    );
  }
}

class TestComponent extends React.Component {
  state = {};
  static defaultProps = { }
  constructor(props) { super(props) }
  static getDerivedStateFromProps(props, state) {}
  componentDidMount() {}
  componentWillUnmount() {}
  shouldComponentUpdate() { return true }
  getSnapshotBeforeUpdate() {}
  componentDidUpdate() {}
  render() { return <></>}
}

export { User };

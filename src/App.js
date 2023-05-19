// @flow
// import logo from "./logo.svg";
import "./App.css";
import Jsx from "./components/Jsx";
import { Component } from "react";
import { FunctionComponent } from "./components/FunctionComponents";
import { ClassComponent } from "./components/ClassComponent";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import ConditionalRendering from "./components/ConditionalRendering";
import ListRendering from "./components/ListRendering";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FRParentInput from "./components/FRParentInput";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import HoverCounter from "./components/HoverCounter";
import PortalDemo from "./components/PortalDemo";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import CounterOne from "./components/CounterOne";
import { UserProvider } from "./components/userContext";

// function App() {
//   return (
//    <Jsx />
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <FunctionComponent name="Bruce" heroName="abc">
          <p>This is children prop</p>
        </FunctionComponent>
        <FunctionComponent name="Clark" heroName="def">
          <button>Action</button>
        </FunctionComponent>
        <FunctionComponent name="Diana" heroName="ghi" />

        <ClassComponent name="Bruce" heroName="abc"></ClassComponent>
        <ClassComponent name="Clark" heroName="def"></ClassComponent>
        <ClassComponent name="Diana" heroName="ghi"></ClassComponent>

        <Message></Message>

        <Counter />

        <FunctionClick></FunctionClick>

        <ClassClick></ClassClick>

        <ParentComponent />

        <ConditionalRendering />

        <ListRendering />

        <Stylesheet primary={false} />

        <Inline />

        <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1>

        <Form />

        <LifeCycleA />

        <PureComp />

        <RefsDemo />

        <FRParentInput />

        <ErrorBoundary>
          {/* Instead of wrapping all the elements in Errorboundary, we will separately wrap the components so that first two components are displayed */}
          <Hero heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary>

        <ClickCounter name="Abc" />
        <HoverCounter />

        <PortalDemo />

        <ClickCounterTwo />
        <HoverCounterTwo />
        {/* <User name="Hello" /> */}
        <User name={(isLoggedIn) => (isLoggedIn ? "Hello" : "Guest")} />

        <CounterOne
          render={(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        />
        <CounterOne
          render={(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        />

        <UserProvider value="Abcde">
          <ComponentC />
        </UserProvider>

      </div>
    );
  }
}

export default App;

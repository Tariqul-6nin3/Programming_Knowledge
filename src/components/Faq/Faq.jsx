import React from "react";

const Faq = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
          <h3>Difference between Props and State in React</h3>
        </div>
        <div className="collapse-content ">
          <p tabIndex={0} className="px-8">
            <strong className="text-2xl font-bold italic font-mono">
              Props:
            </strong>
            <br />
            Props (short for properties) are a way to pass data from a parent
            component to a child component. They are read-only and cannot be
            modified by the child component. Props are used to customize the
            behavior or appearance of a component based on the needs of the
            parent component. Props are passed down to the child component as a
            set of key-value pairs and can include any JavaScript data type.{" "}
            <br />
            <br />
            <strong className="text-2xl font-bold italic font-mono">
              State:
            </strong>
            <br />
            State, on the other hand, is used to manage the internal state of a
            component. It is mutable and can be changed by the component itself.
            State is used to keep track of data that might change during the
            component's lifecycle, such as user input, user interactions, or
            data fetched from an API. State is initialized in the constructor of
            a class component or using the useState hook in a functional
            component.
          </p>
          <p className="mt-3 px-3">
            In summary, props are used to pass data down from a parent component
            to a child component, while state is used to manage data within a
            component. Props are read-only and cannot be changed by the child
            component, while state is mutable and can be changed by the
            component itself.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
          <h3>What is useState? How does it works?</h3>
        </div>
        <div className="collapse-content ">
          <p tabIndex={0} className="px-8 py-3">
            <strong className="text-2xl font-bold italic font-mono">
              Definition of useState:
            </strong>{" "}
            <br />
            useState is a built-in hook in React that allows functional
            components to have stateful logic. It is used to declare a state
            variable and returns an array with two elements: the first element
            is the current state value, and the second element is a function
            that can be used to update the state. <br />
            <br />
            <strong className="text-2xl font-bold italic font-mono">
              Function of useState:
            </strong>
            <br />
            <li>
              useState is a built-in hook function in React that allows
              functional components to have stateful logic. It works by
              returning an array with two values: the current state value and a
              function that can be used to update the state.
            </li>
            <li>
              When you call useState, you pass in the initial value of your
              state variable. React will then return an array with two elements:
              the current state value, and a function that can be used to update
              the state value.
            </li>
            <li>
              Whenever you want to update the state value, you call the function
              that React returned from useState. This function will then update
              the state value, and trigger a re-render of your component with
              the new state value.
            </li>
            <li>
              Using useState, you can manage any kind of state in your
              component, like input fields, checkboxes, or even complex objects.
              Just remember to always use the function that React returned to
              update the state value, rather than changing it directly. This
              ensures that React knows when to trigger a re-render of your
              component.
            </li>
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
          <h3>Write down the purpose of useEffect other than fetching data?</h3>
        </div>
        <div className="collapse-content ">
          <p tabIndex={0} className="px-8 py-3">
            <strong className="text-2xl font-bold italic font-mono">
              Definition of useEffect:
            </strong>{" "}
            <br />
            useEffect is a built-in hook in React that allows you to run side
            effects in your functional components. A side effect is any
            operation that affects something outside the scope of your
            component, like updating the browser document title or setting up an
            event listener. <br /> <br />
            <strong className="text-2xl font-bold italic font-mono">
              Here are some common use cases for useEffect other than fetching
              data:
            </strong>
            <br />
            <li>
              Updating the document title: You can use useEffect to update the
              title of your browser document based on the state of your
              component. For example, you might update the title to show the
              name of the currently selected item in a list.
            </li>
            <li>
              Setting up event listeners: You can use useEffect to set up event
              listeners for various browser events, like mouse clicks or key
              presses. This allows you to respond to user interactions and
              update the state of your component accordingly.
            </li>
            <li>
              Managing timers and intervals: You can use useEffect to manage
              timers and intervals in your component. This allows you to perform
              periodic updates or animations based on the state of your
              component.
            </li>
            <li>
              Cleaning up resources: You can use useEffect to clean up any
              resources that your component has created, like event listeners or
              timers. This ensures that your component is properly cleaned up
              when it is removed from the page.
            </li>
            <li>
              Optimizing performance: You can use useEffect to optimize the
              performance of your component by only running certain effects when
              certain dependencies change. This can help you avoid unnecessary
              re-renders and keep your application running smoothly.
            </li>
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
          <h3>How does React work?</h3>
        </div>
        <div className="collapse-content ">
          <p tabIndex={0} className="px-8 py-3">
            <strong className="text-2xl font-bold italic font-mono">
              Functionality of React:
            </strong>
            <br /> <br />
            React is a JavaScript library that uses a virtual representation of
            the DOM called the Virtual DOM to update the real DOM in response to
            changes in your application's state. To build your user interface,
            you define reusable components as JavaScript functions that return a
            description of the UI they render. You can then render these
            components by calling them like a regular function and passing in
            any necessary props. When the state of your component changes, React
            updates the Virtual DOM to reflect the new state. It then calculates
            the minimum number of changes necessary to update the real DOM, a
            process known as reconciliation. Once the changes to the Virtual DOM
            have been calculated, React updates the real DOM to reflect the new
            state of your component. React makes it easier to reason about your
            application's behavior and performance by abstracting away the
            low-level details of the DOM. This allows you to focus on building
            great user experiences and building complex user interfaces in a
            declarative and efficient way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;

import React from "react";
import { Button, Container } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="p-5 bg-dark">
      <div>
      <p className="text-warning bg-white text-center fs-3 mb-5 fw-bold">Most Important Question for A Web Developer in Web Developer Job Interview</p>
        
       <h4 className="fw-bold text-warning">
          1.Tell us the differences between uncontrolled and controlled
          components?
        </h4>
        <p>
          <span className="fw-bold text-warning fs-4">Answer: <br></br></span>
          <span className="fw-bold fs-5 text-white">
          <span className="fs-3">Controlled components :</span> Controlled components are components whose value is directed/driveny React’s state. By state, we mean the state we store inside aReact component, i.e., inside this.state or with useState. Thismeans that these components will receive the latest changes. For any controlled component, we pass our state variable inside the value prop of the component. The function that changes this state variable of the component is passed in the onChange prop of the controlled component.<br></br><br></br>
            <span className="fs-3">uncontrolled components :</span> As the name suggests, the value of uncontrolled components is not driven by the React component’s state variable. It's completely controlled by the DOM Uncontrolled components are generally used when the use case is simple or the action is not trackable; for example, a user uploading a file using file input.

          </span>
        </p>
      </div>
      <div>
        <h4 className="fw-bold text-warning">
          2.How to validate React props using PropTypes?
        </h4>
        <p>
          <span className="fw-bold text-warning fs-4">Answer: <br></br></span>
          <span className="fw-bold fs-5 text-white">
          Props or “Properties” are read-only components, that gives a way to pass data from one component to other components. It is an immutable object that works similarly to the HTML attributes. The props cannot be modified from inside the component as they are immutable. Thus, it is required to use props validation to make code more readable and to avoid future bugs and problems. Prop validation is a tool that si used to force the correct usage of the components. App.propTypes is used for props validation. It is used to get the warnings on JavaScript console, if the props are passed with an invalid type.
          </span>
        </p>
      </div>
      <div>
       <h4 className="fw-bold text-warning">
          3.Tell us the difference between nodejs and express js.
        </h4>
        <p>
          <span className="fw-bold text-warning fs-4">Answer: <br></br></span>
          <span className="fw-bold fs-5 text-white">
          <span className="fs-3">Node.js :</span> The majority of front-end developers have a decent handle over JavaScript as it is one of the most well-known programming languages.It becomes very easy for developers to use Node.js at the backend. Learning Node.js is simpler and takes less time to work on.Node.js takes the code of JavaScript via Google’s V8 JavaScript engine. The main advantage of this process is that it complies with the JavaScript code directly into the machine code which makes it easier to implement the code effectively.controlled component.<br></br><br></br>
            <span className="fs-3">Express.js :</span> It’s a web system that allows you to structure a web application to deal with various diverse HTTP demands at a particular URL.Express is a minimal, open-source, and adaptable Node.js web application system intended to make creating sites, web applications, and API’s a lot simpler.It allows you to respond to requests with route support so that you can write the responses to specific URLs. To simply generate HTML, Express.js supports many templating engines. The key element of Express.js is that it is very simple and is open-source.

          </span>
        </p>
      </div>
      <div>
       <h4 className="fw-bold text-warning">
          4.What is a custom hook, and why will you create a custom hook?
        </h4>
         <span className="fw-bold text-warning fs-4">Answer: <br></br></span>
          <p className="fw-bold fs-5 text-white">
          The main reason to write a custom hook is for code reusability. For example, instead of writing the same code across multiple components that use the same common stateful logic (say a “setState” or localStorage logic), you can put that code inside a custom hook and reuse it.I want to use the data that Strava provides for my run workouts in my third-party application. Through the Strava API I can get activity info like route map, distance, achievements, and any other info that Strava provides. Let’s say I have a component that displays my past 10 activities.
        </p>
      </div>
      <p className="text-center mt-5"><Button className="fw-bold py-3 px-3 text-white fw-bold" variant="outline-warning">React-To-PDF</Button></p>
    </div>
  );
};

export default Blog;

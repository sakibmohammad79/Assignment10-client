import React from "react";
import { Container } from "react-bootstrap";

const Blog = () => {
  return (
    <Container className="my-5"> 
      <div>
        <h3 className="fw-bold text-warning">
          1.Tell us the differences between uncontrolled and controlled
          components?
        </h3>
        <p>
          <span className="fw-bold text-warning fs-3">Answer:</span>{" "}
          <span className="fw-bold fs-4">
            Tell us the differences between uncontrolled and controlled
            components. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatem impedit eligendi sit mollitia laborum eos aperiam. Voluptatibus vel accusantium iusto fugit corporis nam rerum, nesciunt soluta necessitatibus ut qui facilis velit ea repudiandae sit sint aliquam error quia doloremque!
          </span>
        </p>
      </div>
      <div>
        <h3 className="fw-bold text-warning">
          2.How to validate React props using PropTypes?
        </h3>
        <p>
          <span className="fw-bold text-warning fs-3">Answer:</span>{" "}
          <span className="fw-bold fs-4">
            Tell us the differences between uncontrolled and controlled
            components.
          </span>
        </p>
      </div>
      <div>
        <h3 className="fw-bold text-warning">
          3.Tell us the difference between nodejs and express js.
        </h3>
        <p>
          <span className="fw-bold text-warning fs-3">Answer:</span>{" "}
          <span className="fw-bold fs-4">
            Tell us the differences between uncontrolled and controlled
            components.
          </span>
        </p>
      </div>
      <div>
        <h3 className="fw-bold text-warning">
          4.What is a custom hook, and why will you create a custom hook?
        </h3>
        <p>
          <span className="fw-bold text-warning fs-3">Answer:</span>{" "}
          <span className="fw-bold fs-4">
            Tell us the differences between uncontrolled and controlled
            components.
          </span>
        </p>
      </div>
    </Container>
  );
};

export default Blog;

import { Container } from "react-bootstrap";

export default function NotFound() {
  return (
    <Container>
      <p className="text-dark text-center fs-2 mt-5">
        <span className="fw-bold">Esta página no existe </span>
        <img
          style={{ width: "30%" }}
          src="https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg"
          alt="No existe"
        />
      </p>
    </Container>
  );
}

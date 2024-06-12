import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;

  &:hover {
    background-color: #bf4f74;
    color: #bf4f74;
  }
`;

export default function Home() {
  return (
    <header>
      <nav>
        <div>
          <img src="" alt="" />
        </div>
        <ul>
          <li>
            <a href="">home</a>
          </li>
          <li>
            <a href="">profiles</a>
          </li>
          <Button>logout</Button>
        </ul>
      </nav>
    </header>
  );
}

import { createContext, useContext, useState } from "react";
import { Link } from "react-router";
import styled from "styled-components";
import "./App.css";

const DivHome = styled.div`
  background-color: ${(props) =>
    props.theme === true ? "#121212" : "#f4f5f7"};
  padding: 30px;
  border-radius: 16px;
  max-width: 800px;
  margin: 20px auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  h1 {
    color: ${(props) => (props.theme === true ? "#ffffff" : "#1e293b")};
    font-size: 24px;
    margin-bottom: 8px;
  }

  h3 {
    color: ${(props) => (props.theme === true ? "#94a3b8" : "#64748b")};
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px;
  }
`;

const DivNimalarQilishi = styled.div`
  display: flex;
  justify-content: center;
`;

const DivNimaQilishi1 = styled.div`
  background-color: ${(props) => (props.theme === true ? "#1e1e1e" : "white")};
  padding: 25px;
  border: 1px solid ${(props) => (props.theme === true ? "#334155" : "#e2e8f0")};
  border-radius: 12px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  h2 {
    color: ${(props) => (props.theme === true ? "#f8fafc" : "#0f172a")};
    font-size: 20px;
    margin-bottom: 12px;
    line-height: 1.4;
  }

  p {
    color: ${(props) => (props.theme === true ? "#cbd5e1" : "#475569")};
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    transform: translateY(-4px);
    border-color: #3b82f6;
  }
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Li = styled.li`
  list-style: none;
  color: ${(props) => (props.theme === true ? "#cbd5e1" : "#334155")};
  font-size: 14.5px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

function App() {
  const [theme, setTheme] = useState(false);
  document.title = "Qaydlar ilovasi | Bosh sahifa";
  return (
    <div>
      <DivHome theme={theme}>
        <Link
          style={{ color: theme === false ? "black" : "white" }}
          to="/notes"
        >
          Qaydlar sahifasiga o'tish
        </Link>
        <div>
          <h1>Salom mening ilovamga xush kelibsiz !</h1>
          <button onClick={() => setTheme((prev) => !prev)}>
            {theme === false ? (
              <i className="fa-solid fa-moon"></i>
            ) : (
              <i className="fa-solid fa-sun"></i>
            )}
          </button>
        </div>
        <h3>Bu ilovada nimalar qilsa bo'ladi: </h3>
        <DivNimalarQilishi theme={theme}>
          <DivNimaQilishi1 theme={theme}>
            <h2>
              📝 Qaytlar ilovasi — Aqlli <br /> Eslatmalar Ilovasi
            </h2>
            <p>
              Bu ilova sizga kunlik rejalaringizni, <br /> dars va shaxsiy
              qaydlaringizni <br /> tartibli saqlashga yordam beradi.
            </p>
            <Ul theme={theme}>
              <Li theme={theme}>
                📌 Qaydlarni toifalar (Dars, Shaxsiy, Rejalar) bo'yicha ajratish
              </Li>
              <Li theme={theme}>
                🔍 Kerakli toifadagi eslatmalarni tezkor filtrlash
              </Li>
              <Li theme={theme}>
                💾 Ma'lumotlarni brauzer xotirasida (localStorage) avtomatik
                saqlash
              </Li>
              <Li theme={theme}>
                📖 Har bir eslatmani alohida sahifada to'liq o'qish va o'chirish
              </Li>
            </Ul>
          </DivNimaQilishi1>
        </DivNimalarQilishi>
      </DivHome>
    </div>
  );
}

export default App;

import ApodForm from "./components/ApodForm";

const App: React.FC = () => {
  return (
    <>
      <main className="main-container">
        <h1>NASA APOD API</h1>
        <ApodForm></ApodForm>
      </main>
    </>
  );
};

export default App;

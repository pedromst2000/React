import Cars from "./Components/Cars";
import Profile from "./Components/profile";

export default function App() {
  const profiles = [
    { id: 1, name: "Pedro Teixeira", profession: "Front Developer", age: 25 },
    { id: 2, name: "Rita Silva", profession: "UX designer", age: 22 },
    {
      id: 3,
      name: "Ricardo Teixeira",
      profession: "Full Stack Developer",
      age: 29,
    },
  ];

  const cars = [
    { id: 1, brand: "BMW" },
    { id: 2, brand: "Mercedes" },
    { id: 3, brand: "Audi" },
  ];

  return (
    <div className="container-app">
      <div className="profile-container">
        <h1>Profiles</h1>

        {profiles.map((profile) => (
          <Profile
            key={profile.id}
            name={profile.name}
            profession={profile.profession}
            age={profile.age}
          />
        ))}
      </div>
      <div className="cars-container">
        <h1>Cars</h1>
        <ul>
          {cars.map((car) => (
            <Cars key={car.id} brand={car.brand} />
          ))}
        </ul>
      </div>
    </div>
  );
}

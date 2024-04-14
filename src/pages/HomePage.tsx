import { NavLink } from 'react-router-dom';

export default function HomePage() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        React. Contexts and reducers
      </h1>
      <ul>
        <li>
          <NavLink to="/tasks-list">01. Tasks list</NavLink>
        </li>
      </ul>
    </main>
  );
}

import React from "react";

export default function ListDemo() {
  let skills = [
    { name: "angular", id: 1 },
    { name: "react", id: 2 },
    { name: "vue", id: 3 }
  ];

  let hotSkills = ['react', 'angular']

  return (
    <div>
      {skills.map(s => (
        <li key={s.id}>
          ID: {s.id}, Name: {s.name} {hotSkills.includes(s.name) && ("Hot Skill")}
        </li>
      ))}
    </div>
  );
}

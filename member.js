function skillsMember() {
  const member = this;
  const skills = [];
  member.skills.forEach((skill) => {
    skills.push(skill.name);
  });
  return skills;
}
export const getTextExperience = (experience: number) => {
  switch (experience) {
    case 1:
      return `Стаж ${experience} год`;
    case 2:
    case 3:
    case 4:
      return `Стаж ${experience} года`;
    default:
      return `Стаж ${experience} лет`;
  }
};

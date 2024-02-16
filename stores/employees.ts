import { defineStore } from "pinia";
import type { EmployeeState } from "../types/employee";

const state = (): EmployeeState => ({
  employees: [
    {
      id: "0",
      name: "Luiza",
      description: "Fazer parte do time da Logcomex é um privilégio e principalmente uma realização, pois a empresa proporciona o trabalho em equipe de forma integrada e prezando os valores de respeito lealdade, generosidade, empatia e transparência.",
      role: "Finance",
      photo: "https://assets-global.website-files.com/5e7b99a162211f50391ae211/65ca1f367c28fed1c2242234_Luiza.png",
    },
    {
      id: "1",
      name: "Lucas Mansur",
      description: "Trabalhar na LogComex é atingir o máximo do seu potencial. É extremamente gratificante ver que meu trabalho faz parte da construção de algo gigantesco.",
      role: "Frontend Developer",
      photo: "https://assets-global.website-files.com/5e7b99a162211f50391ae211/65ca1f363561297361e0abc7_Lucas%20Mansur.png",
    },
    {
      id: "2",
      name: "Nickelson",
      description: "Posso dizer que é uma empresa onde eu posso ser eu. Contribuir e agregar muito com minhas habilidades e características não só profissionais, mas também pessoais.",
      role: "Frontend Developer",
      photo: "https://assets-global.website-files.com/5e7b99a162211f50391ae211/65ca1f36dbac80974691dc0f_Nickelson.png",
    },
    {
      id: "3",
      name: "Larissa Andrade",
      description: "Trabalhar na Logcomex, pra mim, foi a melhor oportunidade que tive na minha vida. A cada dia que passa, aprendo algo novo e alcanço sonhos. Ser uma Logger me ensinou a amar o que eu faço e ter zelo pela empresa que trabalho.",
      role: "Frontend Developer",
      photo: "https://assets-global.website-files.com/5e7b99a162211f50391ae211/6400980b10a9c9484775d2aa_lary.png",
    },
    {
      id: "4",
      name: "Arllon Dias",
      description:
        "Aqui sinto que somos primeiramente tratados como pessoas e isso faz com que eu consiga equilibrar muito bem minha vida pessoal com a profissional, deixando minha jornada mais leve e produtiva.",
      role: "Backend Developer",
      photo: "https://assets-global.website-files.com/5e7b99a162211f50391ae211/64009809466902a2030db9ed_arllon.png",
    },
  ],
});

const getters = {
  getById: (state: EmployeeState) => (id: string) => {
    return state.employees.find((item) => item.id === id);
  },
};

export const useEmployeesStore = defineStore("employees", {
  state,
  getters,
});

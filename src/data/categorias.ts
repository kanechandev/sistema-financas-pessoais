import { Categoria } from '../types/Categoria';

export const categorias: Categoria = {
    alimentacao: { title: 'Alimentação', color: 'red', despesa: true },
    conta: { title: 'Conta', color: 'yellow', despesa: true },
    salario: { title: 'Salário', color: 'green', despesa: false },
}
import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('items').insert([
        { title: "Lâmpadas", image: 'lampadas.svg' },
        { title: "Pilhas e Baterias", image: 'baterias.svg' },
        { title: "Pápeis e Papelão", image: 'papei-papelao.svg' },
        { title: "Resíduos eletrônicos", image: 'eletronicos.svg' },
        { title: "Resíduos orgânicos", image: 'organicos.svg' },
        { title: "Óleo de cozinha", image: 'oleo.svg' },

    ]);
}
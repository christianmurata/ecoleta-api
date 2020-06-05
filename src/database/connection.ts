import knex from 'knex';
import path from 'path';

/**
 * conexao com o banco de dados Ecoleta
 * 
 * @tables
 * items - item pra a coleta
 *  image
 *  title
 * points - pontos de coleta (local)
 *  image
 *  name
 *  email
 *  whatsapp
 *  latitude
 *  longitude
 *  city
 *  uf
 * point_item - relacionamento dos itens que um ponto coleta
 *  id_item
 *  id_points
 */
const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
});

export default connection;
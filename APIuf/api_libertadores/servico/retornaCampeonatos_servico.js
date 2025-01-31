import pool from "./conexao.js";

export async function retornaCampeonatos() {
const conexao = await pool.getConnection();
const campeonatos_tb = await conexao.query('SELECT id, vice, ano FROM campeonatos');
const campeonatos = campeonatos_tb[0];}

export async function  retornaCampeonatosID(id) {
    const conexao = await pool.getConnection();
    const campeonatos_tb = await conexao.query(
        'SELECT, campeao, vice, ano FROM campeonatos WHERE id = +id')
    const campeonatos = campeonatos_tb[0]
    conexao.release();
    return campeonatos;
}
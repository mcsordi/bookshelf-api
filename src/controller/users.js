import { modelMysql } from "../model/index.js";
export class controllerUsers {
  postUser(req, res) {
    const body = req.body
    const sql = `insert into users set ?`
    const errorMessage = `Não foi possivel criar o usuário`
    modelMysql(res, sql, body, errorMessage)
  }
  getUsers(res) {
    const sql = `select * from users`
    const errorMessage = `não foi possivel criar tabela usuários`
    return modelMysql(res, sql, errorMessage)

  }
  getUserById(req, res) {
    const id = req.params.id
    const sql = `select * from users where idUser = ${id}`
    const errorMessage = `Não foi possivel consultar usuário`
    modelMysql(res, sql, errorMessage)
  }
  updateUser(req, res) {
    const body = req.body
    const id = req.params.id
    const sql = `update users set ? where idUser = ${id}`
    const errorMessage = `Não foi possivel atualizar o usuário`
    modelMysql(res, sql, body, errorMessage)
  }
  deleteUser(req, res) {
    const body = req.body
    const id = req.params.id
    const sql = `delete from users where idUser = ${id}`
    const errorMessage = `Não foi possivel excluir o usuário`
    modelMysql(res, sql, body, errorMessage)
  }

}


import { modelMysql } from "../model/index.js";
export class controllerUsers {

  getUsers(sql, res) {
    const errorMessage = `não foi possivel criar tabela usuários`
    return modelMysql(res, sql, errorMessage)

  }
  async postUser(req, res) {
    const body = req.body
    const email = req.body.email
    const sql = `insert into users set ?`
    const getEmails = `select * from users where email = '${email}'`
    const repeatedUSer = await modelMysql(res, getEmails)
    if (repeatedUSer.statusCode == 200) {
      return
    }
    modelMysql(res, sql, body)
  }
  getUserById(req, res) {
    const id = req.params.id
    const sql = `select * from users where idUser = ${id}`

    modelMysql(res, sql)
  }
  updateUser(req, res) {
    const body = req.body
    const id = req.params.id
    const sql = `update users set ? where idUser = ${id}`
    modelMysql(res, sql, body)
  }
  deleteUser(req, res) {
    const body = req.body
    const id = req.params.id
    const sql = `delete from users where idUser = ${id}`
    modelMysql(res, sql, body)
  }

}


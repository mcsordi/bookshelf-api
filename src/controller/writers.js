import { modelMysql } from "../model/index.js"

export class controllerWriters {
  postWriter(req, res) {
    const sql = "insert into writer set ?"
    const body = req.body
    const error = "Erro ao adicionar escritor"
    return modelMysql(res, sql, body, error)
  }
  getWriterById(req, res) {
    const id = req.params.id
    const sql = `select * from writer where writerId = ${id}`
    const error = `Erro ao consultar escritor`
    return modelMysql(res, sql, error)
  }
  getWriter(res) {
    const sql = `select * from writer`
    const error = `Erro ao consultar escritor`
    return modelMysql(res, sql, error)
  }
  updateWriter(req, res) {
    const id = req.params.id
    const body = req.body
    const sql = `update writer SET ? where writerId = ${id}`
    const error = 'Erro ao atualizar informações do escritor'
    modelMysql(res, sql, body, error)
  }
  deleteWriter(req, res) {
    const id = req.params.id
    const sql = `delete from writer where writerId = ${id}`
    const error = `Erro ao deletar escritor`
    return modelMysql(res, sql, error)
  }
}
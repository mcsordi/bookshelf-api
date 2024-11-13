import { modelMysql } from "../model/index.js"

export class controllerWriters {
  postWriter(req, res) {
    const sql = "insert into writer set ?"
    const body = req.body
    return modelMysql(res, sql, body)
  }
  getWriterById(req, res) {
    const id = req.params.id
    const sql = `select * from writer where writerId = ${id}`
    return modelMysql(res, sql)
  }
  getWriter(res) {
    const sql = `select * from writer`
    return modelMysql(res, sql)
  }
  updateWriter(req, res) {
    const id = req.params.id
    const body = req.body
    const sql = `update writer SET ? where writerId = ${id}`
    modelMysql(res, sql, body)
  }
  deleteWriter(req, res) {
    const id = req.params.id
    const sql = `delete from writer where writerId = ${id}`
    return modelMysql(res, sql)
  }
}
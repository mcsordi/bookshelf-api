import { modelMysql } from "../model/index.js"

export class controllerBooks {
  postBook(req, res) {
    const sql = "insert into bookshelf set ?"
    const body = req.body
    return modelMysql(res, sql, body)
  }
  getAllBooks(res) {
    const sql = "select * from bookshelf"
    return modelMysql(res, sql)
  }
  getById(req, res) {
    const id = req.params.id
    const sql = `select * from bookshelf where id = ${id}`
    return modelMysql(res, sql)
  }
  getCategories(res) {
    const sql = "select category from bookshelf GROUP BY category"
    return modelMysql(res, sql)
  }
  getHighliths(res) {
    const sql = "select * from bookshelf where highlights = 1"
    return modelMysql(res, sql)
  }
  updateBook(req, res) {
    const id = req.params.id
    const body = req.body
    const sql = `update bookshelf SET ? where id = ${id}`
    modelMysql(res, sql, body)
  }
  deleteBook(req, res) {
    const id = req.params.id
    const sql = `delete from bookshelf where id = ${id}`
    return modelMysql(res, sql)
  }

}
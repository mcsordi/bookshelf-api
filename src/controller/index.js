import { modelMysql } from "../model/index.js"

export class controller {
  postBook(req, res) {
    const sql = "insert into bookshelf set ?"
    const body = req.body
    const error = "Erro ao publicar livro"
    return modelMysql(res, sql, body, error)
  }
  updateBook(req, res) {
    const id = req.params.id
    const body = req.body
    const sql = `update bookshelf SET ? where id = ${id}`
    const error = 'Erro ao atualizar informações do livro'
    modelMysql(res, sql, body, error)
  }
  getAllBooks(res) {
    const sql = "select * from bookshelf"
    const error = "Erro ao buscar livros"
    return modelMysql(res, sql, error)
  }
  getById(req, res) {
    const id = req.params.id
    const sql = `select * from bookshelf where id = ${id}`
    const error = `Erro ao consultar livro específico`
    return modelMysql(res, sql, error)
  }
  getCategories(res) {
    const sql = "select category from bookshelf GROUP BY category"
    const error = "Erro ao buscar categorias"
    return modelMysql(res, sql, error)
  }
  getFavorites(res) {
    const sql = "select * from bookshelf where favorite = 1"
    const error = "Erro ao buscar favoritos"
    return modelMysql(res, sql, error)
  }
  getHighliths(res) {
    const sql = "select * from bookshelf where highlights = 1"
    const error = "Erro ao buscar destaques"
    return modelMysql(res, sql, error)
  }
  deleteBook(req, res) {
    const id = req.params.id
    const sql = `delete from bookshelf where id = ${id}`
    const error = `Erro ao deletar livro`
    return modelMysql(res, sql, error)
  }
}

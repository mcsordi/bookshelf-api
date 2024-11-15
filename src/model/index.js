import { connection } from "../connection/index.js"

export const modelMysql = async (res, sql, body = "") => {
  const [result, fields] = await connection.query(sql, body)
  const length = result.length
  const affectedRows = result.affectedRows

  try {
    if (length < 1) {
      return res.status(404).json("Busca não possui resultados")
    }
    if (affectedRows < 1) {
      return res.status(404).json("Nenhum elemento foi modificado")
    }
    return res.status(200).json(result)
  } catch (error) {
    console.log("modelMysql ~ error:", error)
  }

}
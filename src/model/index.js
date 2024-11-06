import { connection } from "../connection/index.js"

export const modelMysql = async (res, sql, body = "", errorMessage) => {
  const [result, fields] = await connection.query(sql, body)
  const length = result.length
  const affectedRows = result.affectedRows

  try {
    if (length < 1) {
      return res.status(404).send("Busca não possui resultados")
    }
    if (affectedRows < 1) {
      return res.status(404).send("Nenhum elemento foi modificado")
    }
    return res.status(200).json(result)
  } catch (error) {
    return res.status(404).send(errorMessage)
  }

}
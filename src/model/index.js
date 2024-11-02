import { connection } from "../connection/index.js"

export const modelMysql = async (res, sql, body = "", errorMessage) => {
  const [result, fields] = await connection.query(sql, body)
  const empty = result.length
  try {
    if (empty < 1) {
      return res.status(404).send("Busca não possui resultados")
    }
    return res.status(200).json(result)
  } catch (error) {
    return res.status(404).send(errorMessage)
  }

}
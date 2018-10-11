/**
 * NOTE: This class is auto generated by the akka-scala (beta) swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * For any issue or feedback, please open a ticket via https://github.com/swagger-api/swagger-codegen/issues/new
 */
package io.swagger.client.api

import io.swagger.client.model.ApiResponse
import io.swagger.client.model.Vaga
import io.swagger.client.core._
import io.swagger.client.core.CollectionFormats._
import io.swagger.client.core.ApiKeyLocations._

object SensorApi {

  /**
   * 
   * 
   * Expected answers:
   *   code 200 : ApiResponse (successful operation)
   *   code 405 :  (Validation exception)
   * 
   * @param body Objeto vaga que será registrado no sistema
   */
  def addVaga(body: Vaga): ApiRequest[ApiResponse] =
    ApiRequest[ApiResponse](ApiMethods.POST, "https://virtserver.swaggerhub.com/Parking-lot/Estacionamento/1.0.0", "/vaga", "application/json")
      .withBody(body)
      .withSuccessResponse[ApiResponse](200)
      .withErrorResponse[Unit](405)
        /**
   * 
   * 
   * Expected answers:
   *   code 400 :  (ID invalido)
   *   code 404 :  (Vaga não localizada)
   * 
   * @param vagaId Id da vaga que será deletada
   * @param apiKey 
   */
  def deleteVaga(vagaId: Long, apiKey: Option[String] = None): ApiRequest[Unit] =
    ApiRequest[Unit](ApiMethods.DELETE, "https://virtserver.swaggerhub.com/Parking-lot/Estacionamento/1.0.0", "/vaga/{vagaId}", "application/json")
      .withPathParam("vagaId", vagaId)
      .withHeaderParam("api_key", apiKey)
      .withErrorResponse[Unit](400)
      .withErrorResponse[Unit](404)
        /**
   * 
   * 
   * Expected answers:
   *   code 200 : ApiResponse (successful operation)
   *   code 404 :  (Vaga nao localizada)
   *   code 405 :  (Vaga jah estah ocupada)
   * 
   * @param vagaId ID da vaga para ocupar
   */
  def desocupaVaga(vagaId: Long): ApiRequest[ApiResponse] =
    ApiRequest[ApiResponse](ApiMethods.POST, "https://virtserver.swaggerhub.com/Parking-lot/Estacionamento/1.0.0", "/vaga/desocupar/{vagaId}", "application/json")
      .withPathParam("vagaId", vagaId)
      .withSuccessResponse[ApiResponse](200)
      .withErrorResponse[Unit](404)
      .withErrorResponse[Unit](405)
        /**
   * 
   * 
   * Expected answers:
   *   code 200 : ApiResponse (successful operation)
   *   code 404 :  (Vaga nao localizada)
   *   code 405 :  (Vaga jah estah ocupada)
   * 
   * @param vagaId ID da vaga para ocupar
   */
  def ocupaVaga(vagaId: Long): ApiRequest[ApiResponse] =
    ApiRequest[ApiResponse](ApiMethods.POST, "https://virtserver.swaggerhub.com/Parking-lot/Estacionamento/1.0.0", "/vaga/ocupar/{vagaId}", "application/json")
      .withPathParam("vagaId", vagaId)
      .withSuccessResponse[ApiResponse](200)
      .withErrorResponse[Unit](404)
      .withErrorResponse[Unit](405)
      

}

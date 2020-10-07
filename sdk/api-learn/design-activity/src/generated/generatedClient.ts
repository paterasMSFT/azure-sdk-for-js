/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { ComputeNodeAdministration, Computation } from "./operations";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { GeneratedClientContext } from "./generatedClientContext";
import {
  GeneratedClientOptionalParams,
  GeneratedClientComputationResponse
} from "./models";

export class GeneratedClient extends GeneratedClientContext {
  /**
   * Initializes a new instance of the GeneratedClient class.
   * @param $host server parameter
   * @param nodeName
   * @param options The parameter options
   */
  constructor(
    $host: string,
    nodeName: string,
    options?: GeneratedClientOptionalParams
  ) {
    super($host, nodeName, options);
    this.computeNodeAdministration = new ComputeNodeAdministration(this);
    this.computation = new Computation(this);
  }

  /**
   * @param operationId
   * @param options The options parameters.
   */
  computation(
    operationId: string,
    options?: coreHttp.OperationOptions
  ): Promise<GeneratedClientComputationResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { operationId, options: operationOptions },
      computationOperationSpec
    ) as Promise<GeneratedClientComputationResponse>;
  }

  computeNodeAdministration: ComputeNodeAdministration;
  computation: Computation;
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const computationOperationSpec: coreHttp.OperationSpec = {
  path: "/operations/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Operation,
      headersMapper: Mappers.GeneratedClientComputationHeaders
    }
  },
  urlParameters: [Parameters.$host, Parameters.operationId],
  headerParameters: [Parameters.accept, Parameters.xMsClientRequestId],
  serializer
};

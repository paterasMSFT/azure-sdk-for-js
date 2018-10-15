/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/metricDefinitionsMappers";
import * as Parameters from "../models/parameters";
import { MonitorManagementClientContext } from "../monitorManagementClientContext";

/** Class representing a MetricDefinitions. */
export class MetricDefinitions {
  private readonly client: MonitorManagementClientContext;

  /**
   * Create a MetricDefinitions.
   * @param {MonitorManagementClientContext} client Reference to the service client.
   */
  constructor(client: MonitorManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the metric definitions for the resource.
   * @param resourceUri The identifier of the resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.MetricDefinitionsListResponse>
   */
  list(resourceUri: string, options?: Models.MetricDefinitionsListOptionalParams): Promise<Models.MetricDefinitionsListResponse>;
  /**
   * @param resourceUri The identifier of the resource.
   * @param callback The callback
   */
  list(resourceUri: string, callback: msRest.ServiceCallback<Models.MetricDefinitionCollection>): void;
  /**
   * @param resourceUri The identifier of the resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceUri: string, options: Models.MetricDefinitionsListOptionalParams, callback: msRest.ServiceCallback<Models.MetricDefinitionCollection>): void;
  list(resourceUri: string, options?: Models.MetricDefinitionsListOptionalParams, callback?: msRest.ServiceCallback<Models.MetricDefinitionCollection>): Promise<Models.MetricDefinitionsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceUri,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.MetricDefinitionsListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{resourceUri}/providers/microsoft.insights/metricDefinitions",
  urlParameters: [
    Parameters.resourceUri
  ],
  queryParameters: [
    Parameters.apiVersion5,
    Parameters.metricnamespace
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MetricDefinitionCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

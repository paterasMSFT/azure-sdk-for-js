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
import * as Mappers from "../models/containerHostMappingsMappers";
import * as Parameters from "../models/parameters";
import { DevSpacesManagementClientContext } from "../devSpacesManagementClientContext";

/** Class representing a ContainerHostMappings. */
export class ContainerHostMappings {
  private readonly client: DevSpacesManagementClientContext;

  /**
   * Create a ContainerHostMappings.
   * @param {DevSpacesManagementClientContext} client Reference to the service client.
   */
  constructor(client: DevSpacesManagementClientContext) {
    this.client = client;
  }

  /**
   * @summary Returns container host mapping object for a container host resource ID if an associated
   * controller exists.
   * @param containerHostMapping
   * @param location Location of the container host.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContainerHostMappingsGetContainerHostMappingResponse>
   */
  getContainerHostMapping(containerHostMapping: Models.ContainerHostMapping, location: string, options?: msRest.RequestOptionsBase): Promise<Models.ContainerHostMappingsGetContainerHostMappingResponse>;
  /**
   * @param containerHostMapping
   * @param location Location of the container host.
   * @param callback The callback
   */
  getContainerHostMapping(containerHostMapping: Models.ContainerHostMapping, location: string, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param containerHostMapping
   * @param location Location of the container host.
   * @param options The optional parameters
   * @param callback The callback
   */
  getContainerHostMapping(containerHostMapping: Models.ContainerHostMapping, location: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  getContainerHostMapping(containerHostMapping: Models.ContainerHostMapping, location: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<any>): Promise<Models.ContainerHostMappingsGetContainerHostMappingResponse> {
    return this.client.sendOperationRequest(
      {
        containerHostMapping,
        location,
        options
      },
      getContainerHostMappingOperationSpec,
      callback) as Promise<Models.ContainerHostMappingsGetContainerHostMappingResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getContainerHostMappingOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.DevSpaces/locations/{location}/checkContainerHostMapping",
  urlParameters: [
    Parameters.location
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "containerHostMapping",
    mapper: {
      ...Mappers.ContainerHostMapping,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

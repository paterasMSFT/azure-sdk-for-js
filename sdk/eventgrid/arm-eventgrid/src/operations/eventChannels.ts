/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/eventChannelsMappers";
import * as Parameters from "../models/parameters";
import { EventGridManagementClientContext } from "../eventGridManagementClientContext";

/** Class representing a EventChannels. */
export class EventChannels {
  private readonly client: EventGridManagementClientContext;

  /**
   * Create a EventChannels.
   * @param {EventGridManagementClientContext} client Reference to the service client.
   */
  constructor(client: EventGridManagementClientContext) {
    this.client = client;
  }

  /**
   * Get properties of an event channel.
   * @summary Get an event channel.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param eventChannelName Name of the event channel.
   * @param [options] The optional parameters
   * @returns Promise<Models.EventChannelsGetResponse>
   */
  get(resourceGroupName: string, partnerNamespaceName: string, eventChannelName: string, options?: msRest.RequestOptionsBase): Promise<Models.EventChannelsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param eventChannelName Name of the event channel.
   * @param callback The callback
   */
  get(resourceGroupName: string, partnerNamespaceName: string, eventChannelName: string, callback: msRest.ServiceCallback<Models.EventChannel>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param eventChannelName Name of the event channel.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, partnerNamespaceName: string, eventChannelName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EventChannel>): void;
  get(resourceGroupName: string, partnerNamespaceName: string, eventChannelName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EventChannel>, callback?: msRest.ServiceCallback<Models.EventChannel>): Promise<Models.EventChannelsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        partnerNamespaceName,
        eventChannelName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.EventChannelsGetResponse>;
  }

  /**
   * Asynchronously creates a new event channel with the specified parameters.
   * @summary Create an event channel.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param eventChannelName Name of the event channel.
   * @param eventChannelInfo EventChannel information.
   * @param [options] The optional parameters
   * @returns Promise<Models.EventChannelsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, partnerNamespaceName: string, eventChannelName: string, eventChannelInfo: Models.EventChannel, options?: msRest.RequestOptionsBase): Promise<Models.EventChannelsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param eventChannelName Name of the event channel.
   * @param eventChannelInfo EventChannel information.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, partnerNamespaceName: string, eventChannelName: string, eventChannelInfo: Models.EventChannel, callback: msRest.ServiceCallback<Models.EventChannel>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param eventChannelName Name of the event channel.
   * @param eventChannelInfo EventChannel information.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, partnerNamespaceName: string, eventChannelName: string, eventChannelInfo: Models.EventChannel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EventChannel>): void;
  createOrUpdate(resourceGroupName: string, partnerNamespaceName: string, eventChannelName: string, eventChannelInfo: Models.EventChannel, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EventChannel>, callback?: msRest.ServiceCallback<Models.EventChannel>): Promise<Models.EventChannelsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        partnerNamespaceName,
        eventChannelName,
        eventChannelInfo,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.EventChannelsCreateOrUpdateResponse>;
  }

  /**
   * Delete existing event channel.
   * @summary Delete an event channel.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param eventChannelName Name of the event channel.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, partnerNamespaceName: string, eventChannelName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param eventChannelName Name of the event channel.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, partnerNamespaceName: string, eventChannelName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param eventChannelName Name of the event channel.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, partnerNamespaceName: string, eventChannelName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, partnerNamespaceName: string, eventChannelName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        partnerNamespaceName,
        eventChannelName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * List all the event channels in a partner namespace.
   * @summary List event channels.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param [options] The optional parameters
   * @returns Promise<Models.EventChannelsListByPartnerNamespaceResponse>
   */
  listByPartnerNamespace(resourceGroupName: string, partnerNamespaceName: string, options?: Models.EventChannelsListByPartnerNamespaceOptionalParams): Promise<Models.EventChannelsListByPartnerNamespaceResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param callback The callback
   */
  listByPartnerNamespace(resourceGroupName: string, partnerNamespaceName: string, callback: msRest.ServiceCallback<Models.EventChannelsListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByPartnerNamespace(resourceGroupName: string, partnerNamespaceName: string, options: Models.EventChannelsListByPartnerNamespaceOptionalParams, callback: msRest.ServiceCallback<Models.EventChannelsListResult>): void;
  listByPartnerNamespace(resourceGroupName: string, partnerNamespaceName: string, options?: Models.EventChannelsListByPartnerNamespaceOptionalParams | msRest.ServiceCallback<Models.EventChannelsListResult>, callback?: msRest.ServiceCallback<Models.EventChannelsListResult>): Promise<Models.EventChannelsListByPartnerNamespaceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        partnerNamespaceName,
        options
      },
      listByPartnerNamespaceOperationSpec,
      callback) as Promise<Models.EventChannelsListByPartnerNamespaceResponse>;
  }

  /**
   * List all the event channels in a partner namespace.
   * @summary List event channels.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.EventChannelsListByPartnerNamespaceNextResponse>
   */
  listByPartnerNamespaceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.EventChannelsListByPartnerNamespaceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByPartnerNamespaceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.EventChannelsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByPartnerNamespaceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EventChannelsListResult>): void;
  listByPartnerNamespaceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EventChannelsListResult>, callback?: msRest.ServiceCallback<Models.EventChannelsListResult>): Promise<Models.EventChannelsListByPartnerNamespaceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByPartnerNamespaceNextOperationSpec,
      callback) as Promise<Models.EventChannelsListByPartnerNamespaceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerNamespaces/{partnerNamespaceName}/eventChannels/{eventChannelName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.partnerNamespaceName,
    Parameters.eventChannelName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.EventChannel
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerNamespaces/{partnerNamespaceName}/eventChannels/{eventChannelName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.partnerNamespaceName,
    Parameters.eventChannelName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "eventChannelInfo",
    mapper: {
      ...Mappers.EventChannel,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.EventChannel
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerNamespaces/{partnerNamespaceName}/eventChannels/{eventChannelName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.partnerNamespaceName,
    Parameters.eventChannelName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByPartnerNamespaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerNamespaces/{partnerNamespaceName}/eventChannels",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.partnerNamespaceName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.EventChannelsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByPartnerNamespaceNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.EventChannelsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
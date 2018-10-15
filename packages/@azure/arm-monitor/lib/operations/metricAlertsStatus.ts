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
import * as Mappers from "../models/metricAlertsStatusMappers";
import * as Parameters from "../models/parameters";
import { MonitorManagementClientContext } from "../monitorManagementClientContext";

/** Class representing a MetricAlertsStatus. */
export class MetricAlertsStatus {
  private readonly client: MonitorManagementClientContext;

  /**
   * Create a MetricAlertsStatus.
   * @param {MonitorManagementClientContext} client Reference to the service client.
   */
  constructor(client: MonitorManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieve an alert rule status.
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param [options] The optional parameters
   * @returns Promise<Models.MetricAlertsStatusListResponse>
   */
  list(resourceGroupName: string, ruleName: string, options?: msRest.RequestOptionsBase): Promise<Models.MetricAlertsStatusListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param callback The callback
   */
  list(resourceGroupName: string, ruleName: string, callback: msRest.ServiceCallback<Models.MetricAlertStatusCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, ruleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MetricAlertStatusCollection>): void;
  list(resourceGroupName: string, ruleName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.MetricAlertStatusCollection>): Promise<Models.MetricAlertsStatusListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        ruleName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.MetricAlertsStatusListResponse>;
  }

  /**
   * Retrieve an alert rule status.
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param statusName The name of the status.
   * @param [options] The optional parameters
   * @returns Promise<Models.MetricAlertsStatusListByNameResponse>
   */
  listByName(resourceGroupName: string, ruleName: string, statusName: string, options?: msRest.RequestOptionsBase): Promise<Models.MetricAlertsStatusListByNameResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param statusName The name of the status.
   * @param callback The callback
   */
  listByName(resourceGroupName: string, ruleName: string, statusName: string, callback: msRest.ServiceCallback<Models.MetricAlertStatusCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param ruleName The name of the rule.
   * @param statusName The name of the status.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByName(resourceGroupName: string, ruleName: string, statusName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MetricAlertStatusCollection>): void;
  listByName(resourceGroupName: string, ruleName: string, statusName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.MetricAlertStatusCollection>): Promise<Models.MetricAlertsStatusListByNameResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        ruleName,
        statusName,
        options
      },
      listByNameOperationSpec,
      callback) as Promise<Models.MetricAlertsStatusListByNameResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/metricAlerts/{ruleName}/status",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ruleName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MetricAlertStatusCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByNameOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/metricAlerts/{ruleName}/status/{statusName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ruleName,
    Parameters.statusName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MetricAlertStatusCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

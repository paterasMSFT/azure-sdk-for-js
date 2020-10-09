/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { GeneratedClientOptionalParams } from "./models";

const packageName = "@azure/design-activity";
const packageVersion = "1.0.0-beta.1";

export class GeneratedClientContext extends coreHttp.ServiceClient {
  $host: string;
  xMsClientRequestId?: string;
  nodeName: string;

  /**
   * Initializes a new instance of the GeneratedClientContext class.
   * @param $host server parameter
   * @param nodeName
   * @param options The parameter options
   */
  constructor(
    $host: string,
    nodeName: string,
    options?: GeneratedClientOptionalParams
  ) {
    if ($host === undefined) {
      throw new Error("'$host' cannot be null");
    }
    if (nodeName === undefined) {
      throw new Error("'nodeName' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(undefined, options);

    this.requestContentType = "application/json; charset=utf-8";

    this.baseUri = options.endpoint || "{$host}";

    // Parameter assignments
    this.$host = $host;
    this.nodeName = nodeName;
  }
}

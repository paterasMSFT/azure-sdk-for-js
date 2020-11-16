// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PipelineOptions, OperationOptions, TokenCredential } from "@azure/core-http";
import { ConfigurationSetting } from "./generated/models";

export { ConfigurationSetting } from "./generated/models";

export interface ConfigurationClientOptions extends PipelineOptions {}

export interface GetConfigurationSettingOptions extends OperationOptions {
  onlyIfChanged?: boolean;
}

export class ConfigurationClient {
  constructor(
    _endpointUrl: string,
    _credential: TokenCredential,
    _options: ConfigurationClientOptions = {}
  ) {
    throw new Error("Not yet implemented.");
  }

  public async getConfigurationSetting(
    _key: string,
    _options?: GetConfigurationSettingOptions
  ): Promise<ConfigurationSetting>;

  public async getConfigurationSetting(
    setting: ConfigurationSetting,
    options?: GetConfigurationSettingOptions
  ): Promise<ConfigurationSetting>;

  public async getConfigurationSetting(
    _keyOrSetting: string | ConfigurationSetting,
    _options: GetConfigurationSettingOptions = {}
  ): Promise<ConfigurationSetting> {
    throw new Error("Not yet implemented.");
  }
}

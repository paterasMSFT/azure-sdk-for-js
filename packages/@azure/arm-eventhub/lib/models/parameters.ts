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

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const alias: msRest.OperationURLParameter = {
  parameterPath: "alias",
  mapper: {
    required: true,
    serializedName: "alias",
    constraints: {
      MaxLength: 50,
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const apiVersion: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};
export const authorizationRuleName: msRest.OperationURLParameter = {
  parameterPath: "authorizationRuleName",
  mapper: {
    required: true,
    serializedName: "authorizationRuleName",
    constraints: {
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const consumerGroupName: msRest.OperationURLParameter = {
  parameterPath: "consumerGroupName",
  mapper: {
    required: true,
    serializedName: "consumerGroupName",
    constraints: {
      MaxLength: 50,
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const eventHubName: msRest.OperationURLParameter = {
  parameterPath: "eventHubName",
  mapper: {
    required: true,
    serializedName: "eventHubName",
    constraints: {
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const namespaceName: msRest.OperationURLParameter = {
  parameterPath: "namespaceName",
  mapper: {
    required: true,
    serializedName: "namespaceName",
    constraints: {
      MaxLength: 50,
      MinLength: 6
    },
    type: {
      name: "String"
    }
  }
};
export const nextPageLink: msRest.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const resourceGroupName: msRest.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    required: true,
    serializedName: "resourceGroupName",
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const skip: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "skip"
  ],
  mapper: {
    serializedName: "$skip",
    constraints: {
      InclusiveMaximum: 1000,
      InclusiveMinimum: 0
    },
    type: {
      name: "Number"
    }
  }
};
export const sku: msRest.OperationURLParameter = {
  parameterPath: "sku",
  mapper: {
    required: true,
    serializedName: "sku",
    constraints: {
      MaxLength: 50,
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const subscriptionId: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    type: {
      name: "String"
    }
  }
};
export const top: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "top"
  ],
  mapper: {
    serializedName: "$top",
    constraints: {
      InclusiveMaximum: 1000,
      InclusiveMinimum: 1
    },
    type: {
      name: "Number"
    }
  }
};

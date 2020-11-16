/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const KeyListResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyListResult",
    modelProperties: {
      items: {
        serializedName: "items",
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Key" } }
        }
      },
      nextLink: {
        serializedName: "@nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Key: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Key",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorModel: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      title: {
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      detail: {
        serializedName: "detail",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const KeyValueListResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyValueListResult",
    modelProperties: {
      items: {
        serializedName: "items",
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "ConfigurationSetting" }
          }
        }
      },
      nextLink: {
        serializedName: "@nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConfigurationSetting: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfigurationSetting",
    modelProperties: {
      key: {
        serializedName: "key",
        required: true,
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "label",
        type: {
          name: "String"
        }
      },
      contentType: {
        serializedName: "content_type",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last_modified",
        type: {
          name: "DateTime"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      isReadOnly: {
        serializedName: "locked",
        type: {
          name: "Boolean"
        }
      },
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LabelListResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LabelListResult",
    modelProperties: {
      items: {
        serializedName: "items",
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Label" } }
        }
      },
      nextLink: {
        serializedName: "@nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Label: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Label",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientGetKeysHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientGetKeysHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientCheckKeysHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientCheckKeysHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientGetKeyValuesHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientGetKeyValuesHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientCheckKeyValuesHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientCheckKeyValuesHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientGetKeyValueHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientGetKeyValueHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientPutKeyValueHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientPutKeyValueHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientDeleteKeyValueHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientDeleteKeyValueHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientCheckKeyValueHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientCheckKeyValueHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "last-modified",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientGetLabelsHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientGetLabelsHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientCheckLabelsHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientCheckLabelsHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientPutLockHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientPutLockHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientDeleteLockHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientDeleteLockHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientGetRevisionsHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientGetRevisionsHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientCheckRevisionsHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientCheckRevisionsHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientGetKeysNextHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientGetKeysNextHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientGetKeyValuesNextHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientGetKeyValuesNextHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientGetLabelsNextHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientGetLabelsNextHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientGetRevisionsNextHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientGetRevisionsNextHeaders",
    modelProperties: {
      syncToken: {
        serializedName: "sync-token",
        type: {
          name: "String"
        }
      }
    }
  }
};

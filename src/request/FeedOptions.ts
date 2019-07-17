import { SharedOptions } from "./SharedOptions";

/**
 * The feed options and query methods.
 */
export interface FeedOptions extends SharedOptions {
  /** Opaque token for continuing the enumeration. */
  continuation?: string;
  /** Allow scan on the queries which couldn't be served as indexing was opted out on the requested paths. */
  enableScanInQuery?: boolean;
  /**
   * The maximum number of concurrent operations that run client side during parallel query execution in the
   * Azure Cosmos DB database service. Negative values make the system automatically decides the number of
   * concurrent operations to run.
   */
  maxDegreeOfParallelism?: number;
  /** Max number of items to be returned in the enumeration operation. */
  maxItemCount?: number;
  /** Indicates a change feed request. Must be set to "Incremental feed", or omitted otherwise. */
  useIncrementalFeed?: boolean;
  /** Conditions Associated with the request. */
  accessCondition?: {
    /** Conditional HTTP method header type (IfMatch or IfNoneMatch). */
    type: string;
    /** Conditional HTTP method header value (the _etag field from the last version you read). */
    condition: string;
  };
  /** Enable returning query metrics in response headers */
  populateQueryMetrics?: boolean;
}

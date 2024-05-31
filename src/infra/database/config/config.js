import "dotenv/config";

export const config = {
    user: process.env.PGUSER || 'root',
    password: process.env.PGPASSWORD || 'root',
    host: process.env.PGHOST || 'localhost',
    port: process.env.PGPORT || 5432,
    database: process.env.PGDATABASE || 'database'
}
    // user?: string, // default process.env.PGUSER || process.env.USER
    // password: "string or function", //default process.env.PGPASSWORD
    // host?: string, // default process.env.PGHOST
    // port?: number, // default process.env.PGPORT
//     database?: string, // default process.env.PGDATABASE || user
//     connectionString?: string, // e.g. postgres://user:password@host:5432/database
//     ssl?: any, // passed directly to node.TLSSocket, supports all tls.connect options
//     types?: any, // custom type parsers
//     statement_timeout?: number, // number of milliseconds before a statement in query will time out, default is no timeout
//     query_timeout?: number, // number of milliseconds before a query call will timeout, default is no timeout
//     lock_timeout?: number, // number of milliseconds a query is allowed to be en lock state before it's cancelled due to lock timeout
//     application_name?: string, // The name of the application that created this Client instance
//     connectionTimeoutMillis?: number, // number of milliseconds to wait for connection, default is no timeout
//     idle_in_transaction_session_timeout?: number // number of milliseconds before terminating any session with an open idle transaction, default is no timeout
//   }
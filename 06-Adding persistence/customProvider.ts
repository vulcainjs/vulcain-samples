// import { IProvider, QueryResult, Schema, QueryOptions } from "vulcain-corejs";
// import { Customer } from ".";
// const mysql      = require('mysql');

// export class MySQLProvider implements IProvider<Customer> {
//     address: string;
//     private connection;

//     constructor(str: string) {
//         this.address = str;
//     }

//     setTenant(tenant: string): () => void {
//         this.connection = mysql.createConnection({
//             host     : 'localhost',
//             user     : 'me',
//             password : 'secret',
//             database : tenant
//           });
           
//         this.connection.connect();
//         return () => this.connection.end();
//     }

//     getAll(schema: Schema, options: QueryOptions): Promise<QueryResult<Customer>> {
//         throw new Error("Method not implemented.");
//     }
//     get(schema: Schema, id: string): Promise<Customer> {
//         return new Promise<Customer>((resolve, reject) => {
//             this.connection.query("select * from customers where id='" + id + "'", (err, result, fields) => {
//                 if (err) {
//                     reject(err);
//                     return;
//                 }    
//                 if (result.length === 0) {
//                     resolve(null);
//                 }
//                 else {
//                     resolve(<Customer>{
//                         id,
//                         firstName: result[0].firstName
//                     });
//                 }
//             });
//         });
//     }
//     create(schema: Schema, entity: Customer): Promise<Customer> {
//         throw new Error("Method not implemented.");
//     }
//     update(schema: Schema, entity: Customer): Promise<Customer> {
//         throw new Error("Method not implemented.");
//     }
//     delete(schema: Schema, id: string): Promise<Customer> {
//         throw new Error("Method not implemented.");
//     }
// }
import { System, ServiceDependency, Command, IRequestContext, AbstractServiceCommand, Model,
Property, Reference } from 'vulcain-corejs';

// Models
/**
* .
*/
@Model()
export class Customer {
    @Property({"type":"string","required":true})
    lastName: string;
    @Property({"type":"string","required":true})
    firstName: string;
    @Property({"type":"uid"})
    id?: string;
}

// Command
@Command({ executionTimeoutInMilliseconds: 1500 })
@ServiceDependency('SampleService', '1.0', 'http://localhost:8080/api/_servicedescription') 
export class SampleServiceCommand extends AbstractServiceCommand {
}

// Service proxy
export class SampleService {

    private static serviceName = "SampleService";
    private static serviceVersion = "1.0";
    private userContext: {authorization: string, tenant: string};

    /**
    * 
    */
    constructor(private context: IRequestContext, authorization?: string, authorizationTenant=System.defaultTenant) {
        if(authorization) {
            this.userContext = {authorization, tenant: authorizationTenant};
        }
    }
    /**
    * Action: Create a new entity
    * @params {string} lastName - .
    * @params {string} firstName - .
    * @params {string} id - .
    * @params [optional] args - additional url parameters
    */
    async createCustomerAsync(lastName: string, firstName: string, id?: string,  args?) {
        const $data = {lastName, firstName, id};
        return this.createCustomerEntityAsync($data, args);
    }
    /**
    * Action: Create a new entity
    * @params {Customer} entity -
    * @params [optional] args - additional url parameters
    */
    async createCustomerEntityAsync(data: Customer, args?): Promise<Customer> {
        let command = this.context.getCommand<SampleServiceCommand>('SampleServiceCreateCommand');
        if( !command ) {
            command = await this.context.getCommand<SampleServiceCommand>('SampleServiceCommand');
        }
        const response = await command.runAsync<Customer>(
            'action', 
            SampleService.serviceName, 
            SampleService.serviceVersion, 
            'customer.create', 
            this.userContext, 
            data, 
            args
        );
        return response;
    }
    /**
    * Action: Update an entity
    * @params {string} lastName - .
    * @params {string} firstName - .
    * @params {string} id - .
    * @params [optional] args - additional url parameters
    */
    async updateCustomerAsync(lastName: string, firstName: string, id?: string,  args?) {
        const $data = {lastName, firstName, id};
        return this.updateCustomerEntityAsync($data, args);
    }
    /**
    * Action: Update an entity
    * @params {Customer} entity -
    * @params [optional] args - additional url parameters
    */
    async updateCustomerEntityAsync(data: Customer, args?): Promise<Customer> {
        let command = this.context.getCommand<SampleServiceCommand>('SampleServiceUpdateCommand');
        if( !command ) {
            command = this.context.getCommand<SampleServiceCommand>('SampleServiceCommand');
        }
        const response = await command.runAsync<Customer>(
            'action', 
            SampleService.serviceName, 
            SampleService.serviceVersion, 
            'customer.update', 
            this.userContext, 
            data, 
            args
        );
        return response;
    }
    /**
    * Action: Delete an entity
    * @params {string} lastName - .
    * @params {string} firstName - .
    * @params {string} id - .
    * @params [optional] args - additional url parameters
    */
    async deleteCustomerAsync(lastName: string, firstName: string, id?: string,  args?) {
        const $data = {lastName, firstName, id};
        return this.deleteCustomerEntityAsync($data, args);
    }
    /**
    * Action: Delete an entity
    * @params {Customer} entity -
    * @params [optional] args - additional url parameters
    */
    async deleteCustomerEntityAsync(data: Customer, args?): Promise<boolean> {
        let command = this.context.getCommand<SampleServiceCommand>('SampleServiceDeleteCommand');
        if( !command ) {
            command = this.context.getCommand<SampleServiceCommand>('SampleServiceCommand');
        }
        const response = await command.runAsync<boolean>(
            'action', 
            SampleService.serviceName, 
            SampleService.serviceVersion, 
            'customer.delete', 
            this.userContext, 
            data, 
            args
        );
        return response;
    }
    /**
    * Query: Get schema description
           
    * @params {number} page - Page to retrieve
    * @params {number} maxByPage - Item by page (default 100)
    */
    async get_schemasAsync( page?: number, maxByPage?: number) {
        let command = this.context.getCommand<SampleServiceCommand>('SampleServiceGet_schemasCommand');
        if( !command ) {
            command = this.context.getCommand<SampleServiceCommand>('SampleServiceCommand');
        }
        const response = await command.runAsync<any[]>(
            'query', 
            SampleService.serviceName, 
            SampleService.serviceVersion, 
            '_schemas', 
            this.userContext, 
            null, 
            null,
            page, 
            maxByPage
        );
        return response;
    }
    /**
    * Get an entity by id
    * @params id string - unique id
    */
    async getCustomerAsync(id: string): Promise<Customer> {
        let command = this.context.getCommand<SampleServiceCommand>('SampleServiceGetCustomerCommand');
        if( !command ) {
            command = this.context.getCommand<SampleServiceCommand>('SampleServiceCommand');
        }
        const response = await command.runAsync<Customer>(
            'get', 
            SampleService.serviceName, 
            SampleService.serviceVersion, 
            'customer.get', 
            this.userContext, 
            id,
            null
        );
        return response;
    }
        /**
    * Get all entities
    * @params {any} query - Query filter
    * @params [optional] query - filter query
    * @params {number} page - Page to retrieve
    * @params {number} maxByPage - Item by page (default 100)
    */
    async getAllCustomerAsync( query?, page?: number, maxByPage?: number): Promise<Customer[]> {
        let command = this.context.getCommand<SampleServiceCommand>('SampleServiceGetAllCustomerCommand');
        if( !command ) {
            command = this.context.getCommand<SampleServiceCommand>('SampleServiceCommand');
        }
        const response = await command.runAsync<Customer[]>(
            'query', 
            SampleService.serviceName, 
            SampleService.serviceVersion, 
            'customer.all', 
            this.userContext, 
            query, 
            null, 
            page, 
            maxByPage
        );
        return response;
    }
    /**
    * Query: Display Swagger UI
           
    * @params {number} page - Page to retrieve
    * @params {number} maxByPage - Item by page (default 100)
    */
    async get_swaggerAsync( page?: number, maxByPage?: number) {
        let command = this.context.getCommand<SampleServiceCommand>('SampleServiceGet_swaggerCommand');
        if( !command ) {
            command = this.context.getCommand<SampleServiceCommand>('SampleServiceCommand');
        }
        const response = await command.runAsync<string[]>(
            'query', 
            SampleService.serviceName, 
            SampleService.serviceVersion, 
            '_swagger', 
            this.userContext, 
            null, 
            null,
            page, 
            maxByPage
        );
        return response;
    }
}

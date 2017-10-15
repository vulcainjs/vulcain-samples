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
export class SampleServiceProxy {

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
    * Action: Create a customer with random names
    * @params [optional] args - additional url parameters
    */
    async randomCustomerAsync( args?): Promise<Customer> {
        const $data = null;
        let command = this.context.getCommand<SampleServiceCommand>('SampleServiceRandomCommand');
        if( !command ) {
            command = this.context.getCommand<SampleServiceCommand>('SampleServiceCommand');
        }
        const response = await command.execActionAsync<Customer>(
            SampleServiceProxy.serviceName, 
            SampleServiceProxy.serviceVersion, 
            this.userContext, 
            'customer.random', 
            $data, 
            args
        );
        return response;
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
            command = this.context.getCommand<SampleServiceCommand>('SampleServiceCommand');
        }
        const response = await command.execActionAsync<Customer>(
            SampleServiceProxy.serviceName, 
            SampleServiceProxy.serviceVersion, 
            this.userContext,
            'customer.create', 
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
        const response = await command.execActionAsync<Customer>(
            SampleServiceProxy.serviceName, 
            SampleServiceProxy.serviceVersion, 
            this.userContext,
            'customer.update', 
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
        const response = await command.execActionAsync<boolean>(
            SampleServiceProxy.serviceName, 
            SampleServiceProxy.serviceVersion, 
            this.userContext,
            'customer.delete', 
            data, 
            args
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
        const response = await command.execGetAsync<Customer>(
            SampleServiceProxy.serviceName, 
            SampleServiceProxy.serviceVersion, 
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
        const response = await command.execQueryAsync<Customer[]>(
            SampleServiceProxy.serviceName, 
            SampleServiceProxy.serviceVersion, 
            this.userContext, 
            'customer.all', 
            query, 
            null, 
            page, 
            maxByPage
        );
        return response;
    }
}

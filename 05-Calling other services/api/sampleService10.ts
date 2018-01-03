import { ServiceDependency, Command, IRequestContext, AbstractServiceCommand, Model,
Property, Reference, CommandFactory, Service } from 'vulcain-corejs';

//
// Code generated with 'vulcain generate http://localhost:8080/api/_servicedescription' command 
// Install vulcain command with npm -g vulcain-cli
// 

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
@Command({ executionTimeoutInMilliseconds: 35000 })
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
    constructor(private context: IRequestContext, authorization?: string, authorizationTenant=Service.defaultTenant) {
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
    async createCustomer(lastName: string, firstName: string, id?: string,  args?) {
        const $data = {lastName, firstName, id};
        return this.createCustomerEntity($data, args);
    }
    /**
    * Action: Create a new entity
    * @params {Customer} entity -
    * @params [optional] args - additional url parameters
    */
    async createCustomerEntity(data: Customer, args?): Promise<Customer> {
        let command = CommandFactory.createCommand<SampleServiceCommand>(this.context, 'SampleServiceCreateCommand');
        if( !command ) {
            command = CommandFactory.createCommand<SampleServiceCommand>(this.context, 'SampleServiceCommand');
        }
        const response = await command.execAction<Customer>(
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
    async updateCustomer(lastName: string, firstName: string, id?: string,  args?) {
        const $data = {lastName, firstName, id};
        return this.updateCustomerEntity($data, args);
    }
    /**
    * Action: Update an entity
    * @params {Customer} entity -
    * @params [optional] args - additional url parameters
    */
    async updateCustomerEntity(data: Customer, args?): Promise<Customer> {
        let command = CommandFactory.createCommand<SampleServiceCommand>(this.context, 'SampleServiceUpdateCommand');
        if( !command ) {
            command = CommandFactory.createCommand<SampleServiceCommand>(this.context, 'SampleServiceCommand');
        }
        const response = await command.execAction<Customer>(
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
    async deleteCustomer(lastName: string, firstName: string, id?: string,  args?) {
        const $data = {lastName, firstName, id};
        return this.deleteCustomerEntity($data, args);
    }
    /**
    * Action: Delete an entity
    * @params {Customer} entity -
    * @params [optional] args - additional url parameters
    */
    async deleteCustomerEntity(data: Customer, args?): Promise<boolean> {
        let command = CommandFactory.createCommand<SampleServiceCommand>(this.context, 'SampleServiceDeleteCommand');
        if( !command ) {
            command = CommandFactory.createCommand<SampleServiceCommand>(this.context, 'SampleServiceCommand');
        }
        const response = await command.execAction<boolean>(
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
    async getCustomer(id: string): Promise<Customer> {
        let command = CommandFactory.createCommand<SampleServiceCommand>(this.context, 'SampleServiceGetCustomerCommand');
        if( !command ) {
            command = CommandFactory.createCommand<SampleServiceCommand>(this.context, 'SampleServiceCommand');
        }
        const response = await command.execGet<Customer>(
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
    async getAllCustomer( query?, page?: number, maxByPage?: number): Promise<Customer[]> {
        let command = CommandFactory.createCommand<SampleServiceCommand>(this.context, 'SampleServiceGetAllCustomerCommand');
        if( !command ) {
            command = CommandFactory.createCommand<SampleServiceCommand>(this.context, 'SampleServiceCommand');
        }
        const response = await command.execQuery<Customer[]>(
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

import { Application } from 'vulcain-corejs';

let srv = new Application('Sample').enableGraphQL();
srv.start(8080);
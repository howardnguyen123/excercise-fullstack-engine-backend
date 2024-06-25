import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { config } from 'dotenv';
import * as path from 'path';
import { env } from 'process';

import { ProtoGrpcType } from './proto/employee';
import { services } from './services';

config();

const { GRPC_PORT } = env;
const PROTO_FILE = './proto/employee.proto';
const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObj = grpc.loadPackageDefinition(packageDef) as unknown as ProtoGrpcType;
const employeePackage = grpcObj.employeePackage;

function startServer() {
    const server = getServer();

    server.bindAsync(`0.0.0.0:${GRPC_PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) {
            return console.error(err);
        }

        console.log(`Your server as started on port ${port}`);
    });
}

function getServer() {
    const server = new grpc.Server();
    server.addService(employeePackage.Employee.service, services);

    return server;
}

export default startServer;

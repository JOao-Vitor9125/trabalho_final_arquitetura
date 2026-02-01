import 'reflect-metadata';
import {Container} from 'inversify';
import {TYPES} from './types';

import { ICarRepo } from '../../domain/repositories/ICarRepository';
import { PrismaCarRepository } from '../database/prisma/PrismaCarRepository';

import { IRentRepo } from '../../domain/repositories/IRentRepository';
import { PrismaRentalRespository } from '../database/prisma/PrismaRentalRepository';

import {CreateRental} from '../../application/userCases/createRental/CreateRental';

const container =  new Container();

container.bind<ICarRepo>(TYPES.ICarRepo).to(PrismaCarRepository);
container.bind<IRentRepo>(TYPES.IRentRepo).to(PrismaRentalRespository);
container.bind<CreateRental>(CreateRental).toSelf();

export {container};


import {describe,it,expect, vi,beforeEach} from 'vitest';
import {CreateRental} from './CreateRental';
import {memoryPrismaCarRepository} from '../../../infra/database/inMemory/inMemoryRepo_car';
import {memoryPrismaRentalRespository} from '../../../infra/database/inMemory/inMemoryRepo_rental';
import { Car } from '../../../domain/entities/Car';


describe('CreateRental', ()=>{
    let createRent:CreateRental;
    let carRepo:memoryPrismaCarRepository;
    let rentalRepo:memoryPrismaRentalRespository;
    
    beforeEach(()=>{
        carRepo = new memoryPrismaCarRepository;
        rentalRepo = new memoryPrismaRentalRespository;

        createRent= new CreateRental(carRepo, rentalRepo);
    })


    it("Deve conseguir registrar um aluguel sobre circunstâncias normais", async ()=>{

        carRepo.carroTable.push(new Car("abc-123", 2020, "preto", false, "3932321"));


        const dataAmanha = new Date();
        dataAmanha.setDate(dataAmanha.getDate() + 1);
        dataAmanha.setMinutes(dataAmanha.getMinutes() + 1);

        const rental = await createRent.execute({
            id_user:"1234", 
            id_carro:"3932321", 
            devolucao: dataAmanha
        });

        expect(rental).toHaveProperty("tenant_id");
        expect(rental.tenant_id).toBe("1234");
        expect(rental.car_id).toBe("3932321");
        expect(carRepo.carroTable[0]?.isRented).toBe(true);
        expect(rentalRepo.alugueis[0]?.expected_date).toBe(dataAmanha);
        expect(rentalRepo.alugueis[0]!.start_date).toBeInstanceOf(Date);
    })


    it("Deve barrar o aluguel se o locatário ja tiver um alguel em aberto", async ()=>{

        carRepo.carroTable.push(new Car("abc-123", 2020, "preto", false, "3932321"));
        carRepo.carroTable.push(new Car("def", 2022, "prateado", false, "923983"));

        const dataAmanha = new Date();
        dataAmanha.setDate(dataAmanha.getDate() + 1);
        dataAmanha.setMinutes(dataAmanha.getMinutes() + 1);

        await createRent.execute({
            id_user:"456",
            id_carro:"3932321",
            devolucao: dataAmanha
        });

        try {
            await createRent.execute({
            id_user: "456",
            id_carro: "923983",
            devolucao: new Date("2026-05-13")
            });
            expect.fail("Deveria ter lançado um erro, mas passou direto.");
        } catch (error: any) {
            console.log("Mensagem capturada:", error.message);
            expect(error.message).toBe("Alerta! O Cliente tem um aluguel em aberto");
        }

        expect(carRepo.carroTable[0]?.isRented).toBe(true);
        expect(rentalRepo.alugueis[0]?.tenant_id).toBe('456');
        expect(rentalRepo.alugueis[0]?.expected_date).toBe(dataAmanha);
        expect(rentalRepo.alugueis).toHaveLength(1);
    })


    it("Deve barrar o alguel se o tempo de locação for menor que 24 horas", async()=>{

        const dataInvalida = new Date();
        dataInvalida.setDate(dataInvalida.getDate() + 1);
        dataInvalida.setMinutes(dataInvalida.getMinutes() - 1);

        carRepo.carroTable.push(new Car("abc-123", 2020, "preto", false, "3932321"));

        try {
            await createRent.execute({
            id_user: "456",
            id_carro: "3932321",
            devolucao: dataInvalida
            });
            expect.fail("Deveria ter lançado um erro, mas passou direto.");
        }catch (error: any) {
            console.log("Mensagem capturada:", error.message);
            expect(error.message).toBe("Alerta! O período de aluguel deve ser de pelo menos 24 horas");
        }
        expect(carRepo.carroTable[0]?.isRented).toBe(false);
    })


    it("Deve barrar o aluguel se o carro a ser alugado está indisponivel para aluguel", async()=>{
        
        carRepo.carroTable.push(new Car("abc-123", 2020, "preto", false, "3932321"));

        await createRent.execute({
            id_user:"456",
            id_carro:"3932321",
            devolucao: new Date("2026-12-12")
        });

        expect(carRepo.carroTable[0]?.isRented).toBe(true);

        try {
            await createRent.execute({
            id_user: "789",
            id_carro: "3932321",
            devolucao: new Date("2026-6-15")
            });
            expect.fail("Deveria ter lançado um erro, mas passou direto.");
        }catch (error: any) {
            console.log("Mensagem capturada:", error.message);
            expect(error.message).toBe("Alerta! Carro já está alugado no momento");
        }
        expect(rentalRepo.alugueis).toHaveLength(1);
    })
})